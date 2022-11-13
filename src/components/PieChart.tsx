import ReactECharts from 'echarts-for-react';
import { Chart, ChartData } from '../types/type';

export const PieChart = ({ data }: Chart): JSX.Element => {
  const formattedData: ChartData[] = [];
  for (const [key, value] of Object.entries(data)) {
    formattedData.push({ value: value, name: key });
  }
  const chartData: ChartData[] = formattedData.filter(
    (item) => item.name !== 'total'
  );

  const option = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: true,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '8',
          },
        },
        labelLine: {
          show: true,
        },
        center: ['50%', '50%'],
        width: '60px',
        height: '60px',
        color: ['#1A73E8', '#D0F4FF', '#6CF9C6'],
        data: chartData,
      },
    ],
  };
  return (
    <ReactECharts option={option} style={{ height: '60px', width: '60px' }} />
  );
};
