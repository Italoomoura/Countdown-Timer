const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

const itens = document.querySelectorAll(".tempo div h2");
const cTempo = document.querySelector(".tempo");
const fim = document.querySelector(".finalTitulo");

// Mudar a data Final

let data = new Date(2022, 8, 14);

const tempoFuturo = data.getTime();

const ano = data.getFullYear();
let mes = data.getMonth();
mes = meses[mes]; 
const dia = data.getDate();

fim.textContent = `O tempo acaba em ${dia} de ${mes} de ${ano}`

function getTempoRestante(){
    const hoje = new Date().getTime();
    const h = tempoFuturo - hoje

    // valor em ms
    const umDia = 24*60*60*1000;
    const umaHora = 60*60*1000;
    const umMinuto = 60*1000;

    // calculando o tempo
    let dias = h/umDia
    dias = Math.floor(dias);
    let horas = Math.floor((h % umDia) / umaHora);
    let minutos = Math.floor((h % umaHora) / umMinuto)
    let segundos = Math.floor((h % umMinuto) / 1000);

    const values = [dias, horas, minutos, segundos];

    function format(item){
        if(item < 10){
            return item = `0${item}`;
        }
        return item;
    }

    itens.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });
    if(h < 0){
        clearInterval(timer);
        cTempo.innerHTML = `<h2>O tempo acabou!</h2>`
    }
}

let timer = setInterval(getTempoRestante,1000);
getTempoRestante();
