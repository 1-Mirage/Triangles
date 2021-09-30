const first = document.getElementById("firstside");
const second = document.getElementById("secondside");
const calculate = document.getElementById("calculate");
const output = document.getElementById("output-answer");


function calcarea(e) 
{
  e.preventDefault();
  const firstvalue = Number(first.value);
  const secondvalue = Number(second.value);

   const thirdvalue=Math.sqrt(firstvalue*firstvalue+secondvalue*secondvalue).toFixed(3);
    output.innerText = `The Hypotenuse is ${thirdvalue}`;
  
}

calculate.addEventListener("submit", calcarea);