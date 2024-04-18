// //first programm
let usersNumber1 = prompt('Введите число для первой программы');

if (usersNumber1 == 1) {
  console.log("Число ни простое, ни составное")
} else {
  if (usersNumber1 == 2) {
    console.log("Число простое")
  } else {
    for (i = 2; i < usersNumber1; i++) {
      if (usersNumber1 % i === 0) {
        console.log("Число составное");
        break
      } else {
        console.log("Число простое")
        break
      }
    }
  }

}

// //second programm

let usersNumber2 = prompt('Введите число для второй программы');
let sum = 0;

for (let i = 1; i <= usersNumber2; i++) {
  sum = 0;
  for (let j = 1; j <= i / 2; j++) {
    if (i % j === 0) sum += j;
  }
  if (i === sum) {
    console.log(i + ' - совершенное число');
  }
}


//third programm

let amountOfLines = prompt('Введите высоту ели');


for (i = 1; i < amountOfLines; i++) {
  let treeBase = "";
  let star = "*";
  let space = " ";
  for (j = i; j < amountOfLines; j++) {
    treeBase += space
  }
  for (k = 0; k < (i * 2) - 1; k++) {
    treeBase += star;
  }
  console.log(treeBase);
}