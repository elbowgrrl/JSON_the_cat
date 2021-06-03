const request = require("request");
const breed = process.argv.slice(2);

// console.log(breed[0])
const getCatBreed = (breed) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      const data = JSON.parse(body);
      if (error) {
        console.log("There was an error");
      }
      if (data.length === 0) {
        console.log(
          "please enter a valid cat breed name. Some examples are Siberian, Abyssinian or American Curl"
        );
      } else {
        console.log(data[0].description);
      }
    }
  );
};

getCatBreed(breed);
