import React, { MouseEventHandler } from "react";
import s from './footer.module.scss';

interface IFooter extends ICommonPast {
    link: string | null
}

export function Footer(props: IFooter) {

    const { name, stylees, link } = props;

    function callMe(e:React.MouseEvent<HTMLButtonElement>) {
        //скопировать в буфер.
    }

    return (
        <footer className={s.footer}>
            <div className={s.note}>
                <h2></h2>
                <span></span>
            </div>
            <button className={s.link} onClick={callMe}>1231456234233</button>
            {!link &&
                <button style={stylees} className={`${s.link} ${name}`}>
                    {props.children}
                </button>
            }
            {link &&
                <a style={stylees} className={`${s.link} ${name}`}
                    href={link}>
                    {props.children}
                </a>
            }
        </footer>
    )
}