const first = document.getElementById("firstside");
const second = document.getElementById("secondside");
const calculate = document.getElementById("calculate");
const output = document.getElementById("output-answer");
const third = document.getElementById("thirdside");

function reloadpage()
{
  location.reload();
}
function calcarea(e) 
{
  e.preventDefault();
  const firstvalue = Number(first.value);
  const secondvalue = Number(second.value);
  const thirdvalue = Number(third.value);
  if(firstvalue<=0||secondvalue<=0||thirdvalue<=0)
  {
    reloadpage();
    alert("Enter positive value");
    
  }

  else if ((firstvalue+secondvalue+thirdvalue)===180) 
  {
    output.innerText = `Its a traingle`;
  } else
   {
    output.innerText = "Not a triangle";
  }
}

calculate.addEventListener("submit", calcarea);
