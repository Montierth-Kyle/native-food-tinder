

export const authHeaders = (user) => {
  let { token, client, email } = user;
  return {
    'Accept':       'application/json',
    'Content-Type': 'application/json',
        'token-type':   'Bearer',
    'access-token': token,
    'client':       client,
    'uid':          email
  }
}

export const logout = (user) => {
  return (dispatch) => {
    fetch('/api/auth/logout', {
      method: 'DELETE',
      headers: authHeaders(user)
    }).then( () => dispatch({ type: 'LOGOUT' }) )
  }
}

const currentUser = (user = {}) => {
  return { type: 'USER', user }
}

export const auth = (user, endpoint, history) => {
  return (dispatch) => {
    fetch(`/api/auth/${endpoint}`, { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...user })
    }).then( res => res.json() )
      .then( user => { 
        if(!user.errors) {
          dispatch({ type: 'USER', user }) 
          history.push('/')
    }
      })
  }
}


export const tryFetchUser = (cb) => {
    return (dispatch) => {
     fetch('/api/auth/user', {
       method: 'GET',
       credentials: 'include'
     }).then( res => res.json() )
       .then( user => dispatch(currentUser(user)) )
       .then( () => cb() )
    }}