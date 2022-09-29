import { FC, useEffect, useState, useCallback } from 'react'
import { Logo, Button, Input } from '@components/ui'
import useLogin from '@framework/auth/use-login'
import { useUI } from '@components/ui/context'
import { validate } from 'email-validator'

const CommunityView: FC = () => {
  const users = [
    'John Smith',
    'Paul Morgan',
    'Doe Kelly',
    'Jeremy Pang',
    'James Joe',
    'John Smith',
    'Paul Morgan',
    'Doe Kelly',
    'Jeremy Pang',
    'James Joe',
    'You',
  ]

  return (
    <div className="grid grid-cols-6 gap-4 justify-center items-center">
      {users.map((user) => (
        <div className="col text-center">
          <div className="inline-block h-32 w-32 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear">
            <img src={`https://joeschmoe.io/api/v1/${user}`} />
          </div>
          <div className="text-lg">{user}</div>
        </div>
      ))}
    </div>
  )
}

export default CommunityView
