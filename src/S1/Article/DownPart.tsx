import React from 'react';
import { BtnOrLink } from '../../Common/btnOrLink/btnOrLink';
import s from './downPart.module.scss';

export function DownPart() {

    const btn = {
        name: s.more,
        link: '',
        stylees: {}
    }

    return (
        <div className={s.wrapper}>
            <div className={s.article}>
                <h1 className={s.title}>Lorem, ipsum.</h1>
                <p className={s.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit ipsam error, non illum voluptatum nam minima molestiae labore, ex, tenetur ea distinctio amet beatae et ipsa vero?</p>
                <ul className={s.info}>
                    <li className={s.ceil}>927<span>Lorem, ipsum.</span></li>
                    <li className={s.ceil}>297<span>Lorem, ipsum.</span></li>
                    <li className={s.ceil}>121<span>Lorem, ipsum dolor.</span></li>
                </ul>
                <BtnOrLink {...btn}>Read more</BtnOrLink>
            </div>
            <div className={s.image}></div>
            {/* <img src=''/>                         
            props */}
        </div>
    )
}