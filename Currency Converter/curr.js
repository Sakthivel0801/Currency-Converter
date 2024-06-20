let sel = document.querySelectorAll('.currency');
let btn = document.getElementById('btn');

let enter = document.getElementById('enter');
let result1 = document.getElementById('result');
let a = document.getElementById('end');
fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => display(res))

function display(res){
let c = Object.entries(res);
for(let i=0;i<c.length;i++){
    let opt =  `<option value="${c[i][1]}">${c[i][1]}</option> `
    sel[0].innerHTML += opt;
    sel[1].innerHTML += opt;
}
}

btn.addEventListener('click',()=>
{
    let curr1 =  sel[0].value;
    let curr2 =  sel[1].value;
    let inputVal = enter.value;

    if(curr1 == curr2){
        a.innerHTML = "You are selecting same value"
    }
    else{
        convert(curr1,curr2, inputVal)
    }
});
   
function convert(curr1 ,curr2 , inputVal){
     const host = 'api.frankfurter.app';
     fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
     result1.value = Object.values(data.rates)[0]
   
  });
}
