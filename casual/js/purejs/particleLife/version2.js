const canvas = document.getElementById("my_canvas");
const ctx = canvas.getContext("2d");
const rMax = 80;
const velFactor = 0.2;


const draw = (x, y, c) => {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = c;
    ctx.fill();
}

const particles = [];
const particle = (x, y, c) => {
    return {
        x: x,
        y: y,
        vx: 0,
        vy: 0,
        color: c,
    }
}

const random = () => {
    return Math.random() * (canvas.width - 100) + 50;
}

const create = (number, color) => {
    const group = [];
    for (let i = 0; i < number; i++) {
        group.push(particle(random(), random(), color));
        particles.push(group[i]);
    }
    return group;
}

const rule = (particles1, particles2, g) => {
    for (let i = 0; i < particles1.length; i++) {

        let fx = 0;
        let fy = 0;
        for (let j = 0; j < particles2.length; j++) {

            const a = particles1[i];
            const b = particles2[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;

            const d = Math.sqrt(dx * dx + dy * dy);
            if (d > 0 && d < rMax) {
                F = g * 1 / d;
                fx += (F * dx);
                fy += (F * dy);
            }
            a.vx = (a.vx + fx) * velFactor;
            a.vy = (a.vy + fy) * velFactor;
            a.x += a.vx;
            a.y += a.vy;
            if(a.x <= 0 || a.x >= canvas.width - 3){
                a.vx *= -1;
            }
            if(a.y <= 0 || a.y >= canvas.height - 3){
                a.vy *= -1;
            }
        }
    }
}

const yellow = create(200, "yellow");
const red = create(200, "red");
const green = create(200, "green");

const update = () => {
    rule(red, red, -0.1);
    rule(red, yellow, -0.03);
    rule(yellow, red, 0.01);
    rule(green, green, 0.01);
    rule(green, yellow, -0.02)
    rule(red, green, 0.02);
    rule(yellow, green, 0.05);
    ctx.clearRect(0, 0, canvas.width, canvas.heigth);
    ctx.fillStyle = "#333333";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        draw(particles[i].x, particles[i].y, particles[i].color);
    }
    requestAnimationFrame(update);
}


update();
