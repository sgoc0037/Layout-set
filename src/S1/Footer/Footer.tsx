import React, { MouseEventHandler } from "react";
import { Q_h2_span } from "../../Common/TextComponents/twoHTML/Q_h2_span";
import { ICommonPast } from "../../types/types";
import s from './footer.module.scss';

interface IFooter extends ICommonPast {
    link: string | null
}

export function Footer({ name, stylees, link, children }: IFooter) {

    const content = ['Lorem, ipsum dolor.', 'Lorem ipsum dolor sit amet consectetur adipisicing.'];
    const names = [name, s.link].join(' ');

    function callMe(e: React.MouseEvent<HTMLButtonElement>) {
        //скопировать в буфер.
    }

    return (
        <footer className={s.footer}>
            <Q_h2_span>
                {content}
            </Q_h2_span>
            <button className={s.link} onClick={callMe}>1231456234233</button>
            {!link &&
                <button style={stylees} className={`${s.link} ${name}`}>
                    {children}
                </button>
            }
            {link &&
                <a style={stylees} className={`${s.link} ${name}`}
                    href={link}>
                    {children}
                </a>
            }
        </footer>
    )
}