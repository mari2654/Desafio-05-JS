let numerosUm=["um", "dois", "tres", "quatro", "cinco"]
console.log(numerosUm[5]);

let numerosDois=["um", "dois", "tres", "quatro", "cinco"]
numerosDois.unshift("zero");
console.log(numerosDois);

let numerosTres=["um", "dois", "tres", "quatro", "cinco"]
numerosTres.pop();
console.log(numerosTres);

let numerosQuatro=["um", "dois", "tres"]
numerosQuatro.push("quatro, cinco");
console.log(numerosQuatro);

let numerosCinco=["zero", "um", "dois"]
numerosCinco.shift();
console.log(numerosCinco);

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b){
    return(a-b)
});
console.log(numbers);

