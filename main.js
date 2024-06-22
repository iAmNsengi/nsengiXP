function main() {
    const windows = document.querySelectorAll('.window');

    windows.forEach(window => {
        const titleBar = window.querySelector('.title-bar');
        let startX = 0, startY = 0;
        let initialWindowOffsetX = 0, initialWindowOffsetY = 0;
        let isDragging = false;

        const randomTop = Math.floor(Math.random() * 20) + 'vh';
        const randomLeft = Math.floor(Math.random() * 70) + 'vw';
        window.style.position = 'absolute';
        window.style.top = randomTop;
        window.style.left = randomLeft;

        titleBar.addEventListener('mousedown', mouseDown);

        function mouseDown(e) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;

            const { left, top } = window.getBoundingClientRect();
            initialWindowOffsetX = startX - left;
            initialWindowOffsetY = startY - top;

            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseUp);
        }

        function mouseMove(e) {
            if (!isDragging) return;

            const newLeft = e.clientX - initialWindowOffsetX;
            const newTop = e.clientY - initialWindowOffsetY;

            window.style.left = `${newLeft}px`;
            window.style.top = `${newTop}px`;
        }

        function mouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        }
    });
}

