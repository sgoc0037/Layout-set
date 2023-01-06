import React from "react";
import s from './card.module.css';
import PropTypes from 'prop-types';

export const Card = ({ name, mode, path, children, ...props }) => {

    const card = [name, s.card].join(' ');
    const image = mode === 'fill' ? s.fill : s.half;
    const wrap = mode === 'fill' ? [s.wrapFill,s.wrap] : [s.wrapHalf,s.wrap];

    return <div
        {...props}
        className={card}
    >
        {
            mode && <div className={image}>
                <img
                    src={path} />
            </div>
        }

        <div className={wrap.join(' ')}>
            <h3>im h3</h3>
            <p>im p</p>
            <span>im span</span>
            {children}
        </div>
    </div>
}


Card.propTypes = {
    name: PropTypes.string,
    mode: PropTypes.oneOf(['fill', 'half']),
    path: PropTypes.string
}

Card.defaultProps = {
    mode: '',
    path: ''
}