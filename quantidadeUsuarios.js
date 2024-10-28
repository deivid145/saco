import { getCSS } from "./common.js";

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
      {
        x: 'nomeDasRedes',
        y: quantidadeDeUsuarios,
        type: 'bar',
        marker: {
          color: getCSS('--primary-color')
        }
      }
    ]


const layout = {
  plot_bgcolor: getCSS('--bg-color'),
  paper_bgcolor: getCSS('--bg-color'),
  title: {
    text: 'Redes sociais com mais usuarios no mundo',
     x: 0,
     font: {
         color: getCSS('--primary-color'),
         family: getCSS('--font'),
         size: 30
     }
  },

},
xaxis: {
    tickfont{
        color: getCSS('-primary-color'),
        size: 16,
        family: getCSS('--font')
    },
    title: {
        text: 'nome das redes sociais',
        font: {
            color: getCSS('--secondary-color')
        }
    }
},
yaxis: {
        text: 'bilhoes de usuarios ativos',
        font: {
            color: getCSS('--secondary-color')
        }
    }
}


  const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}