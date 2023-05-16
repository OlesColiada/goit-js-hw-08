import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
let videoStopTime = 0;

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on('timeupdate', throttle(function ({seconds}){
    localStorage.setItem('videoplayer-stop-time', seconds)
}, 1000));


const savedStopTime = localStorage.getItem('videoplayer-stop-time') || 0;
player.setCurrentTime(savedStopTime);





