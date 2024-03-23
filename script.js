function OpeningCeremony(callback) {
    setTimeout(() => {
        console.log("Let the games begin");
        const score = { red: 0, blue: 0, green: 0, yellow: 0 };
        callback(score, Race100M);
    }, 1000);
}

function Race100M(score, callback) {
    setTimeout(() => {
        const colors = ['red', 'yellow', 'blue', 'green'];
        const times = {};

        colors.forEach(color => {
            const randomTime = Math.floor(Math.random() * 6) + 10; // Random time between 10 and 15 seconds
            times[color] = randomTime;
        });

        const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);

        score[sortedColors[0]] += 50;
        score[sortedColors[1]] += 25;

        console.log('Race100M - Previous Score:', score);
        console.log(`Winner of 100M race: ${sortedColors[0]}`);

        callback(score, LongJump);
    }, 3000);
}

function LongJump(score, callback) {
    setTimeout(() => {
        const colors = ['red', 'yellow', 'blue', 'green'];
        const selectedColor = colors[Math.floor(Math.random() * colors.length)];

        score[selectedColor] += 150;

        console.log('LongJump - Previous Score:', score);
        console.log(`Winner of Long Jump: ${selectedColor}`);

        callback(score, HighJump);
    }, 2000);
}

function HighJump(score, callback) {
    setTimeout(() => {
        const userInput = prompt("What colour secured the highest jump?");
        let winnerColor;

        if (userInput && ['red', 'yellow', 'blue', 'green'].includes(userInput.toLowerCase())) {
            winnerColor = userInput.toLowerCase();
            score[winnerColor] += 100;
            console.log(`User entered ${winnerColor}.`);
        } else {
            console.log("Event was cancelled");
        }

        console.log('HighJump - Previous Score:', score);

        callback(score, AwardCeremony);
    }, 0); // HighJump is interactive, so no timeout here
}

function AwardCeremony(score) {
    console.log('Final Score:', score);
    const sortedColors = Object.keys(score).sort((a, b) => score[b] - score[a]);
    console.log(`${sortedColors[0].charAt(0).toUpperCase() + sortedColors[0].slice(1)} came first with ${score[sortedColors[0]]} points.`);
    console.log(`${sortedColors[1].charAt(0).toUpperCase() + sortedColors[1].slice(1)} came second with ${score[sortedColors[1]]} points.`);
    console.log(`${sortedColors[2].charAt(0).toUpperCase() + sortedColors[2].slice(1)} came third with ${score[sortedColors[2]]} points.`);
}

// Start the sports day
OpeningCeremony(Race100M);
