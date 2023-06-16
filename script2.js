let dineroCofla = prompt("cuanto dinero tienes, Cofla?");

dineroCofla = parseInt(dineroCofla);


if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("compra el helado de agua");
} 
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("compra el helado de crema");
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("compra el helado marca heladix");
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("compra el helado marca heladovich");
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("compra el helado marca helardo");
}
else if (dineroCofla >= 2.9) {
    alert("puedes comprarte o el helado con confites o el pote de 1/4");
} else {
    alert("No te alcanza para nada");
}