import { ReconciliationOutlined } from '@ant-design/icons';
import { PieChart } from './PieChart';
import validation from '../assets/svg/validation.svg';
import netting from '../assets/svg/netting.svg';
import { StatusProps } from '../types/type';

export const Status = ({
  isReconciled,
  isChart,
  data,
}: StatusProps): JSX.Element => {
  return (
    <div className="center">
      <div className="flex-col">
        <img src={validation} alt="validation" />
        <p className="desc">validation</p>
      </div>
      <div className="line"></div>
      <div className="flex-col">
        <ReconciliationOutlined
          style={{ color: isReconciled ? '#fff' : '#1A73E8' }}
          className={isReconciled ? 'filled' : 'empty'}
        />
        <p className="desc">reconciliation</p>
      </div>
      <div className="line"></div>
      {isChart ? (
        <div className="pie-chart">
          <PieChart data={data} />
          <p className="chart-desc">netting</p>
        </div>
      ) : (
        <div className="flex-col">
          <img src={netting} alt="netting" />
          <p className="desc">netting</p>
        </div>
      )}
    </div>
  );
};
