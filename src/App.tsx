import { useState } from "react"
import Header from "./components/Header"
import List from "./components/List"
import Context from "./GlobalContext"
import { ITasks } from "./interfaces"

function App() {

  const [tasks, setTasks] = useState<ITasks[]>([])

  console.log(tasks)

  return (
   <Context.Provider value={{
    tasks,
    setTasks
  }}>
    <Header/>
    <List/>
   </Context.Provider>
  )
}

export default App
