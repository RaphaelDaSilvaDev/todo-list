import { FormEvent, useContext, useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import {v4 as uuid} from 'uuid'

import Logo from '../../assets/logo.svg'
import Context from '../../GlobalContext'
import { ITasks } from '../../interfaces'
import * as S from './style'

const Header = () => {

    const { setTasks } = useContext(Context)
    const [inputValue, setInputValue] = useState<string>('')

    const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newTask:ITasks = {
            id: uuid(),
            isChecked: false,
            text: inputValue
        }
        setTasks((prev) => [...prev, newTask])
        setInputValue('')
    }

    return (
        <S.Main>
            <img src={Logo}/>
            <S.AddTask onSubmit={handleAddTask} >
                <input 
                    placeholder='Adicione uma nova tarefa' 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    type='text'
                />
                <button 
                    disabled={inputValue === ""}
                >
                    Criar <FiPlusCircle size={16}/>
                </button>
            </S.AddTask>
        </S.Main>
    )
}

export default Header