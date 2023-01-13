import React, { MouseEventHandler } from "react";
import { Circle } from "../../Common/Circle/Circle";
import { Icon } from "../../Common/Icon/Icon";
import { ContentBoundary } from "../../Common/Layouts/ContentBoundary";
import { Q_h3_span_span } from "../../Common/TextComponents/threeHTML/Q_h3_span_span";
import { Q_h2_span } from "../../Common/TextComponents/twoHTML/Q_h2_span";
import { Mail } from "../../images/SVG/mail";
import { Phone } from "../../images/SVG/phone";
import { ICommonPast } from "../../types/types";
import s from './footer.module.scss';

interface IFooter extends ICommonPast {
    link: string | null
}

export function Footer({ name, stylees, link, children }: IFooter) {

    const content = ['Lorem, ipsum dolor.', 'Lorem ipsum dolor sit amet consectetur adipisicing.'];
    const names = [name, s.link].join(' ');

    return (
        <ContentBoundary>
            <footer className={s.footer}>
                <Q_h2_span>
                    {content}
                </Q_h2_span>
                <Circle name={s.circle1}>
                    <Icon stylees={{ fill: 'whitesmoke' }} component={<Phone />} />
                    <Q_h3_span_span name={s.article}>
                        {[
                            'Call us',
                            '+1234567890',
                            'We are always here'
                        ]}
                    </Q_h3_span_span>
                </Circle>
                <Circle name={s.circle2}>
                    <Icon stylees={{ fill: 'whitesmoke' }} component={<Mail />} />
                    <h3>
                        Send us an Enquiry.
                    </h3>
                </Circle>
            </footer>
        </ContentBoundary>
    )
}