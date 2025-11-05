const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt to select media stream, pass to video element, then play 
async function selectMediaStream() {
    try {
        const mediastream = await navigator.mediaDevices.getDisplayMedia(); 
        videoElement.srcObject = mediastream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch erros here 
        console.log('Woops error here:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true; 
    // Start Picture in Picture 
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

// On Load
selectMediaStream();
