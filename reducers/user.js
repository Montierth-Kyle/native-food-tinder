const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER':
      return action.user
    case 'LOGOUT':
      return action.user
    default:
      return state;
  }
}

export default user;