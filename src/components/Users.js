import { useAppContext } from '../Context'
import UserInput from './UserInput'

export default function Users() {
  const users = useAppContext((context) => context.users)

  console.log('USERS')

  return (
    <div className="users">
      <h2>Users</h2>
      <div className="users-list">
        {users.map((u, index) => {
          return (
            <div className="message" key={`message-${index}`}>
              {u}
            </div>
          )
        })}
      </div>
      <UserInput />
    </div>
  )
}
