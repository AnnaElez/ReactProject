import React from 'react';
import c from './spiner.module.css'

export default function Spiner() {
    return (
        <div className={c.container}>
            <div className={c.loader}>Loading...</div>
        </div>
    )

}