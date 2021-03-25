const video = document.getElementById('video')

Promise.all([
    faceapi.nets.tnyFaceDetector.loadFromUri('/mode')
])

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

startVideo()