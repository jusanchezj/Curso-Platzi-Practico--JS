//const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
//const parrafito = document.querySelector('.parrafito');
//const pid = document.querySelector('#pid');
//const input = document.querySelector('input');

//console.log(h1)
//console.log({
    //h1,
    //p,
    //parrafito,
    //pid,
    //input,
//});

//h1.innerHTML = 'Escribiendo HTML desde JS'

//const img = document.createElement('img');
//img.setAttribute('src', 'https://www.bing.com/th?id=ORMS.48160de7b23c8935e1c5c5f83e111828&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0');


//console.log(img);
//borrar id
//pid.innerHTML=""
//pid.append(img);

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

//btn.addEventListener('click', btnOnClick) //para limpiar html

form.addEventListener('submit', sumarInputsVarios);

function sumarInputsVarios(){
    //console.log({event});
    event.preventDefault();
    const sumarIn = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumarIn;
}

form.addEventListener("mouseover", enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();

    alert("Danger!!")
}





