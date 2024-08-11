let intervals = [];

document.getElementById('startBtn').addEventListener('click', function() {
    clearIntervals();  // Clear any existing intervals before starting new ones
    const width = parseInt(document.getElementById('width').value);
    const growthAmount = parseInt(document.getElementById('growthAmount').value);
    const growthRate = parseInt(document.getElementById('growthRate').value);
    const numberCircles = parseInt(document.getElementById('numberCircles').value);

    for (let i = 0; i < numberCircles; i++) {
        createCircle(width, growthAmount, growthRate);
    }
});

document.getElementById('stopBtn').addEventListener('click', function() {
    clearIntervals();
});

function createCircle(width, growthAmount, growthRate) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.width = circle.style.height = `${width}px`;
    circle.style.top = `${Math.random() * (window.innerHeight - width)}px`;
    circle.style.left = `${Math.random() * (window.innerWidth - width)}px`;

    document.body.appendChild(circle);

    let interval = setInterval(function() {
        width += growthAmount;
        circle.style.width = circle.style.height = `${width}px`;
    }, growthRate);

    intervals.push(interval);  // Store the interval ID

    circle.addEventListener('click', function() {
        clearInterval(interval);
        circle.remove();
    });
}

function clearIntervals() {
    intervals.forEach(interval => clearInterval(interval));
    intervals = [];
    document.querySelectorAll('.circle').forEach(circle => circle.remove());
}
