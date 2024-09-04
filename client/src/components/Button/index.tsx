import React, { ReactNode } from "react";

import styles from "./index.module.scss";

export default function Button({children}: {children: ReactNode}) {
    return (
        <button type= "button" className={styles["Purple-button"]}>
            {children}
        </button>
    )
}