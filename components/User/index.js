import React from 'react'
import { Link } from '../../routes'
import Wrapper from './Wrapper'

const User = ({ user, onDelete, deleteLoading }) => (
  <Wrapper>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.address.city}, {user.address.street}</td>
      <td><Link route='edit' params={{ id: user.id }}><a className="user--link">Edit</a></Link></td>
      <td><a className="user--link" onClick={() => onDelete(user.id)}>{deleteLoading ? '...' : 'Delete'}</a></td>
  </Wrapper>
)

export default User
