import { createContext, SetStateAction } from "react";
import { ITasks } from "./interfaces";

interface GlobalContext{
    tasks: ITasks[];
    setTasks: React.Dispatch<SetStateAction<ITasks[]>>
}

const Context = createContext({} as GlobalContext)

export default Context