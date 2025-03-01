let a = Number(prompt("Mời bạn nhập vào số a: "));
let b = Number(prompt("Mời bạn nhập vào số b: "));
let count = prompt("Mời bạn nhập vào các phép tính(+,-,*,/): ");

let result;
switch (count) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = b !== 0 ? a / b : "Không thể chia cho 0";
        break;
    default:
        result = "Phép toán không hợp lệ!"; 
}

document.write("kết quả của phép tính trên: " + a + count + b + "=" + result);