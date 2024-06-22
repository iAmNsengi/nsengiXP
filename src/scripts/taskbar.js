
function taskbar() {
    setInterval(() => {
        document.querySelector('.taskbar__right').innerHTML = `<p class="text-2xl font-bold"> ${new Date().toLocaleTimeString()}</p>`
    }, 1000)
}
