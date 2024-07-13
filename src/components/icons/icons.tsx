"use client"

import anime from "animejs";
import { forwardRef, useEffect, useRef, useState } from "react";

export const IconMenuActive = forwardRef<HTMLDivElement, {active: boolean}> (({active, ...props}, ref) => {

  const menu_open = "M 0 5.982 L 0 5.982 C 0 4.964 0 3.946 0 2.928 C 0 1.293 1.854 0.349 3.176 1.31 L 9.824 6.144 C 10.525 6.655 11.475 6.655 12.176 6.144 L 18.824 1.31 C 20.146 0.349 22 1.293 22 2.928 C 22 3.946 22 4.964 22 5.982 C 22 6.621 21.694 7.223 21.176 7.599 C 18.176 9.781 15.176 11.963 12.176 14.145 C 11.475 14.655 10.525 14.655 9.824 14.145 C 6.824 11.963 3.824 9.781 0.824 7.599 C 0.306 7.223 0 6.621 0 5.982";
  const menu_close ="M 0 9.5 L 0 5.5 C 0 4.395 0.895 3.5 2 3.5 C 3.2 3.5 4.4 3.5 5.6 3.5 L 9.2 3.5 C 10.4 3.5 11.6 3.5 12.8 3.5 L 16.4 3.5 C 17.6 3.5 18.8 3.5 20 3.5 C 21.105 3.5 22 4.395 22 5.5 C 22 6.833 22 8.167 22 9.5 C 22 10.605 21.105 11.5 20 11.5 C 14 11.5 8 11.5 2 11.5 C 0.895 11.5 0 10.605 0 9.5 C 0 9.5 0 9.5 0 9.5";

  const [menuStatus, setMenuStatus] = useState(false)
  const pathRef = useRef(null)

  useEffect(()=> {
    if(pathRef.current){
      anime({
        targets: pathRef.current,
        d:[
          {value: active ? menu_close : menu_open}
        ],
        easing: 'easeOutQuad',
        duration: 200,
        loop: false
      });
  
    }
    
  },[active])


  return (
    <div ref={ref}>
      <svg id="menu" width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={pathRef} d={menu_open} fill="white" />
      </svg>
    </div>
  )
})