const request = require("request");

const getCatBreed = (breedName, callBack) => {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body) => {
      const data = JSON.parse(body);
      if (error) {
        callBack(error, null);
      }
      if (data.length === 0) {
        callBack(null, 'Please enter a valid breed name');
      } else {
        callBack(null, data[0].description)
      }
    }
  );
};

module.exports = { getCatBreed };


