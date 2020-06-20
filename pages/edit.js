import React, { useState } from 'react'
import Router from 'next/router'
import UserForm from 'components/UserForm'
import Layout from 'layouts/Main'
import { getUser } from 'api/users'

const EditPage = ({ user }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (username, email, address) => {
    setLoading(true)
    //for some reason, using the editUser fn imported from api/users gave TypeError, so I left it hardcoded
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: user.id,
        username,
        email,
        address,
        userId: user.id
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(() => {
      setLoading(false)
      Router.push('/')
    }).catch(() => {
      setLoading(false)
    })
  }

  return <Layout>
    <UserForm
      onSubmit={handleSubmit}
      btnText="Edit"
      user={user}
    />
  </Layout>
}

EditPage.getInitialProps = async ({ query }) => {
  const res = await getUser(query.id)
  const json = await res.json()
  return { user: json }
}

export default EditPage