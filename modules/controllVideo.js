import addPlayingObject from './addPlayingObject.js'
import exitFullscreen from './exitFullscreen.js'

addPlayingObject()

const videoIsPlaying = video => (video.playing == true)
const isNumber = video => !(isNaN(video.duration))

function controllVideo(){
    return{
        K: function playChange(video){
            return videoIsPlaying(video)? video.pause() : video.play()
        },
        F: function fullscreenChange(video){
            return (!document.fullscreenElement && videoIsPlaying(video))? video.requestFullscreen() : exitFullscreen()
        },
        J: function decrementTime(video){
            return (videoIsPlaying(video)) && (video.currentTime -= 10)
        },
        L: function incrementTime(video){
            return (videoIsPlaying(video)) && (video.currentTime += 10)
        },
        0: function goToTheZeroMinute(video){
            return (isNumber(video)) && (video.currentTime = 0)
        },
        1: function goToTheBeginningOfTheVideo(video){
            return (isNumber(video)) && (video.currentTime = video.duration * 10 / 100)
        },
        5: function goToHalfOfTheVideo(video){
            return (isNumber(video)) && (video.currentTime = video.duration / 2)
        },
        9: function goToTheEndOfTheVideo(video){
            return (isNumber(video)) && (video.currentTime = video.duration * 80 / 100)
        }
    }
}

export default controllVideo