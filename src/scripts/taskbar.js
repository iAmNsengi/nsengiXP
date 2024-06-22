
function taskbar() {
    setInterval(() => {
        document.querySelector('.taskbar__right').innerHTML = `${new Date().toLocaleTimeString()}`
    }, 1000)
}
