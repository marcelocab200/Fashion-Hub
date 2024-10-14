import React, { ReactNode, useEffect, useState } from 'react';

import styles from './index.module.scss';

import OpenWrapper from "src/images/OpenWrapper.png";

import { IoIosArrowDown, IoIosArrowForward  } from "react-icons/io";


type WrapperProps = {
    title: string,
    children: ReactNode,
    className: string
}

export default function Wrapper(props: WrapperProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={props.className}>
      <div className={styles["Wrapper-title"]}
        onClick={() => toggleOpen()}
        style={(!isOpen && props.title !== "Baixe nosso aplicativo") ? { // Deixa de exibir a borda inferior quando o Wrapper está fechado nos Wrappers que nao sao o Download.
          "borderBottom": "none"
        } : {}}
        >
        <p>{props.title}</p>
        {isOpen ? <IoIosArrowDown size={40}/> : <IoIosArrowForward size={40}/>}
      </div>
      <div 
        className={styles["Wrapper-content"]}
      >
        {isOpen && props.children}
      </div>
    </div>
  );
};