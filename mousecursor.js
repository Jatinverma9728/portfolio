const cursordot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]");

        window.addEventListener("mousemove", function (e) {
            const posX = e.clientX;
            const posY = e.clientY;
            cursordot.style.left = `${posX}px`;
            cursordot.style.top = `${posY}px`;
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });

        });