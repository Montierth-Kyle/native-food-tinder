const recipe = (state = [], action) => {
  switch(action.type) {
    case 'GETRECIPES':
      return action.recipes
    default:
      return state;
  }
}

export default recipe;