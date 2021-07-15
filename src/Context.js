import { useState, useCallback } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'

const AppContext = createContext({
  messages: [],
  users: [],
  addUser: () => {},
  sendMessage: () => {},
})

export function useAppContext(selector) {
  return useContextSelector(AppContext, selector)
}

export default function AppContextProvider(props) {
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])

  const addUser = useCallback((user) => {
    setUsers((u) => {
      return [...u, user]
    })
  }, [])

  const sendMessage = useCallback((message) => {
    setMessages((ms) => {
      return [...ms, message]
    })
  }, [])

  return (
    <AppContext.Provider
      value={{
        messages,
        users,
        addUser,
        sendMessage,
      }}>
      {props.children}
    </AppContext.Provider>
  )
}
