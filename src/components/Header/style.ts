import styled from "styled-components";

export const Main = styled.header`
    width: 100vw;
    height: 200px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--gray-700);
`

export const AddTask = styled.form`
    width: min(73.6rem, 100%);
    height: 54px;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 1.6rem;
    
    position: absolute;
    top: 170px;
    
    input{
        width: 63.8rem;
        height: 100%;
        
        border-radius: 8px;
        padding: 16px;
        
        border: 1px solid #0D0D0D;
        outline: none;
        background-color: var(--gray-500);
        color: var(--gray-100);

        ::placeholder{
            font-size: 1.6rem;
            color: var(--gray-300)
        }

        :focus{
            border: 1px solid var(--purple-dark);
        }
    }

    button{
        width: 9rem;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        border: none;
        outline: none;
        border-radius: 8px;
        padding: 16px;

        background-color: var(--blue-dark);
        color: var(--gray-100);

        font-size: 1.4rem;
    }

    button:hover{
        cursor: pointer;
        background-color: var(--blue);
    }

    button:disabled{
        cursor: not-allowed;
        background-color: var(--disabled-blue);
    }

`