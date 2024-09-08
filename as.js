
let name;
let expense;
let val1 = document.getElementById("inp1");
let val2 = document.getElementById("inp2")  ;
let sum = 0 ;
let totalsum = document.getElementById("totalsum")
let expenselist = document.getElementById("expenselist")

function clickhandler(){

    name = val1.value
    val1.value = ("")

    expense = parseInt(val2.value)
    console.log(typeof(expense))

    val2.value = ("")

     
       let dv = document.createElement("div");
       dv.classList.add("data")
       dv.innerHTML = ` ${name} ---  ${expense} `
       expenselist.appendChild(dv)
     
       let btn = document.createElement("button");
       btn.classList.add("btn");
       btn.innerText = "Delete";
       btn.onclick = (()=>{
        dv.remove() 
    
        sum -= expense
        totalsum.innerText = sum


})


       dv.appendChild(btn)

       indx++
       sum += expense
       console.log(sum)

       totalsum.innerText = sum

   

}
