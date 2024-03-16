const size = 50;

const createRows = () => {
    const rows = [];
    for (let i = 0; i < size; i++) {
        const row = new Int8Array(size);
        for (let j = 0; j < size; j++) {
            const state = Math.random();
            if (state < 0.3) {
                row[j] = 1;
            }
            else {
                row[j] = 0;
            }
        }
        rows.push(row);
    }
    return rows;
}

const createTable = (rows) => {

    const cells = [];
    const existingTable = document.getElementById("my_table");
    if (existingTable) {
        existingTable.remove();
    }

    const table = document.createElement("table");
    table.id = "my_table";
    table.style.width = "900px";
    table.style.height = "900px";
    const tableBody = document.createElement("tbody");

    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr");
        const tdElements = [];
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("td");
            if (rows[i][j]) {
                cell.className = "alive";
            }
            else {
                cell.className = "dead";
            }
            row.appendChild(cell);
            tdElements.push(cell);
        }
        tableBody.appendChild(row);
        cells.push(tdElements);
    }
    table.appendChild(tableBody);

    document.body.appendChild(table);
    return cells;
}


const calcNeighbors = (rows, rowIndex, cellIndex) => {
    let neighborCount = 0;

    // Define the range of rows and columns to iterate over
    const rowStart = Math.max(0, rowIndex - 1);
    const rowEnd = Math.min(size - 1, rowIndex + 1);
    const colStart = Math.max(0, cellIndex - 1);
    const colEnd = Math.min(size - 1, cellIndex + 1);

    // Iterate through neighboring cells
    for (let i = rowStart; i <= rowEnd; i++) {
        for (let j = colStart; j <= colEnd; j++) {
            // Exclude the current cell itself
            if (!(i === rowIndex && j === cellIndex)) {
                if (i >= 0 && i < size && j >= 0 && j < size) {

                    // Check if the neighboring cell is alive
                    if (rows[i][j]) {
                        neighborCount++;
                    }
                }
            }
        }
    }
    return neighborCount;
}

const draw = (rows, cells) => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            cells[i][j].className = rows[i][j] ? "alive" : "dead";
        }
    }
}

const updateGame = (rows) => {
    const newRows = [];
    for (let i = 0; i < size; i++) {
        const newRow = [];
        for (let j = 0; j < size; j++) {
            const neighbors = calcNeighbors(rows, i, j);
            if (rows[i][j]) {
                if (neighbors < 2 || neighbors > 3) {
                    newRow.push(0);
                } else {
                    newRow.push(1);
                }
            } else {
                if (neighbors === 3) {
                    newRow.push(1);
                } else {
                    newRow.push(0);
                }
            }
        }
        newRows.push(newRow);
    }
    return newRows;
};


const createGame = () => {
    let rows = createRows();
    const cells = createTable(rows);
    const gameInterval = setInterval(() => {
        const newRows = updateGame(rows);
        draw(newRows, cells);
        rows = newRows;
    }, 500);
}
