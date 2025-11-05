const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt to select media stream, pass to video element, then play 
async function selectMediaStream() {
    try {
        const mediastream = await navigator.mediaDevices.getDisplayMedia(); 
    } catch (error) {
        // catch erros here 
        console.log('Woops error here:', error);
    }
}

// On Load
selectMediaStream();
