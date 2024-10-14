import React from 'react';

import styles from './index.module.scss';

type SearchProps = {
    placeholder?: string
}

export default function Search(props: SearchProps) {
    return (
        <input className={styles["Search"]} type="text" placeholder={props.placeholder}/>
    )
}