const music = document.querySelector("audio");
const img = document.querySelector("img")
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [{
    name: "anmol-1",
    title: "Baarish Ban Jaana",
    artist: "Stebin Ben",
},
{
    name: "anmol-2",
    title: "Is Qadar",
    artist: "Tulsi Kumar, Darshan Raval",
},
{
    name: "anmol-3",
    title: "Wafa Na Raas Aayee",
    artist: "Jubin Nautiyal",
},
{
    name: "anmol-4",
    title: "Tootey Khaab",
    artist: "Armaan Malik",
},
{
    name: "anmol-5",
    title: "Kho Gaye Hum",
    artist: "Jasleen Royal",
},
{
    name: "anmol-6",
    title: "Halka Halka ",
    artist: "Amit Trivedi",
},
{
    name: "anmol-7",
    title: "Ek Tarfa",
    artist: "Darshan Raval",
},
{
    name: "anmol-8",
    title: "Dariya",
    artist: "Arko",
}];

let isPlaying = false;

// for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause')
    img.classList.add("animate");
};

// for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play')
    img.classList.remove("animate");
};

play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
})

//   changing  the music data 

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};

songIndex = 0;


const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

