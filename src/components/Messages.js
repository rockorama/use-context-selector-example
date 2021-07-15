import { useAppContext } from '../Context'

import MessageInput from './MessageInput'

export default function Messages() {
  const messages = useAppContext((context) => context.messages)

  console.log('MESSAGES_COMPONENT')

  return (
    <div className="messages">
      <h2>Messages</h2>
      <div className="messages-list">
        {messages.map((m, index) => {
          return (
            <div className="message" key={`message-${index}`}>
              {m}
            </div>
          )
        })}
      </div>
      <MessageInput />
    </div>
  )
}
