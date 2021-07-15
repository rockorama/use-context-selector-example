import { useState } from 'react'

import { useAppContext } from '../Context'

export default function UserInput() {
  const addUser = useAppContext((context) => context.addUser)

  const [value, setValue] = useState('')

  console.log('USER_INPUT')

  return (
    <div className="user-input">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addUser(value)
            setValue('')
          }
        }}
      />
    </div>
  )
}
