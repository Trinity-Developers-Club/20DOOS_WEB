# My-meet Webapp

This is a video calling room where you can create a room for video calling and share it link to your friends and do a video meet with them it also has chat feature implemented so u can also enjoy chat with friends...

This is based on Websocket and for implementation of socket I used Socket.io.


## What is Socket.io?

_*Socket.IO*_ is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

It is built on top of the WebSocket protocol and provides additional guarantees like fallback to HTTP long-polling or automatic reconnection.



### Steps in creating this app

- Initialize Node Js project 
- Setup node server and view  folder
- Create Room Id
- Add the ability to view our own video
- Create a room
- Add ability to stream others video
- Styling
- Chat setup
- Add mute option 
- Add stop video 

### How to run this on your local host?

    - First clone this repo
    - Install node modules using command
        npm i 
    - comment line 12 in Script.js and uncomment line 13
    - Run the script devStart or start
        npm run devStart
            or
        num run start
    - Your app is running on port 8000

    yups its that simple 