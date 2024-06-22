
function main() {
    let newX = 0, newY = 0, startX = 0, startY = 0;

    const titleBar = document.querySelector('.title-bar')

    const windows = document.querySelectorAll('.window');

    windows.forEach(el => {
        const randomTop = Math.floor(Math.random() * 20) + 'vh';
        const randomLeft = Math.floor(Math.random() * 70) + 'vw';

        el.style.position = 'absolute'; // Ensure position is set correctly
        el.style.top = randomTop;
        el.style.left = randomLeft;

        console.log(`Element: ${el}, Top: ${randomTop}, Left: ${randomLeft}`); // Debugging output
    });

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