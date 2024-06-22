
function taskbar() {
    setInterval(() => {
        document.querySelector('.taskbar__right').innerHTML = `${new Date().toLocaleTimeString()}`
    }, 1000)

    document.querySelector('.taskbar__start').addEventListener('click', () => {
        const startMenu = document.querySelector('.start_menu');
        if (startMenu.style.display === 'block') {
            startMenu.style.display = 'none';
        } else {
            startMenu.style.display = 'block';
        }
    })
}
