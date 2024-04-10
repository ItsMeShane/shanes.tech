const MessagePrompts = [
   'Tell me about Shane.',
   'What kind of professional experience does Shane have?',
   'What projects has Shane worked on?',
   'What technologies is Shane proficient in?',
   'Write a poem about Shane.',
   'What challenges has Shane overcome in previous projects?',
   'What certifications does Shane have?',
   "Can you provide examples of Shane's problem-solving skills?",
   'Describe Shane using three words.',
   'What programming languages is Shane comfortable working with?',
   'How does Shane prioritize and manage time effectively?',
   'Share a notable achievement or recognition Shane has received.',
   "What are Shane's goals for professional development?",
   'How can I contact Shane?',
];

let msgIndex = 0;
export default function getNextMessage() {
   if (msgIndex == MessagePrompts.length) {
      msgIndex = 0;
   }
   return MessagePrompts[msgIndex++];
}
