let btn = document.getElementById("btn");
let data = document.getElementById("data");

const url = "https://x-math.herokuapp.com/api/random";

btn.addEventListener("click", async function () {
  // alert("clicked")
  try {
    let res = await fetch(url);
    let obj = await res.json();
    console.log();
    data.innerHTML = `
        <br>
        <div> FIRST VALUE : ${obj.first} </div>
        <br>
        <div> SECOND VALUE : ${obj.second}</div>
        <br>
        <div> OPERATION : ${obj.operation}</div>
        <br>
        <div> EXPRESSION : ${obj.expression} </div>
        <br>
        <div> ANSWER : ${obj.answer} </div>
        <br>
        `;

  } catch (err) {
    console.log(err);
  }
});
