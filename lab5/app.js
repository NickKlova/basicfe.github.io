// ---
let regexOfInitials = /^[а-яієїґ\']{3,15} [а-яієїґ]\.[а-яієїґ]\.$/i;
let regexOfGroup = /[А-ЯІЇЄ][А-ЯІЇЄ]\-[0-9][0-9]/m;
let regexOfPhoneNumber = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/i
let regexOfFaculty = /[А-ЯІЇЄ]{1,4}/m;
let regexOfAddress = /^м. [а-яієїґ\']{3,15}$/i

const initials = document.querySelector(".initials");
const group = document.querySelector(".group");
const phonenumber = document.querySelector(".phonenumber");
const faculty = document.querySelector(".faculty");
const address = document.querySelector(".address");

const dataInitials = document.querySelector(".data-fullname");
const dataGroup = document.querySelector(".data-group");
const dataPhonenumber = document.querySelector(".data-phonenumber");
const dataFaculty = document.querySelector(".data-faculty");
const dataAddress = document.querySelector(".data-address");

const form = document.querySelector(".form");

function checkForm() {
    let success = true;
    let errorMessage = "Спробуй ще раз!";
    if (!regexOfInitials.test(initials.value)) {
        initials.classList.add("error");
        success = false;
    }
    if (!regexOfGroup.test(group.value)) {
        group.classList.add("error");
        success = false;
    }
    if (!regexOfPhoneNumber.test(phonenumber.value)) {
        phonenumber.classList.add("error");
        success = false;
    }
    if (!regexOfFaculty.test(faculty.value)) {
        faculty.classList.add("error");
        success = false;
    }
    if (!regexOfAddress.test(address.value)) {
        address.classList.add("error");
        success = false;
    }
    if (success) {
        alert("Всі поля заповнені коректно.");
        dataInitials.innerHTML = initials.value;
        dataGroup.innerHTML = group.value;
        dataPhonenumber.innerHTML = phonenumber.value;
        dataFaculty.innerHTML = faculty.value;
        dataAddress.innerHTML = address.value;
        form.reset();
    }
    else {
        alert(errorMessage);
    }
    success = true;
}

// ---

// mainFunc
function setCellCurrentToolColor(cell) {
cell.style.backgroundColor = tool.value;
};

function setCellRandomColor(cell) {
    cell.style.backgroundColor = randomColor();
};

function changeColumnColor(cell) {
    let table = task2.getElementsByTagName("table")[0];
    let currCol = 0;
    let currRow = 0;

    for (let row = 0; row < table.rows.length - 1; row++) {
        for (let col = 0; col < table.rows[row].cells.length; col++) {
            if (table.rows[row].cells[col].id == cell.id) {
                currCol = col;
                currRow = row;
            }
        }
    }

    for(let y = currCol-1; y < table.rows.length -1; y += 2) {
        for (let i = currRow - 1; i <= table.rows.length - 1; i ++) {
            table.rows[i].cells[currCol + y].style.backgroundColor = tool.value;
        }
    }
}

// sysFunc
function randomNum() {
    return Math.floor(Math.random() * 255);
}
    
function randomColor() {
    return 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
}

function generateTable() {
    let table = document.createElement("table");
    for (let i = 0; i < 6; i++) {
    let tableRow = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
    let tableCell = document.createElement("td");
    tableCell.innerHTML = i * 6 + j + 1;
    tableCell.id = (i * 6 + j + 1).toString();
    tableRow.appendChild(tableCell);
    }
    table.appendChild(tableRow);
    }
    task2.appendChild(table);
}

// logic
const task2 = document.querySelector(".current-color");

const tool = document.getElementById("tool");
const variant = 8;

generateTable();
sellByVariant = document.getElementById(variant);

sellByVariant.addEventListener('mouseover', () => setCellRandomColor(sellByVariant));
sellByVariant.addEventListener('click', () => setCellCurrentToolColor(sellByVariant));
sellByVariant.addEventListener('dblclick', () => changeColumnColor(sellByVariant));