const btn = document.querySelector('#btn_buscar');
const monto = document.querySelector('#input_monto');
const tipoMoneda = document.querySelector('#tipo_moneda');
let myChart;

btn.addEventListener('click', () => {
    if( monto.value.length > 0 ){
        obtenerDatosHistoricos(tipoMoneda,monto,10);
    }else{
        alert("El monto no puede estar vacio");
    }
});

async function obtenerDatosHistoricos(tipoMoneda,monto,dias){
    try{
        if( tipoMoneda.value === 'dolar'){
        const res = await fetch("https://mindicador.cl/api/dolar");
        const data = await res.json();

        let datosHistoricos = data.serie.filter( datos => datos.fecha >= obtenerFecha(dias) );
        formatoMoneda( monto.value / datosHistoricos[0].valor, 'en-US','USD');

        fechas = datosHistoricos.map( (datos) => convertirFecha(datos.fecha) );
        valores = datosHistoricos.map( (datos) => datos.valor)

        generarGrafico(valores,fechas);

    }else if( tipoMoneda.value === 'euro' ){
        const res = await fetch("https://mindicador.cl/api/euro");
        const data = await res.json();
        
        let datosHistoricos = data.serie.filter( datos => datos.fecha >= obtenerFecha(dias) );
        formatoMoneda( monto.value / datosHistoricos[0].valor ,'de-DE','EUR');

        fechas = datosHistoricos.map( (datos) => convertirFecha(datos.fecha));
        valores = datosHistoricos.map( (datos) => datos.valor)

        generarGrafico(valores,fechas);

    }else{
        //formatoMoneda(number,'es-CL','clp')
        alert("Moneda no valida")
    }

    }catch(e){
        console.log(e.message);
    }
}

function obtenerFecha(dias){
    const today = new Date();
    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(today.getDate() - parseInt(dias));
    return tenDaysAgo.toISOString();;
}



function formatoMoneda(number,formatoNumero,estiloMoneda) {
    const resultado = document.querySelector('#resultado');
    const roundedNumber = (number * 10) / 10;
    const formattedNumber = new Intl.NumberFormat(formatoNumero, {
        style: 'currency',
        currency: estiloMoneda,
        minimumFractionDigits: 5,
        maximumFractionDigits: 5
    }).format(roundedNumber);
    resultado.innerHTML = formattedNumber;
}

function convertirFecha(fecha){
    const date = new Date(fecha);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return formattedDate = `${day}/${month}/${year}`;
}

function generarGrafico(valores,dias){
    
    if (myChart) {
        myChart.destroy();
    }

    let ctx = document.getElementById('myChart').getContext('2d');

    myChart = new Chart(ctx, {
    type: 'line',
    title: 'Movimiento ultimos 10 días',
    data: {
        labels: dias,
        datasets: [{
        label: 'Monto CLP',
        data: valores,
        borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Movimiento de la moneda ultimos 10 días'
                }
            },
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });
}