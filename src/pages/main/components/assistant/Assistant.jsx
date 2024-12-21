import React, { useState, useEffect, useRef } from 'react';
import {
   Container,
   Input,
   InputButton,
   Messages,
} from './AssistantStyles';
import { createThread, loadMessages, sendMessageToAssistant } from './OpenAIAssistant';
import starterMessages from './OpenAIAssistant';
import TypeingMessage from './TypeingMessage';
import getNextMessage from './MessagePrompts';

const Assistant = () => {
   const [textAreaValue, setTextAreaValue] = useState('');
   const [messageList, setMessageList] = useState([starterMessages]);
   const [threadId, setThreadId] = useState(null);
   const [isTypeing, setIsTypeing] = useState(false);
   const textareaRef = useRef(null);

   // loads saved thread & messages if saved locally
   // else creates new thread & messages
   useEffect(() => {
      const initializeConversation = async () => {
         const storedThreadId = localStorage.getItem('threadId');
         let loadedMessages = [];
         if (storedThreadId) {
            setThreadId(storedThreadId);
            loadedMessages = await loadMessages(storedThreadId);
         } else {
            const newThreadId = await createThread();
            setThreadId(newThreadId);
            localStorage.setItem('threadId', newThreadId);
         }
         // Load starter messages
         setMessageList([...starterMessages, ...loadedMessages]);
      };

      initializeConversation();
   }, []);

   // auto scroll to bottom
   const messagesRef = useRef(null);
   useEffect(() => {
      messagesRef.current.scroll({
         top: messagesRef.current.scrollHeight,
         behavior: 'smooth',
      });
   }, [messageList, isTypeing]);

   // shift + enter adds line
   const handleKeyDown = (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
         event.preventDefault();
         sendMessage();
      }
   };

   const sendMessage = async () => {
      if (textAreaValue.trim() === '') {
         return;
      }
      if (messageList[messageList.length - 1].sender !== 'assistant') {
         // cant send back-to-back messages
         return;
      }

      // add user message to chat
      setMessageList((prevMessages) => [
         ...prevMessages,
         { text: textAreaValue, sender: 'user' },
      ]);
      // clear text area
      setTextAreaValue('');
      textAreaHeightAdjust();

      // show typing visual
      let typingTimeout = setTimeout(function () {
         setIsTypeing(true);
      }, 1000);

      // get then add assistant message to chat
      try {
         const assistantMessage = await sendMessageToAssistant(threadId, textAreaValue);
         addMessageToChat(assistantMessage, 'assistant');
         clearTimeout(typingTimeout);
      } catch (error) {
         console.error('Failed to send message to Assistant');
         console.error(error);
      } finally {
         setIsTypeing(false);
      }
   };

   const addMessageToChat = (message, role) => {
      setMessageList((prevMessages) => [
         ...prevMessages,
         { text: message, sender: role },
      ]);
   };

   const resetThread = () => {
      // create a new thread and update saved data
      createThread().then((newThreadId) => {
         setThreadId(newThreadId);
         localStorage.setItem('threadId', newThreadId);
         // clear message list
         setMessageList(starterMessages);
      });
   };

   const handleDiceClick = () => {
      setTextAreaValue(getNextMessage());
      textAreaHeightAdjust();
   };
   const textAreaHeightAdjust = () => {
      const element = textareaRef.current;
      element.style.height = `1px`;
      requestAnimationFrame(() => {
         element.style.height = `${element.scrollHeight}px`;
      });
   };
   useEffect(() => {
      textAreaHeightAdjust();
   }, []);

   return (
      <Container>
         <button id='resetThread' onClick={resetThread}>
            <i className='fa-solid fa-rotate-right'></i>
         </button>
         <Messages ref={messagesRef}>
            {messageList.map((message, index) => (
               <span
                  key={index}
                  className={message.sender === 'user' ? 'user' : 'assistant'}
               >
                  {message.text}
               </span>
            ))}
            {isTypeing && <TypeingMessage />}
         </Messages>
         <Input>
            <textarea
               ref={textareaRef}
               value={textAreaValue}
               placeholder='Ask about Shane!'
               onChange={(e) => setTextAreaValue(e.target.value)}
               onKeyDown={handleKeyDown}
               onInput={textAreaHeightAdjust}
            />
            <InputButton onClick={sendMessage}>
               <i className='fa-regular fa-paper-plane'></i>
            </InputButton>
            <InputButton onClick={handleDiceClick}>
               <i className='fa-solid fa-shuffle'></i>
            </InputButton>
         </Input>
      </Container>
   );
};

export default Assistant;
