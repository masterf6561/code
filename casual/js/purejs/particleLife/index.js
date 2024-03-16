const canvas = document.getElementById("my_canvas");
const ctx = canvas.getContext("2d");

const makeRandomMatrix = () => {
    const rows = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < m; j++) {
            row.push(Math.random() * 2 - 1);
        }
        rows.push(row);
    }
    return rows;
}

const particleNumber = 300;
const deltaTime = 0.02;
const frictionHalfLife = 0.040;
const rMax = 0.4;
const m = 6;
const matrix = makeRandomMatrix();
const forceFactor = 20;

const frictionFactor = Math.pow(0.5, deltaTime / frictionHalfLife);

const colors = new Int32Array(particleNumber);
const posX = new Float32Array(particleNumber);
const posY = new Float32Array(particleNumber);
const posZ = new Float32Array(particleNumber);
const velX = new Float32Array(particleNumber);
const velY = new Float32Array(particleNumber);
const velZ = new Float32Array(particleNumber);

const init = () => {
    for (let i = 0; i < particleNumber; i++) {
        colors[i] = Math.floor(Math.random() * m);
        posX[i] = Math.random() * 2 - 1;
        posY[i] = Math.random() * 2 - 1;
        posZ[i] = Math.random() * 2 - 1;
        velX[i] = 0;
        velY[i] = 0;
        velZ[i] = 0;
    }
}

const force = (r, acc) => {
    const beta = 0.3;
    if (r < beta) {
        return r / beta - 1;
    }
    else if (beta < r && r < 1) {
        return acc * (1 - Math.abs(2 * r - 1 - beta) / (1 - beta));
    }
    else {
        return 0;
    }
}

const updateParticles = () => {
    //update Velocities
    for (let i = 0; i < particleNumber; i++) {
        let totalForceX = 0;
        let totalForceY = 0;
        let totalForceZ = 0;

        for (let j = 0; j < particleNumber; j++) {
            if (j === i) continue;
            const rx = posX[j] - posX[i];
            const ry = posY[j] - posY[i];
            const rz = posZ[j] - posZ[i];
            const r = Math.sqrt(rx * rx + ry * ry + rz * rz);
            if (r > 0 && r < rMax) {
                const f = force(r / rMax, matrix[colors[i]][colors[j]]);
                totalForceX += rx / r * f;
                totalForceY += ry / r * f;
                totalForceZ += rz / r * f;
            }
        }
        totalForceX *= rMax * forceFactor;
        totalForceY *= rMax * forceFactor;
        totalForceZ *= rMax * forceFactor;

        velX[i] *= frictionFactor;
        velY[i] *= frictionFactor;
        velZ[i] *= frictionFactor;

        velX[i] += totalForceX * deltaTime;
        velY[i] += totalForceY * deltaTime;
        velZ[i] += totalForceZ * deltaTime;
    }

    //update positions

    for (let i = 0; i < particleNumber; i++) {
        posX[i] += velX[i] * deltaTime;
        posY[i] += velY[i] * deltaTime;
        posZ[i] += velZ[i] * deltaTime;
    }
}

const loop = () => {
    //update particles 
    updateParticles();

    // draw particles
    ctx.fillStyle = "#333333"; //#333333
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particleNumber; i++) {
        ctx.beginPath();
        const f = 1 / (posZ[i] + 2);
        const screenX = (f * posX[i] + 1) * 0.5 * canvas.width;
        const screenY = (f * posY[i] + 1) * 0.5 * canvas.height;
        ctx.arc(screenX, screenY, 2, 0, 2 * Math.PI);
        ctx.fillStyle = `hsl(${360 * (colors[i] / m)},100%,50%)`
        ctx.fill();
    }

    requestAnimationFrame(loop);
}

init();
requestAnimationFrame(loop);
