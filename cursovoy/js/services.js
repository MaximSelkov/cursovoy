const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
let input = document.getElementsByTagName('select')[0];
let output = document.getElementsByTagName('select')[1];
let sum = document.getElementById("sum");
let buttons = document.getElementsByTagName('button');
let notif = document.getElementById('notif');
const popup = document.getElementById("popup");

let n = input.length;
let m = 0;

for(let i = 0; i<input.length; i++){
  //Добавление услуг в заказ
  input[i].addEventListener("click", function () {
    n--;
    m++;
    select1.selectedIndex = -1;
    select2.selectedIndex = -1;
    input[i].style.display = 'none';
    output[i].style.display = 'block';
    sum.innerHTML -= -Number(input[i].value);
    if(m>0){
      output[0].style.display = 'none';
    }
    if(n==1){
      input[0].style.display = 'block';
    }
  });

  //Удаление услуг из заказа
  output[i].addEventListener("click", function () {
    n++;
    m--;
    select1.selectedIndex = -1;
    select2.selectedIndex = -1;
    output[i].style.display = 'none';
    input[i].style.display = 'block';
    buttons[i].disabled = false;
    sum.innerHTML -= Number(output[i].value);

    if(n>0){
      input[0].style.display = 'none';
    }
    if(m==0){
      output[0].style.display = 'block';
    }
  });
}

//Добавление услуг в заказ при нажатии на кнопку
for(let i = 1; i<buttons.length; i++){
  buttons[i].addEventListener("click", function () {
    n--;
    m++;
    select1.selectedIndex = -1;
    select2.selectedIndex = -1;
    input[i].style.display = 'none';
    output[i].style.display = 'block';
    buttons[i].disabled = true;
    sum.innerHTML -= -Number(input[i].value);
    
    if(m>0){
      output[0].style.display = 'none';
    }
    if(n==1){
      input[0].style.display = 'block';
    }
    popupMessage();
  });
}

//всплывающее сообщение
function popupMessage(){
  popup.classList.add("show");
    setInterval(() => {
      popup.classList.add("fade-out");
    }, 2000);
  popup.classList.remove("fade-out");
}