console.log("Spotify");

let songIndex =0;
let audioElement = new Audio('../songs/Dancing with Your Ghost.mp3');
let masterPlay = document.getElementById('masterPlay');
let songItemPlay= document.getElementById('fas songItemPlay fa-play-circle');
let myProgressBar = document.getElementById('myProgressBar');
let myGif = document.getElementById('myGif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
// audioElement.play();

let songs = [
    {songName:"Let Me Down Slowly", filePath: "../songs/1.mp3", coverPath: "../covers/1.jpg"},
    {songName:"Arcade", filePath: "../songs/3.mp3", coverPath: "../covers/4.jpg"},
    {songName:"The Night We Met", filePath: "../songs/3.mp3", coverPath: "../covers/5.jpg"},
    {songName:"Dancing With Your Ghost", filePath: "../songs/Kasoor.mp3", coverPath: "../covers/4.jpg"},
    {songName:"Kasoor", filePath: "../songs/2.mp3", coverPath: "../covers/5.jpg"},
    {songName:"Make You Mine", filePath: "../songs/6.mp3", coverPath: "../covers/6.jpg"},
    {songName:"Labon Ko", filePath: "../songs/7.mp3", coverPath: "../covers/7.jpg"},
    {songName:"Man Mandira", filePath: "../songs/8.mp3", coverPath: "../covers/8.jpg"},
    {songName:"Saware", filePath: "../songs/9.mp3", coverPath: "../covers/9.jpg"},
    {songName:"Nigt Changes", filePath: "../songs/10.mp3", coverPath: "../covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
//Events
//pause play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add("fa-pause-circle");
        myGif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add("fa-play-circle");
        myGif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value =progress; 
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
// myProgressBar.addEventListener('click', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
// ../songs/${songIndex+1}.mp3
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `../songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src =  `../songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=> {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `../songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();        
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

