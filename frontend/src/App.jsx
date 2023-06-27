import { useEffect, useState } from 'react';
import io from 'socket.io-client'

const socket = io('/')

function App() {
  const [messages, setMessages] = useState([]);
  const [currentName, setcurrentName] = useState("Me");

  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", receiveMessage)

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages(state => [message, ...state]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: currentName,
    };
    setMessages(state => [newMessage, ...state]);
    setMessage("");
    socket.emit("message", newMessage);
    console.log(newMessage)
  };

  return (
    <>
    <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
      <input name="currentName" type="text" onChange={(e) => setcurrentName(e.target.value)}/>
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
        <h1 className="text-2xl font-bold my-2">Chat React</h1>
        <input
          name="message"
          type="text"
          placeholder="Write your message..."
          onChange={(e) => setMessage(e.target.value)}
          className="border-2 border-zinc-500 p-2 w-full text-black"
          value={message}
          autoFocus
        />
      

        <ul className="h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <li
              key={index}
            >
              <b>{message.from}</b>:{message.body}
            </li>
          ))}
        </ul>
      </form>
    </div>    </>
  )
}

export default App
