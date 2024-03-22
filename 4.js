"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

function superX() {
  for (let ww = "x"; ww.length < 21; ww += "x") {
    console.log(ww);
  }
}
superX();
