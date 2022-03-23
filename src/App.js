import { Fragment, useState } from 'react';
import { GetMovies } from './utils/GetMovies';
import AppRoutes from './AppRoutes';
import './assets/css/style.css';
function App() {
  const [data, setData] = useState();
  return (
    <Fragment>
      <GetMovies setData={setData}/>
      <AppRoutes data={data} />
    </Fragment>
  );
}

export default App;
