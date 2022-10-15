function isSafe(sudoko_arr, row, col, num) {
    for (let c = 0; c < 9; c++) {
        if (sudoko_arr[row][c] == num) {
            return false;
        }
    }
    for (let r = 0; r < 9; r++) {
        if (sudoko_arr[r][col] == num) {
            return false;
        }
    }
    let boxRowStart = row - row % 3;
    let boxColStart = col - col % 3;
    for (let r = boxRowStart; r < boxRowStart + 3; r++) {
        for (let j = boxColStart; j < boxColStart + 3; j++) {
            if (sudoko_arr[r][j] == num) {
                return false;
            }
        }
    }
    return true;
}
function solve_sudoku(sudoko_arr) {
    let row = -1;
    let col = -1;
    let is_empty = true;
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (sudoko_arr[i][j] == 0) {
                row = i;
                col = j;
                is_empty = false;
                break;
            }
        }
        if (!is_empty) {
            break;
        }
    }
    if (is_empty) {
        return true;
    }
    for (let num = 1; num <= 9; num++) {
        if (isSafe(sudoko_arr, row, col, num)) {
            sudoko_arr[row][col] = num;
            if (solve_sudoku(sudoko_arr)) {
                return true;
            }
            else {
                sudoko_arr[row][col] = 0;
            }
        }
    }
    return false;
}
function get_values() {
    console.log("cliced");
    var sudoku_statur = document.getElementById("result");
    var sudoko_arr = new Array(new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(9));
    let k = 1;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let temp = document.getElementById(`no${k}`).value;
            if (temp != "") {
                sudoko_arr[i][j] = parseInt(temp);
            }
            else {
                sudoko_arr[i][j] = 0;
            }
            ++k;
        }
    }
    // console.log(sudoko_arr);
    if (solve_sudoku(sudoko_arr)) {
        // console.log(sudoko_arr);
        put_values_solution_exist(sudoko_arr);
        sudoku_statur.value = "Solution exist";
        sudoku_statur.style.display = "block";
    }
    else {
        put_values_solution_not_exist();
        sudoku_statur.value = "Solution does not exist";
        sudoku_statur.style.display = "block";
    }
}
function put_values_solution_exist(sudoko_arr){
    let k=1;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById(`no${k}`).value = sudoko_arr[i][j];
            ++k;
        }
    }
}
function put_values_solution_not_exist(){
    let k=1;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById(`no${k}`).value = "";
            ++k;
        }
    }
}

function clear_values(){
    put_values_solution_not_exist();
    document.getElementById("result").style.display='none';
}