import React, { useState } from 'react'
import Router from 'next/router'
import UserForm from 'components/UserForm'
import Layout from 'layouts/Main'
import { addUser } from 'api/users'

const AddPage = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (name, email, address) => {
    setLoading(true)
    addUser(name, email, address)
      .then(() => {
        setLoading(false)
        Router.push('/')
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return <Layout>
    <UserForm
      onSubmit={handleSubmit}
      btnText="Add"
      loading={loading}
    />
  </Layout>
}

export default AddPage