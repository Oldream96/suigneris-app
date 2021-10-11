import React from 'react';
import { css } from "@emotion/react";
import InfoCircle from '../common/InfoCircle';

const InfoNew = () => {
    return (
        <div css={css`
        padding-top: 2rem;
        padding-bottom: 2rem;
        width:100%;
        background: var(--gris4);
        `}
      >
        <div css={css`
          max-width:1200px;
          display: flex;
          margin: auto;
          justify-content: center;
          @media( max-width: 1200px ){
              flex-direction: column;
              align-items: center;

          }
        `}>
            <InfoCircle imagen={'presentacion1'} brand={'New Arrivals'}/>
            <InfoCircle imagen={'presentacion3'} brand={'Big Sale'} />
            <InfoCircle imagen={'presentacion4'} brand={'Promotions'}/>
        </div>
    </div>
    );
};

export default InfoNew;