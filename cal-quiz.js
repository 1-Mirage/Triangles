const formquiz=document.getElementById("quiz-form");
const submit = document.getElementById("submit-answers");
const outputbox = document.getElementById("output");

const correctans=["6","3","3","3","scalene"];
function calscore(e)
{
   e.preventDefault();
    const formres= new FormData(formquiz);
    let score=0,index=0;
    for (let val of formres.values()) 
    {
        if (val === correctans[index]) {
          score++;
        }
        index++;
      }
      outputbox.innerText = `The score is  ${score}`;
}
submit.addEventListener("click", calscore);
