Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

function controllVideo(){
    return{
        K: function playChange(video){
            return video.playing === true? video.pause() : video.play()
        },
        F: function fullscreenChange(video){
            return !document.fullscreenElement? video.requestFullscreen() : document.exitFullscreen()
        },
        J: function decrementTime(video){
            return (video.playing === true) && (video.currentTime -= 10)
        },
        L: function incrementTime(video){
            return (video.playing === true) && (video.currentTime += 10)
        },
        0: function goToTheZeroMinute(video){
            return (!Number.isNaN(video.duration)) && (video.currentTime = 0)
        },
        1: function goToTheBeginningOfTheVideo(video){
            return (!Number.isNaN(video.duration)) && (video.currentTime = video.duration * 10 / 100)
        },
        5: function goToHalfOfTheVideo(video){
            return (!Number.isNaN(video.duration)) && (video.currentTime = video.duration / 2)
        },
        9: function goToTheEndOfTheVideo(video){
            return (!Number.isNaN(video.duration)) && (video.currentTime = video.duration * 80 / 100)
        }
    }
}

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
