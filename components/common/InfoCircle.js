import { css } from '@emotion/react';
import React from 'react';

const InfoCircle = ({imagen,brand}) => {
    return (
        <div css={css`
            margin: 1.5rem;
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            width: 380px;
            height: 380px;
        `}>
            <img src={`/static/img/${imagen}.jpeg`} width="380px" height="380px"  />
            <div css={css`
                background: rgba(66,66,66,.8);
                color: white;
                text-align: center;
                height: 80px;
                font-size: 5rem;
                position: absolute;
                top: 42%;
                width: 100%;
                font-family: 'Cormorant Garamond', serif;
                font-weight: 100;
                display: flex;
                justify-content: center;
                align-items: center;
            `}>
                <span>{brand}</span>
            </div>
        </div>
    );
};

export default InfoCircle;