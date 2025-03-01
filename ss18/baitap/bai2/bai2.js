let toan = parseFloat(prompt("Nhập điểm Toán: "));
let van = parseFloat(prompt("Nhập điểm Văn: "));
let anh = parseFloat(prompt("Nhập điểm Anh: "));

let dtb = (toan + van + anh) / 3.0;


if (dtb >= 8) {
    document.write("gioi");
} else if (dtb >= 6.5) {
    document.write("kha");
} else if (dtb >= 5) {
    document.write("trung binh");
} else {
    document.write("yeu");
}