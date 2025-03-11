document.addEventListener('click', function () {
    const music = document.getElementById('bgMusic');
    music.play().catch(() => { });
    document.querySelector('.music-prompt').style.display = 'none';
});