import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Title } from '../ProjectsStyles';

export const ProjectPage = ({ title, images }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const imageRefs = useRef([]);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  const index = imageRefs.current.indexOf(entry.target);
                  setActiveIndex(index);
               }
            });
         },
         { threshold: 0.5 }
      );

      imageRefs.current.forEach((img) => {
         if (img) {
            observer.observe(img);
         }
      });
      return () => {
         imageRefs.current.forEach((img) => {
            if (img) {
               observer.unobserve(img);
            }
         });
      };
   }, [images]);

   const handleNavClick = (index) => {
      if (imageRefs.current[index]) {
         imageRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
         });
         setActiveIndex(index);
      }
   };

   const scrollSlider = (direction) => {
      const slider = document.querySelector('.slider');
      if (slider) {
         const scrollAmount =
            direction === 'left' ? -slider.clientWidth : slider.clientWidth;
         if (direction === 'left') {
            if (slider.scrollLeft <= 0) {
               slider.scrollBy({ left: slider.scrollWidth, behavior: 'smooth' });
            } else {
               slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
         } else {
            if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
               slider.scrollBy({ left: -slider.scrollWidth, behavior: 'smooth' });
            } else {
               slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
         }
      }
   };

   return (
      <Container>
         <ProjectTitle>{title}</ProjectTitle>
         <SliderWrapper>
            <Slider className='slider'>
               {images.map((image, index) => (
                  <Image
                     key={index}
                     src={image.src}
                     alt={image.alt}
                     ref={(el) => (imageRefs.current[index] = el)}
                     draggable='false'
                  />
               ))}
            </Slider>
            <SliderNav>
               {images.map((_, index) => (
                  <NavDot
                     key={index}
                     onClick={() => handleNavClick(index)}
                     className={activeIndex === index ? 'active' : ''}
                  />
               ))}
            </SliderNav>
            <SliderNavButton $position='left' onClick={() => scrollSlider('left')}>
               <i className='fa-sharp fa-solid fa-left-long'></i>
            </SliderNavButton>
            <SliderNavButton $position='right' onClick={() => scrollSlider('right')}>
               <i className='fa-sharp fa-solid fa-right-long'></i>
            </SliderNavButton>
         </SliderWrapper>
      </Container>
   );
};

const Container = styled.div`
   width: 100%;
   height: 100dvh;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const ProjectTitle = styled(Title)`
   margin-top: 50px;
   height: fit-content;
   justify-content: center;
   text-align: center;
   font-size: 60px;
   z-index: 1;
`;

const SliderWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   user-select: none;
`;

const Slider = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
   overflow-x: auto;
   scroll-snap-type: x mandatory;
   scroll-behavior: smooth;
   -ms-overflow-style: none;
   scrollbar-width: none;

   &::-webkit-scrollbar {
      display: none;
   }
`;

const Image = styled.img`
   flex: 1 0 100%;
   scroll-snap-align: center;
   object-fit: cover;
   width: 100%;
   height: 100%;
`;

const SliderNav = styled.div`
   display: flex;
   column-gap: 1rem;
   position: absolute;
   bottom: 1.25rem;
   left: 50%;
   transform: translateX(-50%);
   z-index: 1;
   background-color: #333333dd;
   padding: 10px 20px;
   border-radius: 10px;
`;

const NavDot = styled.div`
   width: 0.8rem;
   height: 0.8rem;
   border-radius: 50%;
   background-color: #fff;
   opacity: 0.75;
   transition: opacity ease 250ms;
   cursor: pointer;

   &:hover {
      opacity: 1;
   }
   &.active {
      opacity: 1;
   }
`;
const SliderNavButton = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   width: 20%;
   cursor: pointer;
   z-index: 1;
   background: transparent;
   &:hover {
      background: rgba(0, 0, 0, 0.1);
   }

   ${({ $position }) => ($position === 'left' ? `left: 0;` : `right: 0;`)}
   display:flex;
   justify-content: center;
   align-items: center;
   i {
      font-size: 8rem;
      opacity: 0.6;
      @media (max-width: 1100px) {
         font-size: 4.5rem;
      }
   }
   @media (max-width: 600px) {
      display: none;
   }
`;
