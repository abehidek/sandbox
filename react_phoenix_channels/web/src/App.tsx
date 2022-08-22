import { Socket } from 'phoenix';
import { useEffect, useState } from 'react';

function App() {
  interface Todo {
    id: number
    name: string
    completed: boolean
  }

  const [name, setName] = useState("")
  const [channel, setChannel] = useState()
  const [todos, setTodos] = useState<Todo[] | undefined>(undefined)

  useEffect(() => {
    let socket = new Socket('ws://localhost:4000/socket')
    let channel = socket.channel("todo:lobby");
    socket.connect();
    channel.join()
      .receive("ok", response => { console.log("Joined Channel "+response) })
      .receive("error", error => { console.error("Error Joining Channel"+error) })    

    channel.push("get", {}).receive("ok", res => setTodos(res.todos))
    channel.on("get", res => setTodos(res.todos.sort((a, b) => a.name.localeCompare(b.name))))
    setChannel(channel)
  }, [])

  const pushEvent = () => {
    channel.push("add", {
      todo: {
        name,
        completed: false
      }
    }).receive("ok", res => console.log("Todo Added "+res))
    setName("")
  }

  const switchTodo = (id: number) => {
    channel.push("switch", { todo: { id } }).receive("ok", res => setTodos(res.todos.sort((a, b) => a.name.localeCompare(b.name))))
  }

  return (
    <div className='container'>
      <h1>Realtime Todo</h1>

      <div className='actions'>
        <input type="text" value={name} onChange={(e: any) => setName(e.target.value)} placeholder='Name...' />
        <button onClick={pushEvent}>Add</button>
      </div>

      <div className='todos'>
        { todos ? todos.map(todo => (
          <div key={todo.id} className='card'>
            <h3>{todo.name}</h3>
            <input type="checkbox" checked={todo.completed} onChange={() => switchTodo(todo.id)} />
          </div>
        )) : <h3>No todo found</h3> }
      </div>
    </div>
  )
}

export default App
