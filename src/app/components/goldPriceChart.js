'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
// import "./GoldPriceChart.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

export default function GoldPriceChart({ chartData }) {
  const data = {
    labels: chartData.map(d => d.time),
    datasets: [
      {
        label: '24K Gold',
        data: chartData.map(d => d.price24),
        borderColor: '#D4AF37',
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: '#D4AF37',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      },
      {
        label: '22K Gold',
        data: chartData.map(d => d.price22),
        borderColor: '#a67f00',
        backgroundColor: 'rgba(46, 139, 87, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: '#a67f00 ',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'var(--font-color)',
          font: {
            family: 'var(--font-body)',
            size: 14,
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 15, 15, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#D4AF37',
        borderWidth: 1,
        cornerRadius: 12,
        titleFont: {
          family: 'var(--font-body)',
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          family: 'var(--font-body)',
          size: 13,
        },
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ₹${context.parsed.y.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      y: {
        border: {
          color: 'rgba(204, 204, 204, 0.3)',
        },
        grid: {
          color: 'rgba(204, 204, 204, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: 'var(--muted)',
          font: {
            family: 'var(--font-body)',
            size: 12,
          },
          callback: function(value) {
            return '₹' + value.toLocaleString();
          }
        }
      },
      x: {
        border: {
          color: 'rgba(204, 204, 204, 0.3)',
        },
        grid: {
          color: 'rgba(204, 204, 204, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: 'var(--muted)',
          font: {
            family: 'var(--font-body)',
            size: 12,
          }
        }
      }
    }
  };

  return (
    <div className="chart-component">
      <Line data={data} options={options} />
    </div>
  );
}
