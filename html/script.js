const card = document.getElementById('wobbleCard');
let isMouseOverCard = false;

card.addEventListener('mouseenter', () => {
    isMouseOverCard = true;
});

card.addEventListener('mouseleave', () => {
    isMouseOverCard = false;
    resetCardRotation();
});

document.addEventListener('mousemove', (event) => {
    if (isMouseOverCard) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;

        const xRotation = ((clientY / innerHeight) - 0.5) * 30;
        const yRotation = ((clientX / innerWidth) - 0.5) * -30;

        card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    } else {
        resetCardRotation();
    }
});

function resetCardRotation() {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

var isUIOpen = false;

window.addEventListener('message', function(event) {
    var data = event.data;
    //console.log('Received message:', data); // Debug log
    if (data.action === "BlackCard") {
        if (data.open === true) {
            document.body.style.display = "flex";
            isUIOpen = true;
            //console.log('UI Opened'); // Debug log
        } else if (data.open === false) {
            document.body.style.display = "none";
            isUIOpen = false;
            //console.log('UI Closed'); // Debug log
        }
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        if (isUIOpen) {
            document.body.style.display = "none";
            isUIOpen = false;
            //console.log('Backspace pressed, UI closed'); // Debug log
            fetch('https://black_card/closeUI', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ action: 'closeUI' })
            });
        }
    }
});
