window.onload = function(){
  //selecting body element form DOM
  const body = document.querySelector("body")

  //array of string with numbers and symbols
  const data = ['9','8','7','+','6','5','4',
  '-','3','2','1','%','.','0','/','*','C','=']
  let html = ''


  //Pinting calculator
  rows(data)


  //printing html
  function rows(arr){
    html += '<div id="container"><div id="screen">0</div><div class="number">'
    for (var i = 0; i < arr.length; i ++){
      if (Number(arr[i]) || arr[i] === "." || arr[i] === "0"){
        html += '<div class="btn"><a href="#" onClick>' + arr[i] + '</a></div>'
      }
      if (isSymbol(arr[i])){
        html += '<div class="btn symbol"><a href="#">' + arr[i] + '</a></div>'
      }
      if (arr[i] === "="){
        html += '<div class="btn equal symbol"><a href="#">' + arr[i] + '</a></div>'
      }
      if (data[i] === "+" || data[i] === "-" || data[i] === "%" || data[i] === "*"){
        html += '</div><div class="number">'
      }
    }
    html += '</div>'
    body.innerHTML = html
  }


  function test(){
    console.log(this.innerText)
  }

  //checking for symbols
  function isSymbol(obj){
    switch (obj) {
      case "+":
      return true
      break;
      case "-":
      return true
      break;
      case "*":
      return true
      case "%":
      return true
      break;
      case "/":
      return true
      case "C":
      return true
      break;
    }
  }

  // Calculation formula

  const listLink = document.querySelectorAll(".btn")
  const outPut = document.querySelector("#screen")
  let dataToScreen = ""
  let result


  addEvent(listLink)

  /**
  *  This function itera over an object adding an event Handler "click",
  */
  function addEvent(obj){
    for (var i = 0; i < obj.length; i ++){
      obj[i].addEventListener("click", function(){
        if (this.innerText !== "="){
          if (this.innerText !== "C"){
            appendToScreen(dataToScreen += this.innerText)
            styleCSS(dataToScreen)
          } else {
            dataToScreen = ""
            appendToScreen("0")
            outPut.style = "font-size: 70px;"
          }
        } else {
          result = eval(dataToScreen)
          if (!result || !isFinite(result)){
            appendToScreen(result = 0)
            dataToScreen = ""
          } else {
            appendToScreen(result)
          }
        }
      })
    }
  }

  //debugin function
  function debug(obj){
    console.log(typeof obj)
    console.log(obj)
  }

  //append data to screen
  function appendToScreen(obj){
    outPut.innerText = obj
  }

  //Changin style
  function styleCSS(obj){
    // console.log(obj.length)
    switch (obj.length) {
      case 9:
      outPut.style = "font-size: 35px;"
      break;
      case 17:
      dataToScreen += "\n"
      break;
      case 36:
      alert("No more number for you !")
      appendToScreen("0")
      dataToScreen = ""
      outPut.style = "font-size: 70px;"
      break;
      default:

    }
  }
}
