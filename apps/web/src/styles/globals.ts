import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        overflow: hidden;
        --swiper-pagination-color: #D6AF94;
        --swiper-pagination-bullet-size: 8px;
        --swiper-pagination-bullet-width: 8px;
        --swiper-pagination-bullet-height: 8px;
        --swiper-pagination-bullet-inactive-color: #000;
        --swiper-pagination-bullet-inactive-opacity: 0.2;
        --swiper-pagination-bullet-opacity: 1;
        --swiper-pagination-bullet-horizontal-gap: 4px;
        --swiper-pagination-bullet-vertical-gap: 6px;
    }
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }

        input[type='password']::-ms-reveal,
        input[type='password']::-ms-clear {
        display: none;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    }
    `;
