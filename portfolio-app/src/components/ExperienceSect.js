import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

export default function ExperienceSect() {

  return (

    <div className="bg-[#c9c9c9] w-[full] h-[150px] p-2 flex justify-evenly">
      <img className="" src='csharp.svg' />
      <img className="" src='git.svg' />
      <img className="" src='html5.svg' />
      <img className="" src='javascript.svg' />
      <img className="" src='json.svg' />
      <img className="" src='nextdotjs.svg' />
      <img className="" src='nodedotjs.svg' />
      <img className="" src='npm.svg' />
      <img className="" src='postgresql.svg' />
      <img className="" src='react.svg' />
      <img className="" src='rubyonrails.svg' />
      <img className="" src='tailwindcss.svg' />
    </div>

  )
}

//const images = [
  //   'csharp.svg',
  //   'git.svg',
  //   'html5.svg',
  //   'javascript.svg',
  //   'json.svg',
  //   'nextdotjs.svg',
  //   'nodedotjs.svg',
  //   'npm.svg',
  //   'postgresql.svg',
  //   'react.svg',
  //   'rubyonrails.svg',
  //   'tailwindcss.svg'
  // ];

  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;

  //   const slideDuration = 5; // Adjust the duration (in seconds) for each slide
  //   const slideDelay = 1; // Adjust the delay (in seconds) between each slide

  //   let currentIndex = 0;

  //   const slide = () => {
  //     const tl = gsap.timeline({ onComplete: slide });

  //     tl.to(container, { duration: slideDuration, x: '-100%', ease: 'power1.inOut' })
  //       .add(() => {
  //         currentIndex = (currentIndex + 1) % images.length;
  //         container.appendChild(container.firstChild);
  //         container.style.transform = 'translateX(0)';
  //       }, `-=${slideDuration - slideDelay}`);
  //   };

  //   const interval = setInterval(slide, (slideDuration + slideDelay) * 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [images.length]);