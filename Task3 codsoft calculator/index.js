
let input = document.querySelector('#inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        var c = this.innerHTML;
        if (c == '=') {
            try {
                string = eval(string);

            } catch (e) {
                if (e instanceof SyntaxError) {
                    string = "Wrong Syntax";
                }
            }
            input.setAttribute("value", string);

        } else if (c == 'AC') {
            string = "";
            input.setAttribute("value", string);

        } else if (c == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.setAttribute("value", string);
        } else {
            string += c;
            input.setAttribute("value", string);
        }
    })
}