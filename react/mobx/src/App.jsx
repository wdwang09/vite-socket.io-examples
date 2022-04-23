import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { StatesContext } from './states'
import logo from './logo.svg'
import './App.css'

const App = observer(() => {
  const states = useContext(StatesContext)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello MobX!</p>
        <p>Connected: {'' + states.isConnected}</p>
        <p>Last message: {states.lastMessage || '-'}</p>
        <button onClick={states.sendMessage}>Say hello!</button>
      </header>
    </div>
  )
})

export default App
