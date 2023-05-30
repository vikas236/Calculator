// calling html elements
const btn = document.querySelectorAll("button");
const display = document.querySelector("h2");


// delcarign variables
let f_num = 0;
let s_num = 0;
let operator = "";
let num = 0;



// declaring functions
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}

function operate(a, operator, b) {
    if (operator == "+") { return add(a, b); }
    else if (operator == "-") { return substract(a, b); }
    else if (operator == "*") { return multiply(a, b); }
    else if (operator == "/") { return divide(a, b); }
    else if (operator == "%") { return mod(a, b); };
}

function evnt() {
    let float = false;
    for (i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            let choice = this.innerText;
            if (Number(choice) < 10 && Number(choice) >= 0) {
                choice = Number(choice);
            };
            if (choice == ".") {
                float = true;
            }
            if (choice == "C") {
                num = 0; f_num = 0;
                s_num = 0;
                operator = "";
                display.innerText = 0;
                float = false;
            }
            else if (choice != "=" && f_num == 0 && s_num == 0 && operator == "" && num > 0) {
                display.innerText = 0;
            }
            else if (choice == "=" && f_num > 0 && s_num > 0 && operator != "") {
                display.innerText = operate(f_num, operator, s_num);
                f_num = 0; s_num = 0;
                num = 0; operator = "";
                float = false;
            }
            else if (typeof (choice) == "number" && f_num > 0 && operator != "" && float == false) {
                num = (num * 10) + choice;
                s_num = num; display.innerText = operator + s_num;
            }
            else if (float == true && operator != "") {
                if (choice == ".") { display.innerText = operator+s_num+"."; }
                else { 
                    choice = choice / 10;
                    console.log(choice);
                    num = num + choice;
                    s_num = num;
                    display.innerText = operator+s_num;
                };
            }
            else if ((choice != "=" && typeof (choice) != "number") && f_num > 0 && choice != ".") {
                operator = choice;
                num = 0;
                display.innerText = operator;
                float = false;
            }
            else if (typeof (choice) == "number" && float==false) {
                num = (num * 10) + choice;
                f_num = num;
                display.innerText = f_num;
                console.log(f_num);
            }
            else if (float == true) {
                if (choice == ".") { display.innerText = f_num+"."; }
                else { 
                    choice = choice / 10;
                    console.log(choice);
                    num = num + choice;
                    f_num = num;
                    display.innerText = f_num;
                };
            };
            console.log(f_num, s_num, operator);
        });
    };
};


// function calling
evnt();