import { useContext, useEffect, useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import TextArea from 'react-textarea-autosize'
import Context from '../../GlobalContext'
import { ITasks } from '../../interfaces'
import * as S from './style'

const Task = ({id, isChecked, text}: ITasks) => {

    const { tasks, setTasks } = useContext(Context)

    const [value, setValue] = useState<string>('')

    useEffect(() => {
        setValue(text)
    },[])

    const storageTasks = Array.from(tasks)

    const handleChangeCheck = () => {
        const task = storageTasks.find((task) => task.id === id)
        const taskIndex = storageTasks.findIndex((task) => task.id === id)
        if(task){
            task.isChecked = !isChecked
            storageTasks.splice(taskIndex, 1, task)
            setTasks(storageTasks)
        }
    }    

    const handleChangeText = () => {
        const task = storageTasks.find((task) => task.id === id)
        const taskIndex = storageTasks.findIndex((task) => task.id === id)
        if(task){
            task.text = value
            storageTasks.splice(taskIndex, 1, task)
            setTasks(storageTasks)
        }
    }

    const handleOnDelete = () => {
        const taskIndex = storageTasks.findIndex((task) => task.id === id)
        if(taskIndex !== -1){
            storageTasks.splice(taskIndex, 1)
            setTasks(storageTasks)
        }
    }

    return(
        <S.Main isCheck={isChecked}>
            <label className='container'>
                <input 
                    type='checkbox' 
                    checked={isChecked} 
                    onChange={handleChangeCheck}
                />
                <span className='checkmark'></span>
            </label>
            <TextArea 
                value={value} 
                rows={1}
                disabled={isChecked} 
                onBlur={handleChangeText}
                onChange={(e) => {setValue(e.target.value)}}
            />
            {isChecked && (
                <FiTrash2 size={16} onClick={handleOnDelete}/>
            )}
        </S.Main>
    )
}

export default Task