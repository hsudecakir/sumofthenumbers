// Kullanıcıya kaç adet sayı girmek istediğini soralım.
// Vereceği cevaba göre kullanıcıdan sayıları alalım.
// Cevaplar sayilar dizisine eklensin.
// Kullanıdan alınan sayılar çift ise ayrı toplayıp cevabını yazdıralım, tek ise ayrı toplayıp cevabını yazdıralım.


let numbers = []

let addNumbers = Number(prompt('Kaç adet sayı girmek istediğinizi yazınız.'));
let number;

function listNumbers(){
  for(let i = 0; i < addNumbers; i++){
    number = Number(prompt('Girmek istediğiniz sayıyı yazınız.'));
    numbers.push(number);
  }
}

let oddNumbers = []
let evenNumbers = []

function sperateNumbers() {
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }
}

function listOddNumbers(){
  console.log('Girdiğiniz tek sayılar:');
  for(let i = 0; i < oddNumbers.length; i++){
    console.log(oddNumbers[i]);
  }
}

function listEvenNumbers(){
  console.log('Girdiğiniz çift sayılar:');
  for(let i = 0; i < evenNumbers.length; i++){
    console.log(evenNumbers[i]);
  }
}

let totalOddNumbers = 0;

function sumOddNumbers(){
  for(let i = 0; i < oddNumbers.length; i++){
    totalOddNumbers += oddNumbers[i]
  }
  console.log(`Girilen tek sayıların toplamı: ${totalOddNumbers}`);
}

let totalEvenNumbers = 0;

function sumEvenNumbers(){
  for(let i = 0; i < evenNumbers.length; i++){
    totalEvenNumbers += evenNumbers[i]
  }
  console.log(`Girilen çift sayıların toplamı: ${totalEvenNumbers}`);
}

listNumbers();
sperateNumbers();
sumOddNumbers();
sumEvenNumbers();
listOddNumbers();
listEvenNumbers();