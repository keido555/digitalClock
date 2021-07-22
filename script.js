function clock () {
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const seconds = now.getSeconds();

    const timeFormat = [
        formatTime(hours),
        formatTime(mins),
        formatTime(seconds)
    ];

    const timeSlot = timeFormat.join('').split('');

    const nums = [
        '1111110',
        '0110000',
        '1101101',
        '1111001',
        '0110011',
        '1011011',
        '0011111',
        '1110010',
        '1111111',
        '1110011'
    ];

    const numsArray = timeSlot.map(val => {
        return val = nums[val];
    });

    const segmentNumber = numsArray.join('').split('');

    segmentStarter(segmentNumber);
    lampAnimation();
}

function segmentStarter(segmentArray) {
    const segments = document.getElementsByClassName('seg');

    for (let i = 0; i < segmentArray.length; i++) {
        if (!Number(segmentArray[i])) {
            segments.item(i).classList.add('inactive');
            segments.item(i).classList.remove('active');
        } else {
            segments.item(i).classList.add('active');
            segments.item(i).classList.remove('inactive');
        }
    }
};

function lampAnimation() {
    const lamp = document.getElementsByClassName('lamp');

    for (let i = 0; i < lamp.length; i++) {
        lamp.item(i).classList.toggle('active');
        lamp.item(i).classList.toggle('inactive');
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time.toString();
};

setInterval(clock, 1000);
