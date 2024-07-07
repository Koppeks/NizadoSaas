"use client";

import { ExpandMenuProps } from "@/utils/types/component.types";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Text } from "../text/text";

export const ExpandMenu = forwardRef<HTMLElement, ExpandMenuProps>(
  ({ menuTitle, aligned, elements, ...props }, ref) => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event: Event) => {
        if (
          menuRef.current &&
          event.target instanceof HTMLElement &&
          !(menuRef.current as HTMLElement).contains(event.target)
        ) {
          setIsMenuActive(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isMenuActive, setIsMenuActive]);

    return (
      <div ref={menuRef} className="preset_expand_menu">
        <Text
          onClick={() => setIsMenuActive(!isMenuActive)}
          className={`title ${isMenuActive ? "active" : ""}`}
          as={"li"}
        >
          {menuTitle}
        </Text>
        <section
          
          className={`menu_dropdown ${isMenuActive ? "active" : ""} ${aligned}`}
        >
          {elements.length > 0 &&
            elements.map((element, index) => (
              <Text as="a" key={index} className="element_text">
                {element.text}
              </Text>
            ))}
        </section>
      </div>
    );
  }
);
