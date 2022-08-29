import styled, {css} from "styled-components";

interface VerifyIsChecked{
    isCheck: boolean
}

export const Main = styled.div<VerifyIsChecked>`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    padding: 16px;
    border-radius: 8px;

    background-color: var(--gray-500);

      ${(props) => props.isCheck && css`
        background-color: rgba(38, 38, 38, .5);
        text-decoration: line-through;
        text-decoration-color: var(--gray-100);
        textarea{
            opacity: .5;
        }
    `}

    .container{
        display: block;
        position: relative;
        padding-left: 27px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        input{
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        .checkmark{
            position: absolute;
            top: -6px;
            left: 0;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background-color: transparent;
            border: 3px solid var(--blue);
        }

        &:hover input ~ .checkmark{
            border-color: var(--blue-dark);
            background-color: rgba(30, 111, 159, 0.2);
        }

        input:checked ~ .checkmark{
            background-color: var(--purple-dark);
            border: 3px solid var(--purple-dark);
        }

        input:checked ~ .checkmark:after {
            display: block;
        }

        .checkmark:after{
            content: '';
            position: absolute;
            display: none;
        }

        .checkmark:after {
            left: 6px;
            top: 2px;
            width: 5px;
            height: 10px;
            border: solid var(--gray-100);
            border-width: 0 1px 1px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        input:checked:hover ~ .checkmark {
            background-color: var(--purple);
            border: 3px solid var(--purple);
        }
    }
    

    textarea{
        width: 100%;

        resize: none;
        
        background-color: transparent;
        border-radius: 8px;
        outline: none;
        border: 1px solid transparent;
        padding: 8px;
        
        line-height: 1.4;
        text-align: start;
        font-size: 1.4rem;
        color: var(--gray-100);
        
        overflow: hidden;

        &:focus{
            border: 1px solid var(--purple-dark);
        }
    }

    svg{
        box-sizing: initial;
        color: var(--gray-300);
        padding: 6px;
    }

    svg:hover{
        background-color: var(--gray-400);
        color: var(--danger);
        border-radius: 4px;
        cursor: pointer;
    }
`