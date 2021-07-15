import './App.css'

import Messages from './components/Messages'
import Users from './components/Users'
import Header from './components/Header'
import AppContext from './Context'

function App() {
  console.log('APP')

  return (
    <div className="app">
      <AppContext>
        <Header />
        <div className="chat">
          <Messages />
          <Users />
        </div>
      </AppContext>
    </div>
  )
}

export default App
