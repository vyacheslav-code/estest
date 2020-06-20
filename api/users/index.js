import fetch from 'isomorphic-fetch'

export function getUsers () {
  return fetch('https://jsonplaceholder.typicode.com/users')
}

export function getUser (id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
}

export function addUser (username, email, address) {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      address
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}

export function editUser (id, username, email, address) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      username,
      email,
      address,
      userId: id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}

export function deleteUser (id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  })
}