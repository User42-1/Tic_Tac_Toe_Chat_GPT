let board = {
    "cell_0_0": "X",
    "cell_0_1": "X",
    "cell_0_2": "O",
    "cell_1_0": "O",
    "cell_1_1": " ",
    "cell_1_2": "X",
    "cell_2_0": "O",
    "cell_2_1": "O",
    "cell_2_2": "X"
}

function renderBoard() {
    let boardContainer = document.getElementById('boardContainer');
    let table = '<table>';

    for (let i = 0; i < 3; i++) {
        table += '<tr>';
        for (let j = 0; j < 3; j++) {
            if (board[`cell_${i}_${j}`] === 'X') {
                symbol = generateAnimatedCrossHTML();
            } else if (board[`cell_${i}_${j}`] === 'O') {
                symbol = generateAnimatedCircleHTML();
            } else {
                symbol = '';
            }
            table += `<td id="cell_${i}_${j}">${symbol}</td>`;
        }
        table += '</tr>';
    }

    table += '</table>';
    boardContainer.innerHTML = table;
}


function generateAnimatedCircleHTML() {
    let svgHTML = `
        <svg height="70px" width="70px">
            <circle cx="35" cy="35" r="30" fill="none" stroke="red" stroke-width="10"
                    stroke-dasharray="188.4" stroke-dashoffset="188.4"
                    transform="rotate(-90 35 35)">
                <animate attributeName="stroke-dashoffset" from="188.4" to="0" dur="1s" fill="freeze"/>
            </circle>
        </svg>
    `;

    return svgHTML;
}


function generateAnimatedCrossHTML() {
    let svgHTML = `
        <svg height="70px" width="70px" viewBox="0 0 100 100">
            <rect x="40" y="0" width="20" height="0" fill="blue" transform="rotate(45 50 50)">
                <animate attributeName="height" from="0" to="100" dur="500ms" fill="freeze" />
            </rect>
            <rect x="40" y="0" width="20" height="0" fill="blue" transform="rotate(-45 50 50)">
                <animate attributeName="height" from="0" to="100" dur="500ms" fill="freeze" begin="500ms" />
            </rect>
        </svg>
    `;

    return svgHTML;
}