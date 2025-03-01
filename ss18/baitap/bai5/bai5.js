let year =parseFloat(prompt("nhap so nam kinh nghiem"));
if(year<1){
    document.write("nham vien moi vao nghe");
}else if(year<=3){
    document.write("nhan vien co kinh nghiem");
}else if(year<=6 && year >=4){
    document.write("chuyen vien");
}else{
    document.write("quan ly");
}