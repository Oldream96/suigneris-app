import { css } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
    return (
        <header css={css`
                padding: 1rem 0;
                background: rgba(0,0,0,.8);
            `}>
            <ContenedorHeader>
                <div css={css`
                    margin:auto;
                    font-family: 'Ephesis', cursive;
                    font-size: 6rem;
                    font-weight: bold;
                    color: white;
                `}>
                     Sui Gneris
                </div>
            </ContenedorHeader>      
        </header>
    );
};

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media ( min-width: 768px ){
        display:flex;
        justify-content: space-between;
    }
`

export default Header;