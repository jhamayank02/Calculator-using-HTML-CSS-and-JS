// Grab all the items
let display = document.getElementById('display');
let btns = document.getElementsByClassName("btn");
let secondContainer = document.getElementsByClassName("secondContainer")[0];

// str to be displayed on the screen
let str = '';

// Event listener for every button
for (btn of btns) {

    btn.addEventListener('click', (e) => {
        let btnVal = e.target.innerText;

        // If user presses '=' then
        if (btnVal == "=") {

            // For sin
            if (str.includes('sin')) {
                let newStr = str.slice(3);
                display.value = Math.sin(newStr);
            }

            // For cos
            else if (str.includes('cos')) {
                let newStr = str.slice(3);
                display.value = Math.cos(newStr);
            }

            // For tan
            else if (str.includes('tan')) {
                let newStr = str.slice(3);
                display.value = Math.tan(newStr);
            }

            // For sqrt
            else if (str.includes('SQRT')) {
                let newStr = str.slice(4);
                display.value = Math.sqrt(newStr);
            }

            // For exp
            else if (str.includes('EXP')) {
                let newStr = str.split('EXP');
                display.value = Math.pow(newStr[0], newStr[1]);
            }

            // For ln(natural log)
            else if (str.includes('ln')) {
                let newStr = str.slice(2);
                display.value = Math.log(newStr);
            }

            // For log(base 10)
            else if (str.includes('log')) {
                let newStr = str.slice(3);
                let log = Math.log(newStr) / Math.log(10)
                display.value = log;
            }

            // For !(factorial)
            else if (str.includes('!')) {
                newStr = str.substring(0, (str.length - 1))
                display.value = Factorial(newStr);
            }

            // else evaluate the string
            else {
                display.value = eval(str);
            }
        }


        // If user presses 'Clear' then
        else if (btnVal == "Clear") {
            str = ''
            display.value = str
        }


        // If user presses 'Backspace' then
        else if (btnVal == "Backspace") {
            str = str.substring(0, (str.length - 1))
            display.value = str
        }


        // If user presses '<' then
        // show more functions/buttons
        else if (btnVal == ">") {
            secondContainer.classList.toggle("hide");
        }

        // Else display the value user enters on the screen
        else {
            str += btnVal;
            display.value = str;
            console.log("Button clicked")
        }
    })
}

// Function to find factorial of the number
function Factorial(value) {
    let ans;
    if (value == '0') {
        ans = 0
        return ans
    }
    else {
        ans = 1;
        for (var i = 1; i <= Number(value); i++) {
            ans = ans * i
            console.log(i)
        }
        return ans
    }
}