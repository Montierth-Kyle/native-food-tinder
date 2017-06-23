import axios from 'axios';

export const getRecipes = (id) => {
  return (dispatch) => {
    axios.get(`/api/recipes/${id}`)
        .then(function (res) {
        dispatch({ type: 'GETRECIPES', recipes: res.data })
    })
        .catch(function (error) {
          console.log("ERROR")
        console.log(error);
    });
  }
}