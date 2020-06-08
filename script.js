
var operator=null;
var inputValueMemo=0;

function getContentClick(event) {
  const value = event.target.innerHTML;
  filterAction(value);
}

const filterAction = (value) => {

  ///////numbers////////

  if (value == "0") {
    addNumberInput(0);
  }

  if (value === "1") {
    addNumberInput(1);
  }

  if (value === "2") {
    addNumberInput(2);
  } else {
    null;
  }

  if (value === "3") {
    addNumberInput(3);
  } else {
    null;
  }
  if (value === "4") {
    addNumberInput(4);
  } else {
    null;
  }

  if (value === "5") {
    addNumberInput(5);
  } else {
    null;
  }

  if (value === "6") {
    addNumberInput(6);
  } else {
    null;
  }

  if (value === "7") {
    addNumberInput(7);
  } else {
    null;
  }

  if (value === "8") {
    addNumberInput(8);
  } else {
    null;
  }

  if (value === "9") {
    addNumberInput(9);
  } else {
    null;
  }

  if (value === ",") {
    addNumberInput(",");
  } else {
    null;
  }

  ////////////operators///////////

  if (value === "+") {
    setOperation("+");
  } else {
    null;
  }
  if (value === "-") {
    setOperation("-");
  } else {
    null;
  }
  if (value === "x") {
    setOperation('*');
  } else {
    null;
  }
  if (value === "/") {
    setOperation('/');
  } else {
    null;
  }
  if (value === "%") {
    setOperation('%');
  } else {
    null;
  }
  if (value === "+/-") {
    setOperation("+/-");
  } else {
    null;
  }


  if (value === "AC") {
    resetCalculator();
  } else {
    null;
  } 

  if (value === "=") {
    calculation();
  } else {
    null;
  } 

};

function addNumberInput(value) {
  const inputScreen = document.getElementsByClassName("calculator__screen")[0];
  const inputValue = inputScreen.value;

  if (inputValue === "0" && inputValue.length === 1 && value !== ",") {
    inputScreen.value = value;
    return;
  }

  if(inputScreen.value === "" && value === ","){
    inputScreen.value = 0 + value;
    return;
  }


  inputScreen.value = inputValue + value;
}

function setOperation(operator) {
  const inputValueScreen = document.getElementsByClassName("calculator__screen")[0].value;
  this.operator = operator;

  if(inputValueScreen != 0){
    calculation();
  }
    
}

function calculation() {
  const inputScreen = document.getElementsByClassName("calculator__screen")[0];
  let valueOne = transformCommaToPoint(this.inputValueMemo);
  let valueTwo = transformCommaToPoint(inputScreen.value);
  let total = 0;

  // sum operation
  if(this.operator === "+" && inputScreen.value !== ""){
    total = valueOne + valueTwo;
  }
  //minus
  if(this.operator === "-" && inputScreen.value !== ""){

    if (valueOne !== 0) {
      total = valueOne - valueTwo;
    } else{
      total = valueTwo;
    }
  }
  //multiply
  if(this.operator === "*" && inputScreen.value !== ""){

    if (valueOne !== 0) {
      total = valueOne * valueTwo;
    } else{
      total = valueTwo;
    }
  }
  //divide
  if(this.operator === "/" && inputScreen.value !== ""){

    if (valueOne !== 0) {
      total = valueOne / valueTwo;      
      total = adjustThreeDecimals(total);
    } else{
      total = valueTwo;
    }
  }
  //percent
  if(this.operator === "%" && inputScreen.value !== ""){
    total = valueTwo / 100;
    total = adjustThreeDecimals(total);
    
  }
  //convert +/-
  if(this.operator === "+/-" && inputScreen.value !== ""){
    if(valueTwo>0){
      total =- valueTwo;
    }
  }

  total = transformPointToComma(total);
  this.inputValueMemo = total;
  inputScreen.value = "";
  inputScreen.placeholder=total;
  
  
}

const resetCalculator =()=>{
  const inputScreen = document.getElementsByClassName("calculator__screen")[0];
  inputScreen.value = 0;
  this.inputValueMemo = 0;
  this.operator = null;
}

function transformCommaToPoint(value) {

  if(typeof value !== "number"){
    let resultTransform = value.replace(',','.');
    return parseFloat(resultTransform);
  }

  return value;

}

function transformPointToComma(value) {
  let resultTransform = value.toString();
  resultTransform = resultTransform.replace("." , ",");
  return resultTransform;
  
}

function adjustThreeDecimals(value) {  
  let resultTransform=value.toString();
  let regex=/(\d*.\d{0,3})/;
  return resultTransform.match(regex)[0];

}

