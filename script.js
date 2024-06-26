document.addEventListener('keydown', function(event) {
    let audio;
    switch (event.key.toUpperCase()) {
        case 'A':
            audio = new Audio('audio/A.mp3');
            break;
        case 'S':
            audio = new Audio('audio/S.mp3');
            break;
        case 'D':
            audio = new Audio('audio/D.mp3');
            break;
        case 'F':
            audio = new Audio('audio/F.mp3');
            break;
        case 'G':
            audio = new Audio('audio/G.mp3');
            break;
        case 'H':
            audio = new Audio('audio/H.mp3');
            break;
        case 'J':
            audio = new Audio('audio/J.mp3');
            break;
        case 'W':
            audio = new Audio('audio/W.mp3');
            break;
        case 'E':
            audio = new Audio('audio/E.mp3');
            break;
        case 'T':
            audio = new Audio('audio/T.mp3');
            break;
        case 'Y':
            audio = new Audio('audio/Y.mp3');
            break;
        case 'U':
            audio = new Audio('audio/U.mp3');
            break;
        default:
            console.log("Warning: Unbound key pressed.");
            return;
    }
    if (audio) {
        audio.play();
    }
});
