const numero = 21;

if (numero >= 0 && numero <= 5){
    console.log(`O ${numero} está entre 0 e 5`);
}

else if (numero >= 6 && numero <= 10){
    console.log(`O ${numero} está entre 6 e 10`);
}
else if (numero >= 11 && numero <= 16){
    console.log(`O ${numero} está entre 11 e 16`);
}
else if (numero >= 17 && numero <= 20){
    console.log(`O ${numero} está entre 17 e 20`);
}
else {
    console.log(`O ${numero} está acima de 20`);
}