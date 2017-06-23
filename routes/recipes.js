const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');


const search = () => {
	return({
		_app_id: process.env.APP_ID,
		_app_key: process.env.APP_KEY
	});
}

router.get('/:id', (req, res) => { {
    search().get('https://api.yummly.com/v1/api/recipes?_app_id&_app_key&requirePictures=true&alloweddiet[]=390', function (error, response, recipe) {
        if (!error && response.statusCode == 200) {
            return res.json(recipe);
        }
    });
}
})


//PUT needed if we decide to save the recipes as "saved" or "made" or something like that.

//TODO: Delete recipe

module.exports = router;