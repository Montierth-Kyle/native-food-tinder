 export const getDietPreference = () => {
    return (dispatch) => {
      axios.get('/api/dietPreferences')
       .then( (res) => {
       dispatch({ type: 'DIETPREFERENCE', dietPreference: res.data })
      })
       .catch(function (error) {
       console.log("ERROR")
       console.log(error);
      });
    }
  };