import { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import {
  Line, Bar, Pie, Doughnut, Polar,
} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

const ChartCarousel = ({ data, speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (data.length) {
        const lastIndex = data.length - 1;
        if (currentIndex === lastIndex) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <>
      {
        !!data.length
        && (
          <>
            {
              data[currentIndex].type === 'line'
              && (
                <Line
                  data={{
                    labels: data[currentIndex].chart_data.map((item) => item.x_value),
                    datasets: [
                      {
                        data: data[currentIndex].chart_data.map((item) => item.y_value),
                        backgroundColor: data[currentIndex].chart_data.map((item) => item.color),
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                    title: {
                      display: true,
                      text: data[currentIndex].name,
                      fontSize: 20,
                    },
                    legend: {
                      display: false,
                    },
                    plugins: {
                      datalabels: {
                        font: {
                          size: 16,
                        },
                        display: true,
                        color: 'white',
                        textStrokeWidth: 4,
                        textStrokeColor: 'black',
                      },
                    },
                  }}
                />
              )
            }
            {
              data[currentIndex].type === 'bar'
              && (
                <Bar
                  data={{
                    labels: data[currentIndex].chart_data.map((item) => item.x_value),
                    datasets: [
                      {
                        data: data[currentIndex].chart_data.map((item) => item.y_value),
                        backgroundColor: data[currentIndex].chart_data.map((item) => item.color),
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                    title: {
                      display: true,
                      text: data[currentIndex].name,
                      fontSize: 20,
                    },
                    legend: {
                      display: false,
                    },
                    plugins: {
                      datalabels: {
                        font: {
                          size: 16,
                        },
                        display: true,
                        color: 'white',
                        textStrokeWidth: 4,
                        textStrokeColor: 'black',
                      },
                    },
                  }}
                />
              )
            }
            {
              data[currentIndex].type === 'pie'
              && (
                <Pie
                  data={{
                    labels: data[currentIndex].chart_data.map((item) => item.x_value),
                    datasets: [
                      {
                        data: data[currentIndex].chart_data.map((item) => item.y_value),
                        backgroundColor: data[currentIndex].chart_data.map((item) => item.color),
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    title: {
                      display: true,
                      text: data[currentIndex].name,
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                    },
                    plugins: {
                      datalabels: {
                        font: {
                          size: 16,
                        },
                        display: true,
                        color: 'white',
                        textStrokeWidth: 4,
                        textStrokeColor: 'black',
                      },
                    },
                  }}
                />
              )
            }
            {
              data[currentIndex].type === 'doughnut'
              && (
                <Doughnut
                  data={{
                    labels: data[currentIndex].chart_data.map((item) => item.x_value),
                    datasets: [
                      {
                        data: data[currentIndex].chart_data.map((item) => item.y_value),
                        backgroundColor: data[currentIndex].chart_data.map((item) => item.color),
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    title: {
                      display: true,
                      text: data[currentIndex].name,
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                    },
                    plugins: {
                      datalabels: {
                        font: {
                          size: 16,
                        },
                        display: true,
                        color: 'white',
                        textStrokeWidth: 4,
                        textStrokeColor: 'black',
                      },
                    },
                  }}
                />
              )
            }
            {
              data[currentIndex].type === 'polar'
              && (
                <Polar
                  data={{
                    labels: data[currentIndex].chart_data.map((item) => item.x_value),
                    datasets: [
                      {
                        data: data[currentIndex].chart_data.map((item) => item.y_value),
                        backgroundColor: data[currentIndex].chart_data.map((item) => item.color),
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    title: {
                      display: true,
                      text: data[currentIndex].name,
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                    },
                    plugins: {
                      datalabels: {
                        font: {
                          size: 16,
                        },
                        display: true,
                        color: 'white',
                        textStrokeWidth: 4,
                        textStrokeColor: 'black',
                      },
                    },
                  }}
                />
              )
            }
          </>
        )
      }
    </>
  );
};

ChartCarousel.defaultProps = {
  speed: 5000,
};

ChartCarousel.propTypes = {
  data: Proptypes.instanceOf(Array).isRequired,
  speed: Proptypes.number,
};

export default ChartCarousel;
