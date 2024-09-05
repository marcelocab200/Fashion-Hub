import React, { ReactNode } from "react";

import styles from "./index.module.scss";

type ButtonProps = {
    children?: ReactNode,
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    return (
        <button type= "button" className={styles["Purple-button"]} onClick={props.onClick}>
            {props.children}
        </button>
    )
}