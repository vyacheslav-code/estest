import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  .field {
    width: 100%;
    padding: 0 4px;
  }
  
  .field--title {
    padding: 4px 0;
    font-size: 16px;
  }
  
  .field--input {
    width: 100%;
  }
  
  .submit {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
  }
  
  .submit--button {
    font-size: 22px;
    border: none;
    background: #387EF5;
    color: #FFF;
    padding: 8px 32px;
  }
  
  .error {
    color: red;
    font-size: 16px;
    padding-left: 4px;
  }
`

export default ({ onSubmit, btnText, user, loading }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')

  const [error, setError] = useState('')

  useEffect(() => {
    if (user) {
      const { username, email, address: { city, street } } = user
      setName(username)
      setEmail(email)
      setCity(city)
      setStreet(street)
    }
  }, [])

  const handleSubmit = () => {
    if (!name || !email) {
      setError('Please provide name and email')
    } else if (!email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
      setError('Please enter valid email address')
    } else {
      onSubmit(name, email, { city, street })
    }
  }

  return <Wrapper>
    {error && <p className="error">{error}</p>}
    <div className="field">
      <p className="field--title">
        Username
      </p>
      <input
        className="field--input"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
    <div className="field">
      <p className="field--title">
        Email
      </p>
      <input
        className="field--input"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </div>
    <div className="field">
      <p className="field--title">
        City
      </p>
      <input
        className="field--input"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
    </div>
    <div className="field">
      <p className="field--title">
        Street
      </p>
      <input
        className="field--input"
        value={street}
        onChange={e => setStreet(e.target.value)}
      />
    </div>
    <div className="submit">
      <button
        disabled={loading}
        className="submit--button"
        onClick={handleSubmit}>
        {loading ? '...' : btnText}
      </button>
    </div>
  </Wrapper>

}