import ReactECharts from 'echarts-for-react';
import { Chart } from '../types/type';

export const PieChart = ({ data }: Chart) => {
  const newData = [];
  for (const [key, value] of Object.entries(data)) {
    newData.push({ value: value, name: key });
  }
  const modifiedData = newData.filter((item) => item.name !== 'total');

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
        data: modifiedData,
      },
    ],
  };
  return (
    <ReactECharts option={option} style={{ height: '60px', width: '60px' }} />
  );
};
