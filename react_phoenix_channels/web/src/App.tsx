import { Socket } from 'phoenix';
import { useEffect, useState } from 'react';

interface Todo {
  id: number
  name: string
  completed: boolean
}

function App() {
  const [name, setName] = useState("")
  const [channel, setChannel] = useState<any>()
  const [todos, setTodos] = useState<Todo[] | undefined>(undefined)

  useEffect(() => {
    // setup phoenix channels connection
    let socket = new Socket('ws://localhost:4000/socket')
    let channel = socket.channel("todo:lobby");
    socket.connect();
    channel.join()
      .receive("ok", response => { console.log("Joined Channel " + response) })
      .receive("error", error => { console.error("Error Joining Channel" + error) })    

    channel.push("get", {}).receive("ok", res => updateTodos(res.todos))

    channel.on("get", res => updateTodos(res.todos))
    setChannel(channel)
  }, [])

  const updateTodos = (todos: Todo[]) => { setTodos(todos.sort((a, b) => a.name.localeCompare(b.name))) }

  const pushEvent = () => {
    channel.push("add", {
      todo: { name, completed: false }
    })
    setName("")
  }

  const changeTodo = (event: string, id: number) => { channel.push(event, { todo: { id } }) }

  return (
    <div className='container'>
      <h1>Realtime Todo</h1>

      <div className='actions'>
        <input 
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)} 
          placeholder='Name...' 
        />
        <button onClick={pushEvent}>Add</button>
      </div>

      <div className='todos'>
        { todos ? todos.map(todo => (
          <div key={todo.id} className='card'>
            <h3>{todo.name}</h3>
            <div className='card-actions'>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => changeTodo("switch", todo.id)} 
              />
              <span onClick={() => changeTodo("delete", todo.id)}>🗑️</span>  
            </div>                        
          </div>
        )) : <h3>No todo found</h3> }
      </div>
    </div>
  )
}

export default App
