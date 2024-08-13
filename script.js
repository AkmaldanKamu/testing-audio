const lyrics = [
    { time: 0, text: "Lirik pertama..." },
    { time: 5, text: "Lirik kedua..." },
    { time: 10, text: "Lirik ketiga..." },
    // Tambahkan lebih banyak lirik sesuai dengan waktu
];

const audioPlayer = document.getElementById('audioPlayer');
const lyricsContainer = document.getElementById('lyrics');

audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;

    const currentLyric = lyrics.find(lyric => lyric.time <= currentTime);
    
    if (currentLyric) {
        lyricsContainer.textContent = currentLyric.text;
    }
});
