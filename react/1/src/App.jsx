// https://github.com/socketio/socket.io/blob/main/examples/create-react-app-example/src/App.js

import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

const socket = io('localhost:3001')

function App() {
  const [isConnected, setIsConnected] = useState(false)
  const [lastMessage, setLastMessage] = useState(null)

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true)
    })
    socket.on('disconnect', () => {
      setIsConnected(false)
    })
    socket.on('message', data => {
      setLastMessage(data)
    })
    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('message')
    }
  }, [])

  const sendMessage = () => {
    socket.emit('hello!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Socket.IO!</p>
        <p>Connected: {'' + isConnected}</p>
        <p>Last message: {lastMessage || '-'}</p>
        <button onClick={sendMessage}>Say hello!</button>
      </header>
    </div>
  )
}

export default App
