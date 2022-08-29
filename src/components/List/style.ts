import styled from "styled-components";

export const Main = styled.div`
    width: min(73.6rem, 100%);

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;

    padding-right: 8px;
    margin-block: 64px;
`

export const TaskInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        gap: 8px;

        span{
            font-weight: bold;
            font-size: 1.4rem;
            color: var(--blue);
        }

        p{
            background-color: var(--gray-400);
            font-weight: bold;
            font-size: 1.2rem;
            color: var(--gray-200);
            padding: 2px 8px;
            border-radius: 16px;
        }
    }
`

export const TaskList = styled.div`
    width: 100%;
    height: calc(100vh - 360px);
    overflow-y: auto;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-direction: column;
    padding-right: 4px;

    ::-webkit-scrollbar {
        width: 10px;
    }
    
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

`