const dietPreference = (state = { dietPreference: [], id: null }, action) => {
  switch(action.type) {
    case 'DIETPREFERENCE':
      return { ...state, dietPreference: action.dietPreference }
    case 'SETDIETPREFERENCE':
      return {...state, id: action.id }
    default:
      return state;
  }
}

export default dietPreference;