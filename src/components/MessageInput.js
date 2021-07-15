import { useState } from 'react'

import { useAppContext } from '../Context'

export default function MessageInput() {
  const sendMessage = useAppContext((context) => context.sendMessage)

  const [value, setValue] = useState('')

  console.log('MESSAGES_INPUT')

  return (
    <div className="message-input">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            sendMessage(value)
            setValue('')
          }
        }}
      />
    </div>
  )
}
