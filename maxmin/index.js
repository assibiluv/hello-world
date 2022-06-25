function calcu(){

const minimum = document.querySelector("#myResult");
const calculate = document.querySelector("#cal");
const inputA = document.querySelector("#first").value;
const inputB = document.querySelector("#second").value;
const inputC = document.querySelector("#third").value;

let maxValue = Math.max(inputA, inputB, inputC);  
      

      if(inputA > inputB && inputA > inputC) {
        return maxValue;
    }
    else if (inputB > inputA && inputB > inputC) {
        return maxValue;
    }
    else if(inputC > inputA && inputC > inputB){
        return maxValue;
    }
    else {
        return 0;
    }

};

function small(){

    const minimum = document.querySelector("#myResult");
    const calculate = document.querySelector("#cal");
    const inputA = document.querySelector("#first").value;
    const inputB = document.querySelector("#second").value;
    const inputC = document.querySelector("#third").value;
    
    let minValue = Math.min(inputA, inputB, inputC);  
          
    
          if(inputA > inputB && inputA > inputC) {
            return minValue;
        }
        else if (inputB > inputA && inputB > inputC) {
            return minValue;
        }
        else if(inputC > inputA && inputC > inputB){
            return minValue;
        }
        else {
            return 0;
        }
    
    };
    

