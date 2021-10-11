const first = document.getElementById("firstside");
const second = document.getElementById("secondside");
const calculate = document.getElementById("calculate");
const output = document.getElementById("output-answer");

function reloadpage()
{
  location.reload();
}
function calcarea(e) 
{
  e.preventDefault();
  const firstvalue = Number(first.value);
  const secondvalue = Number(second.value);
  if(firstvalue<0||secondvalue<0)
  {
    reloadpage();
    alert("Enter positive value");
    
  }
  else
  {
   const thirdvalue=Math.sqrt(firstvalue*firstvalue+secondvalue*secondvalue).toFixed(3);
    output.innerText = `The Hypotenuse is ${thirdvalue}`;
  }
  
}

calculate.addEventListener("submit", calcarea);
