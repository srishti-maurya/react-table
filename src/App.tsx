import { useEffect, useState } from 'react';
import './App.css';
import { MyTable } from './components/MyTable';
import { Data } from './types/type';

const App: React.FC = (): JSX.Element => {
  const [data, setData] = useState<Data[]>([]);

  const getData = (): void => {
    fetch('dataset.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((myJson) => setData(myJson));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <MyTable data={data} setData={setData} />
    </div>
  );
};

export default App;
