import React, { useState } from "react";
import { CommonCeil } from "../../Common/Ceil/CommonCeil";
import { S1header } from "../../Common/Header/CommonHeader";
import { useInput } from "../../Hooks/useInput";
import { ICommonPast } from "../../types/types";
import s from './S1_header.module.scss';

export function S1_header({}: ICommonPast) {

    const [icon, setIcon] = useState<boolean>(false);
    const { value, changeHandler } = useInput();

    const clickHandler = () => setIcon(true);

    const obj = {
        headerStrList: ['Logo', 'Home', 'About Us', 'Blog', 'Contact'],
        headerLinkList: ['', '', '', '', 'фвыфвы'],
        header: {
            name: s.header
        },
        ceil: {
            name: s.ceil
        },
    }

    return <S1header {...obj.header}>
        {
            obj.headerStrList.map((headerStr, index) => {

                let prep = { ...obj.ceil, link: obj.headerLinkList[index] };

                return <CommonCeil
                    key={headerStr}
                    {...prep}
                >
                    {headerStr}
                </CommonCeil>
            })
        }

        <div
            onClick={clickHandler}
            className={s.headerSearch}>
            {icon ? <input value={value} onChange={changeHandler} placeholder='Search' /> : <img
                src='../../images/SVG/iconmonstr-magnifier-lined.svg' />}
        </div>

        <hr />
    </S1header>
}