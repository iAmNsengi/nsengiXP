let highestZIndex = 1;

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

        // Bring the window to the front on mouse down or touch start
        window.addEventListener('mousedown', bringToFront);
        window.addEventListener('touchstart', bringToFront);

        // Mouse down or touch start event listener on title bar
        titleBar.addEventListener('mousedown', mouseDown);
        titleBar.addEventListener('touchstart', touchStart);

        function bringToFront() {
            // Increase the z-index to bring the window to the front
            highestZIndex++;
            window.style.zIndex = highestZIndex;
        }

        function mouseDown(e) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            bringToFront()

            const { left, top } = window.getBoundingClientRect();
            initialWindowOffsetX = startX - left;
            initialWindowOffsetY = startY - top;

            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseUp);

            // Prevents the window from being brought to front multiple times
            e.stopPropagation();
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

        function touchStart(e) {
            isDragging = true;
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            bringToFront()

            const { left, top } = window.getBoundingClientRect();
            initialWindowOffsetX = startX - left;
            initialWindowOffsetY = startY - top;

            document.addEventListener('touchmove', touchMove);
            document.addEventListener('touchend', touchEnd);

            // Prevents the window from being brought to front multiple times
            e.stopPropagation();
        }

        function touchMove(e) {
            if (!isDragging) return;
            const touch = e.touches[0];

            const newLeft = touch.clientX - initialWindowOffsetX;
            const newTop = touch.clientY - initialWindowOffsetY;

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

        function touchEnd() {
            isDragging = false;
            document.removeEventListener('touchmove', touchMove);
            document.removeEventListener('touchend', touchEnd);
        }
    });
}

function taskbar() {
    setInterval(() => {
        document.querySelector('.taskbar__right').innerHTML = `${new Date().toLocaleTimeString()}`
    }, 1000)

    document.querySelector('.taskbar__start').addEventListener('click', () => {
        const startMenu = document.querySelector('.start_menu');
        if (startMenu.style.display === 'block') {
            startMenu.style.display = 'none';
            document.querySelector('.taskbar').style.zIndex = highestZIndex + 2
        } else {
            startMenu.style.display = 'block';
            startMenu.style.zIndex = highestZIndex
            document.querySelector('.taskbar').style.zIndex = highestZIndex + 2
        }
    })
}