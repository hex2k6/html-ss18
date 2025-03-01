let year =Number(prompt("moi ban nhap nam"));
if(year % 4 ==0 && year % 100 !==0 || year %400 ==0){
    document.write("nam"+year+"la nam nhuan");
}else{
    document.write("nam"+year+"ko phai la nam nhuan");
}