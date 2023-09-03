import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function TemperatureChangeChart({ temperatureData }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // To store the Chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous Chart instance before creating a new one
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: temperatureData?.map(entry => entry?.hour),
        datasets: [
          {
            label: 'Temperature',
            data: temperatureData?.map(entry => entry?.temperature),
            backgroundColor: 'rgb(255,255,255)',
            borderColor: 'rgb(255,255,255)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: 'white', // Change label color for x-axis
            },
          },
          y: {
            ticks: {
              color: 'white', // Change label color for y-axis
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: 'white', // Change color of the legend label "Temperature"
            },
          },
        },
        // Add other chart options here
      },
    });
  }, [temperatureData]);

  return <canvas ref={chartRef} />;
}

export default TemperatureChangeChart;
