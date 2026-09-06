const spider = document.getElementById("spider");

let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;

let targetX = currentX;
let targetY = currentY;

let rotation = 0;


/* =================================
   GET RANDOM TARGET
================================= */

function chooseTarget() {

    const spiderSize =
        Math.min(
            spider.offsetWidth,
            spider.offsetHeight
        );

    const padding = spiderSize * 0.7;

    targetX =
        padding +
        Math.random() *
        (window.innerWidth - padding * 2);

    targetY =
        padding +
        Math.random() *
        (window.innerHeight - padding * 2);


    /*
        Turn the spider toward
        the direction it is moving.
    */

    const angle =
        Math.atan2(
            targetY - currentY,
            targetX - currentX
        ) *
        180 /
        Math.PI;

    rotation = angle + 90;


    const distance =
        Math.hypot(
            targetX - currentX,
            targetY - currentY
        );


    /*
        Movement speed.

        Longer distance =
        slightly longer movement.
    */

    const duration =
        Math.max(
            1800,
            Math.min(
                4500,
                distance * 7
            )
        );


    spider.style.transition =
        `left ${duration}ms cubic-bezier(.37,.01,.25,1),
         top ${duration}ms cubic-bezier(.37,.01,.25,1),
         transform ${duration}ms ease-in-out`;


    spider.style.left =
        `${targetX}px`;

    spider.style.top =
        `${targetY}px`;

    spider.style.transform =
        `translate(-50%, -50%)
         rotate(${rotation}deg)`;


    currentX = targetX;
    currentY = targetY;


    /*
        Wait until this movement is
        mostly complete, then choose
        another location.
    */

    setTimeout(
        chooseTarget,
        duration + 300
    );
}


/* =================================
   START
================================= */

window.addEventListener(
    "load",
    () => {

        spider.style.left =
            `${currentX}px`;

        spider.style.top =
            `${currentY}px`;

        setTimeout(
            chooseTarget,
            1000
        );
    }
);


/* =================================
   HANDLE RESIZE
================================= */

window.addEventListener(
    "resize",
    () => {

        currentX =
            Math.min(
                currentX,
                window.innerWidth - 30
            );

        currentY =
            Math.min(
                currentY,
                window.innerHeight - 30
            );
    }
);