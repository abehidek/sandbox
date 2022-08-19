import { Socket } from 'phoenix';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState("")
  const [channel, setChannel] = useState()
  

  useEffect(() => {
    let socket = new Socket('ws://localhost:4000/socket')
    let channel = socket.channel("todo:lobby");
    socket.connect();
    channel.join()
      .receive("ok", response => { console.log("Joined Channel "+response) })
      .receive("error", error => { console.error("Error Joining Channeç"+error) })    

    channel.on("added", res => console.log(res))
    setChannel(channel)
  }, [])

  const pushEvent = () => {
    channel.push("add", {new_todo: name}).receive("ok", res => console.log("Todo Added "+res))
  }

  return (
    <div>
      <h1>Todo</h1>
      <input type="text" value={name} onChange={(e: any) => setName(e.target.value)} placeholder='Name...' />
      <button onClick={pushEvent}>Add</button>
    </div>
  )
}

export default App
