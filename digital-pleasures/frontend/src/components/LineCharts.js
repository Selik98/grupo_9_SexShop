import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler);

let precios = [100, 1000, 300, 800, 1200, 100]
let categorias = ['juguetes', 'Lubricantes', 'lenceria', 'fetiche', 'Diversion erotica']

const midata = {
    labels: categorias,
    datasets: [
        {
            label: 'precios',
            data: precios,
            tension: 0.5,
            fill: true,
            pointRadius: 10,
            borderWidth: 5,
            borderColor: 'rgb(255,99,132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255,99,132)'
        }
    ]
}

const misoptions = {
    scales: {
        y: {
            min: 0
        },
        x: {
            ticks: { color: 'black' }
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
}

export default function LineCharts() {
    return <Line data={midata} options={misoptions} />
}
