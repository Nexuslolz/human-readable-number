module.exports = function toReadable (number) {
    let arrSmall = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let arrMiddle = [' ', ' ', ' ', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let arrBigger = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let exception = ['ten', 'eleven', 'twelve']
    let arrBig = 'hundred';
  
  if(number < 10){
      return arrSmall[number];
  } else if (number < 13){
      return exception[String(number)[1]]
  }else if (number < 20){
      return arrMiddle[String(number)[1]]
  }else if (number > 19 && number < 100){
      if(String(number)[1] > 0){
      return (arrBigger[String(number)[0]] + ' ' + arrSmall[String(number)[1]])
      } else {
          return arrBigger[String(number)[0]]
      }
  } else if(number >= 100) {
  
  let x = String(number).slice(1);
      if(x < 10){
          if(x[1] > 0){
          return  arrSmall[String(number)[0]] + ' ' + arrBig + ' ' + arrSmall[x[1]];        
      }else {
        return  arrSmall[String(number)[0]] + ' ' + arrBig
      }
      } else if (x < 13){
          return arrSmall[String(number)[0]] + ' ' + arrBig + ' ' + exception[String(x)[1]]
      }else if (x < 20){
          return arrSmall[String(number)[0]] + ' ' + arrBig + ' ' + arrMiddle[String(x)[1]]
      }else if (x > 19 && x < 100){
          if(x[1] > 0){
          return arrSmall[String(number)[0]] + ' ' + arrBig + ' ' + (arrBigger[String(x)[0]] + ' ' + arrSmall[String(x)[1]])
          } else {
              return arrSmall[String(number)[0]] + ' ' + arrBig + ' ' + arrBigger[String(x)[0]]
          }
      } 
    }
}
