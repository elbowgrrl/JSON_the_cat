const { getCatBreed } = require('./breedFetcher')
const breed = process.argv[2];

getCatBreed(breed, (error, description) => {
  if(error) {
    console.log('error connecting to server', error);
  } else {
    console.log(description);
  }
});