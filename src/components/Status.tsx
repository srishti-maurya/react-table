import validation from '../assets/svg/validation.svg';
import netting from '../assets/svg/netting.svg';
import { ReconciliationOutlined } from '@ant-design/icons';
import { PieChart } from './PieChart';

export const Status = ({
  isReconciled,
  isChart,
  data,
}: {
  isReconciled?: boolean;
  isChart?: boolean;
  data?: any;
}) => {
  return (
    <div className="center">
      <div className="flex-col">
        <img src={validation} alt="validation" />
        <p className="desc">Validation</p>
      </div>
      <div className="line"></div>
      <div className="flex-col">
        <ReconciliationOutlined
          style={{ color: isReconciled ? '#fff' : '#1A73E8' }}
          className={isReconciled ? 'filled' : 'empty'}
        />
        <p className="desc">Reconciliation</p>
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
