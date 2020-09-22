import controllVideo from './modules/controllVideo.js'

document.addEventListener('keydown', event=>{
    const key = event.key.toUpperCase()
    const video = document.querySelector('video')
    const srcExists = video?.src
    const src = srcExists && video.src.split('.com/')[0]
    const keyExists = controllVideo()?.[key]
    if(keyExists && srcExists && src != 'blob:https://www.youtube'){
        return controllVideo()[key](video)
    }
})
