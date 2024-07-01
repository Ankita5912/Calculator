let buttons = document.querySelectorAll('.button');
let currentDisplay = "";
let display = document.querySelector('#display');


//one method for cacli

 buttons.forEach(buttons => {
   buttons.onclick = () =>{
     currentDisplay = currentDisplay + buttons.innerHTML;
     display.value = currentDisplay;
     console.log("successfull");
   }
 });

 function result(){
   let result = eval(display.value)
   currentDisplay = result;
   display.value = currentDisplay;
   console.log("successfull");
 }

 function allclear(){
   currentDisplay = "";
   display.value = currentDisplay;
   console.log("successfull");
 }

 function del(){
   let fun = display.value;
   currentDisplay = fun.slice(0 , -1);
   display.value = currentDisplay;
 }


/*
let Button = document.querySelectorAll("button")


function calculate(){
  switch(Button.innerText){
    case "AC":
      currentDisplay = "";
      display.value = currentDisplay;
      console.log("successfull");
    break;

    case "DEL":
      let gum = display.value;
      currentDisplay = gum.slice(0 , -1);
      display.value = currentDisplay;
    break;

    case "=" :
      currentDisplay = eval(display.value);
      display.value = currentDisplay;
    break;

    default :
      currentDisplay = currentDisplay + buttons.innerHTML;
      display.value = currentDisplay;
    break; 
  }
}

Button.addEventListioner("click", calculate());

*/