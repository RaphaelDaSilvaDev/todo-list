import { useContext, useEffect, useState } from 'react'
import Context from '../../GlobalContext'
import Task from '../Task'
import * as S from './style'

const List = () => {

    const { tasks } = useContext(Context)
    const [counterTasksCheckeds, setCounterTasksCheckeds] = useState<number>(0)

    useEffect(() => {
        let arrayChecked: string[] = []
        tasks.map((task) => {
            if(task.isChecked){
                arrayChecked.push(task.id)
            }else{
                const index = arrayChecked.findIndex((item) => item === task.id)
                if(index !== -1) arrayChecked.splice(index, 1)
            }
        })
        setCounterTasksCheckeds(arrayChecked.length)
    },[tasks])

    return(
        <S.Main>
            <S.TaskInfo>
                <div>
                    <span>Tarefas criadas</span>
                    <p>{tasks.length}</p>
                </div>
                <div>
                    <span>Concluídas</span>
                    <p>{counterTasksCheckeds} de {tasks.length}</p>
                </div>
            </S.TaskInfo>
            <S.TaskList>
                {tasks.map((task) => (
                    <Task key={task.id} id={task.id} isChecked={task.isChecked} text={task.text} />
                ))}
            </S.TaskList>
        </S.Main>
    )
}

export default List