import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
let videoStopTime = 0;

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on('play', function() {
    console.log('played the video!');
    });

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', throttle(function (data){
    videoStopTime = data.seconds;
    localStorage.setItem('videoplayer-stop-time', videoStopTime)
}, 1000));


const savedStopTime = parseFloat(localStorage.getItem('videoplayer-stop-time'));
if(!isNaN(savedStopTime)) {player.setCurrentTime(savedStopTime).then(function() {
    console.log('video started again');
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});}  





