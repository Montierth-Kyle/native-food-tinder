export const logout = (user) => {
  return (dispatch) => {
    fetch(`api/auth/logout`, {
      method: 'DELETE',
      headers: authHeaders(user)
    }).then( () => dispatch({ type: 'LOGOUT' }) )
  }
}

const currentUser = (user = {}) => {
  return { type: 'USER', user }
}

export const createUser = (email, password, passwordConfirmation, firstName, lastName, title, history) => {
    return (dispatch) => {
      let endpoint = title === 'Register' ? 'signup' : 'signin';
     fetch(`/api/auth/${endpoint}`, {
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
 
       credentials: 'include',
       method: 'POST',
       body: JSON.stringify({ email, password, firstName, lastName })
    }).then( res => res.json() )
  .then( user => {
    history.replace('/dashboard')
       })
    }
}

export const authenticate = (email, password, title, history) => {
    return (dispatch) => {
      let endpoint = title === 'Register' ? 'signup' : 'signin';
     fetch(`/api/auth/${endpoint}`, {
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       credentials: 'include',
       method: 'POST',
       body: JSON.stringify({ email, password })
    }).then( res => res.json() )
      .then( user => {
       dispatch(currentUser(user))
 history.replace('/dashboard')
       })
    }}


export const tryFetchUser = (cb) => {
    return (dispatch) => {
     fetch('/api/auth/user', {
       method: 'GET',
       credentials: 'include'
     }).then( res => res.json() )
       .then( user => dispatch(currentUser(user)) )
       .then( () => cb() )
    }}