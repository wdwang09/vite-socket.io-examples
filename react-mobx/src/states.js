import io from 'socket.io-client'
import { createContext } from 'react'
import { action, makeObservable, observable } from 'mobx'

export class SocketIOStates {
  constructor() {
    this.isConnected = false
    this.lastMessage = null

    makeObservable(this, {
      isConnected: observable,
      lastMessage: observable,
      setIsConnected: action,
      setLastMessage: action
    })

    this.socket = io()

    this.socket.on('connect', () => {
      this.setIsConnected(true)
    })
    this.socket.on('disconnect', () => {
      this.setIsConnected(false)
    })
    this.socket.on('message', data => {
      this.setLastMessage(data)
    })

    this.sendMessage = () => {
      this.socket.emit('hello!')
    }
  }

  setIsConnected(bool) {
    this.isConnected = bool
  }

  setLastMessage(msg) {
    this.lastMessage = msg
  }
}

export const StatesContext = createContext(null)
