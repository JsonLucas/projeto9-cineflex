import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './pages/Body';
import GetSingleMovie from './pages/components/GetSingleMovie';
import SelectSeat from './pages/SelectSeat';
function AppRoutes ({data}){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Body data={data} />}></Route>
                <Route path='/sessoes/:movieId' element={<GetSingleMovie />}></Route>
                <Route path='/assentos/:sessionId' element={<SelectSeat />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;