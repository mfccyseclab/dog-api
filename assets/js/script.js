// Grab html elements
var button = document.querySelector('.btn');
var name_ = document.querySelector('.name');
var image = document.querySelector('.dog');

// Event
button.addEventListener('click', fetchDogInfo);

// Our Functions

//function fetchDogInfo() {
//  const url = 'https://dog.ceo/api/breeds/image/random';
//  var res = fetch(url);
//  var data = res.json;
//  var msg = data.status;
//  alert(msg);
  
//}

async function fetchDogInfo() {
  const url = "https://dog.ceo/api/breeds/image/random";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const msg = json.message;
    
    extractBreed(msg);
    addImg(msg);
    
  } catch (error) {
    console.error(error.message);
  }
}

function addImg(url) {
 image.src = url; 
}

function extractBreed(url) {
  const breedPath = url.split('/breeds/')[1];
  const breedName = breedPath.split('/')[0];
  name_.textContent = breedName;
}