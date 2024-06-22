
function main() {

    let newX = 0, newY = 0, startX = 0, startY = 0;

    const card = document.getElementById('card')
    const titleBar = document.querySelector('.title-bar')
    card.style.top = Math.floor(Math.random() * 20) + 'vh'
    card.style.left = Math.floor(Math.random() * 70) + 'vw'
    titleBar.addEventListener('mousedown', mouseDown)

    function mouseDown(e) {
        startX = e.clientX
        startY = e.clientY
        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
    }

    function mouseMove(e) {
        newX = startX - e.clientX
        newY = startY - e.clientY
        startX = e.clientX
        startY = e.clientY
        card.style.top = (card.offsetTop - newY) + 'px'
        card.style.left = (card.offsetLeft - newX) + 'px'
    }

    function mouseUp(e) {
        document.removeEventListener('mousemove', mouseMove)
    }

}