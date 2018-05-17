$(document).ready(function () {
    console.log("go");
});


var sample = {
    a: {
        sound: new Howl({
            src: ['./assets/sounds/hat1.wav'],
        }),
    },
    z: {
        sound: new Howl({
            src: ['./assets/sounds/hat2.wav']
        }),
    },
    e: {
        sound: new Howl({
            src: ['./assets/sounds/hat6.wav']
        }),
    },
    r: {
        sound: new Howl({
            src: ['./assets/sounds/kick3.wav']
        }),
    },
    t: {
        sound: new Howl({
            src: ['./assets/sounds/kick4.wav']
        }),
    },
    q: {
        sound: new Howl({
            src: ['./assets/sounds/HATopn4.wav']
        }),
    },
    s: {
        sound: new Howl({
            src: ['./assets/sounds/snare1.wav']
        })
    },
    d: {
        sound: new Howl({
            src: ['./assets/sounds/KIK49.wav']
        })
    },
    f: {
        sound: new Howl({
            src: ['./assets/sounds/ix1.wav']
        })
    },
    g: {
        sound: new Howl({
            src: ['./assets/sounds/ix2.wav']
        })
    }
}

var loops = {
    loop1: {
        sound: new Howl({
            src: ['./assets/sounds/pianoloop2.wav'],
            loop: true
        }),
    },
    loop2: {
        sound: new Howl({
            src: ['./assets/sounds/pianoloop3.wav'],
            loop: true
        }),
    },
    loop3: {
        sound: new Howl({
            src: ['./assets/sounds/guitarloop1.wav'],
            loop: true
        }),
    }
}

$('body').keydown(function (event) {
    sample[event.key].sound.play();
    if (event.which === 65) {
        $('.sample1').css('background-color', '#FF9100')
    } else if (event.which === 90) {
        $('.sample2').css('background-color', '#FF9100')
    } else if (event.which === 69) {
        $('.sample3').css('background-color', '#FF9100')
    } else if (event.which === 82) {
        $('.sample4').css('background-color', '#FF9100')
    } else if (event.which === 84) {
        $('.sample5').css('background-color', '#FF9100')
    } else if (event.which === 81) {
        $('.sample6').css('background-color', '#FF9100')
    } else if (event.which === 83) {
        $('.sample7').css('background-color', '#FF9100')
    } else if (event.which === 68) {
        $('.sample8').css('background-color', '#FF9100')
    } else if (event.which === 70) {
        $('.sample9').css('background-color', '#FF9100')
    } else if (event.which === 71) {
        $('.sample10').css('background-color', '#FF9100')
    }
})

$('body').keyup(function () {
    $('div').css("background-color", "");
});

var playing = false;

$('.playsong').click(function () {
    var choice = $('select').val();
    var loopsTab = Object.keys(loops)
    if (playing == true) {
        for (var i = 0; i < loopsTab.length; i++) {
            loops[loopsTab[i]].sound.stop();
        }
        loops[choice].sound.play();
        playing = true;

    } else {
        loops[choice].sound.play();
        playing = true;
    }
})

$('.stopsong').click(function () {
    var loopsTab = Object.keys(loops)
    for (var i = 0; i < loopsTab.length; i++) {
        loops[loopsTab[i]].sound.stop();
    }
})
