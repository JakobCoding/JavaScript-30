const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Check if all images were loaded
function imageLoaded() {
    console.log('image loaded'); 
    imagesLoaded++;
    if (images === totalImages)
        ready = true;
        console.log('ready =', ready); 
}

// Create Elements For Links and Photos, Add to Dom
function displayPhotos() {
    totalImages = photosArray.length;
    console.log('total images', totalImages);
    // Run function for each object in photosArray 
    photosArray.forEach((photo) => {
      // Create <a> to link to Unsplash
      const item = document.createElement('a');
    setAttributes(item, {
        href: photo.links.html,
        target: '_blank'
    });
      // Create <img> for photo
      const img = document.createElement('img');
      setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description,
      }); 
      // Event listener, check when each is finished loading 
      img.addEventListener('load', imageLoaded);
      // Put <img> inside <a>, then put both inside imageContainer Element
      item.appendChild(img);
      imageContainer.appendChild(item);
    });
}

// Unsplash API
const count = 30; 
const apiKey = 'aEV0CQiuScNbXZfKDhlmibMa6_vlGoK62VVhXAoAycA';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`; 

// Get photos from Unsplash API 
async function getPhotos () {
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }   catch (error) {
        // Catch erro Here
    }
}

// Check to see if scrolling near bottom of page, loads more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();
        console.log('load more');
       
    }


});

// On Load 
getPhotos();