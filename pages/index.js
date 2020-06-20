import React, { useState } from 'react'
import Layout from 'layouts/Main'
import { getUsers, deleteUser } from 'api/users'

import User from 'components/User'

const IndexPage = ({ users }) => {
  const [query, setQuery] = useState('')

  const handleDeleteUser = (id) => {
    deleteUser(id)
  }

  return <Layout>
      <div className="search-container">
        <p className="search-container--title">Search</p>
        <input
          className="search-container--input"
          value={query}
          onChange={e => setQuery(e.target.value.trim().toLowerCase())}/>
      </div>
      <table>
        <tbody>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th/>
          <th/>
        </tr>
        {users
          .filter(user => user.name.toLowerCase().includes(query))
          .map(user => <User key={user.username} user={user} onDelete={handleDeleteUser}/>)}
        </tbody>
      </table>
  </Layout>
}

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getUsers()
  const json = await res.json()
  return { users: json }
}

export default IndexPage
