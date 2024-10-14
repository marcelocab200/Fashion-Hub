import React, { CSSProperties, HTMLAttributes, ReactNode } from "react";

import styles from "./index.module.scss";

type ButtonProps = {
    children?: ReactNode,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    style?: CSSProperties,
    id?: string
}

export default function Button(props: ButtonProps) {
    return (
        <button id={props.id} type={props.type || "button"} className={styles["Purple-button"]} onClick={props.onClick} style={props.style}>
            {props.children}
        </button>
    )
}