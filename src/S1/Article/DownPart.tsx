import React from 'react';
import { Button } from '../../Common/Button/Button';
import s from './downPart.module.scss';
import btn from './topPart.module.scss';

export function DownPart() {

    const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur nemo doloribus ipsam? Est sit ad sint at impedit sunt consequuntur soluta eos quasi dolores accusamus illo esse sapiente quo repudiandae libero, distinctio iste aspernatur voluptatum numquam ex reiciendis odio! Tempora autem doloribus rerum culpa assumenda sed fuga, iusto itaque reiciendis obcaecati dolores alias. Vel.';

    return (
        <div className={s.wrapper}>
            <div className={s.article}>
                <h1 className={s.title}>Lorem, ipsum.</h1>
                <p className={s.description}>{text}</p>
                <ul className={s.info}>
                    <li className={s.ceil}>927<span>Lorem, ipsum.</span></li>
                    <hr />
                    <li className={s.ceil}>297<span>Lorem, ipsum.</span></li>
                    <hr />
                    <li className={s.ceil}>121<span>Lorem, ipsum dolor.</span></li>
                </ul>
                <Button icon='../../images/SVG/arrow_right.svg' name={btn.more}>
                    Read more
                </Button>
            </div>
            <img className={s.image} src='../../images/travel.jpg' />
        </div>
    )
}