function main() {
    const windows = document.querySelectorAll('.window');

    windows.forEach(window => {
        const titleBar = window.querySelector('.title-bar');
        let startX = 0, startY = 0;
        let initialWindowOffsetX = 0, initialWindowOffsetY = 0;
        let isDragging = false;

        // Set initial random position
        const randomTop = Math.floor(Math.random() * 20) + 'vh';
        const randomLeft = Math.floor(Math.random() * 70) + 'vw';
        window.style.position = 'absolute';
        window.style.top = randomTop;
        window.style.left = randomLeft;

        // Mouse down event listener on title bar
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

            // Boundary checks
            const bodyRect = document.body.getBoundingClientRect();
            const windowRect = window.getBoundingClientRect();

            const minLeft = bodyRect.left;
            const maxLeft = bodyRect.right - windowRect.width;
            const minTop = bodyRect.top;
            const maxTop = bodyRect.bottom - windowRect.height;

            window.style.left = `${Math.min(Math.max(newLeft, minLeft), maxLeft)}px`;
            window.style.top = `${Math.min(Math.max(newTop, minTop), maxTop)}px`;
        }

        function mouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        }
    });
}

