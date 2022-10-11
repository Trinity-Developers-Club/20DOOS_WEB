// const { Socket } = require("socket.io");
// import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
const socket = io()

const myVideo = document.createElement('video');
myVideo.muted = true;
const videoGrid = document.getElementById('videoGrid')
var peer = new Peer(undefined, {
    path: '/peerjs',
    host: '/',
    port: '443'
    // port: '8000'
});

let myVideoStream
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true 
}).then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);

    peer.on('call', call => {
        call.answer(stream)
        const video = document.createElement('video')
        call.on('stream', userVideoStream => {
          addVideoStream(video, userVideoStream)
        })
    })

    socket.on('user-connected', (userId) => {
        connectToNewUser(userId, stream);
    })

    let text = $("input");
    // when press enter send message
    $('html').keydown(function (e) {
    if (e.which == 13 && text.val().length !== 0) {
        // console.log(text.val())
        socket.emit('message', text.val());
        text.val('')
    }
    });

    socket.on('createMessage', message => {
        console.log('this if from deddfa');
        $("ul").append(`<li class="message"><b>User</b><br/>${message}</li>`);
        scrollToBottom()
    })

    // socket.on('user-disconnected', userId => {
    //     if (peers[userId]) peers[userId].close()
    // })

})


peer.on('open',id => {
    console.log(id);
    socket.emit('join-room', ROOM_ID, id);
})



const connectToNewUser = (userId, stream) => {
    // console.log('new-user',userId);
    // try{
    const call = peer.call(userId, stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
    })
// }catch(err){
//     console.log(err)
// }
}

const addVideoStream = (video, stream) => {
    console.log("called video")
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}



const scrollToBottom = () => {
    var d = $('.main__chat_window');
    d.scrollTop(d.prop("scrollHeight"));
}

const muteUnmute = () => {
    const enabled = myVideoStream.getAudioTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getAudioTracks()[0].enabled = false;
      setUnmuteButton();
    } else {
      setMuteButton();
      myVideoStream.getAudioTracks()[0].enabled = true;
    }
  }


  const playStop = () => {
    // console.log('object')
    let enabled = myVideoStream.getVideoTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getVideoTracks()[0].enabled = false;
      setPlayVideo()
    } else {
      setStopVideo()
      myVideoStream.getVideoTracks()[0].enabled = true;
    }
  }
  
  const setMuteButton = () => {
    const html = `
      <i class="fas fa-microphone"></i>
      <span>Mute</span>
    `
    document.querySelector('.main_mute_button').innerHTML = html;
  }
  
  const setUnmuteButton = () => {
    const html = `
      <i class="unmute fas fa-microphone-slash"></i>
      <span>Unmute</span>
    `
    document.querySelector('.main_mute_button').innerHTML = html;
  }
  
  const setStopVideo = () => {
    const html = `
      <i class="fas fa-video"></i>
      <span>Stop Video</span>
    `
    document.querySelector('.main_video_button').innerHTML = html;
  }
  
  const setPlayVideo = () => {
    const html = `
    <i class="stop fas fa-video-slash"></i>
      <span>Play Video</span>
    `
    document.querySelector('.main_video_button').innerHTML = html;
  }