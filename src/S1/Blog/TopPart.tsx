import React from "react";
import { Button } from "../../Common/Button/Button";
import { Cards } from "../../Common/Cards/Cards";
import { Card } from "../../Common/Cards/UsualCard/Card";
import { ContentBoundary } from "../../Common/Layouts/ContentBoundary";
import { Avatar_names } from "../../Common/TextComponents/avatar_names/Avatar_names";
import { Q_h3_span_button } from "../../Common/TextComponents/threeHTML/Q_h3_span_button";
import { Q_h2_span } from "../../Common/TextComponents/twoHTML/Q_h2_span";
import { Share_fill } from "../../images/SVG/share_fill";
import { makeKey } from "../../utils/utils";
import s from './topPart.module.scss';

export function TopPart() {

    const content = ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus numquam dolore?'];
    const Avatar = <Avatar_names key={makeKey('avatar')} name={s.avatar} path="../../images/JPG/finn.jpg">{'john doe'}</Avatar_names>;
    const Btn = <Button key={makeKey('button')} name={s.button} iconStylees={{ fill: 'whitesmoke' }} icon={<Share_fill />} />;

    return (
        <ContentBoundary>
            <Q_h2_span>
                {content}
            </Q_h2_span>
            <Cards>
                {
                    [...Array(6)].map(item => {
                        return <Card key={makeKey('Cards')} name={s.card}>
                            <img src="../../images/JPG/travel.jpg" />
                            {Avatar}
                            <div className={s.article}>
                                <p>{content[1]}</p>
                                <div>
                                    <i>{content[0]}</i>
                                    {Btn}
                                </div>
                            </div>
                        </Card>
                    })
                }
            </Cards>
        </ContentBoundary>
    )
}