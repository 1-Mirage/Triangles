const first = document.getElementById("firstside");
const second = document.getElementById("secondside");
const calculate = document.getElementById("calculate");
const output = document.getElementById("output-answer");
const third = document.getElementById("thirdside");


function calcarea(e) 
{
  e.preventDefault();
   //console.log(1);
  const firstvalue = Number(first.value);
  const secondvalue = Number(second.value);
  const thirdvalue = Number(third.value);

  if (((firstvalue+secondvalue) > thirdvalue )&& ((secondvalue + thirdvalue) > firstvalue) && ((firstvalue + thirdvalue) > secondvalue)) 
  {
    const semiperi = (firstvalue + secondvalue + thirdvalue) / 2;

    const result = Math.sqrt(semiperi *(semiperi - firstvalue) *(semiperi - secondvalue) *(semiperi - thirdvalue)).toFixed(3);
    output.innerText = `Area of a triangle is ${result} units`;
  } else
   {
    output.innerText = "Enter valid side lengths ";
  }
}

calculate.addEventListener("submit", calcarea);