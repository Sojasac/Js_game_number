let val;

function f2() {
  val = Math.floor(Math.random() * 10 + 1);
  // ниже вывод загаданного числа
  // let tempOut = document.getElementById("temp-out");
  // tempOut.innerHTML = val;
  return val;
}

function f1() {
  let num;
  let out = document.getElementById("out");
  num = document.getElementById("myNumb").value;
  if (num == val) {
    out.innerHTML = "ПОБЕДА!!!!";
  } else {
    if (num > val) {
      out.innerHTML = "Вы ввели число больше, чем загадано";
    } else {
      out.innerHTML = "Вы ввели число меньше, чем загадано";
    }
  }

  console.log(num);
}
