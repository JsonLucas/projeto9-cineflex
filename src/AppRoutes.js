import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './pages/Body';
import GetSingleMovie from './pages/components/GetSingleMovie';
function AppRoutes ({data}){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Body data={data} />}></Route>
                {data?.map((item) => (
                    <Route path={`/sessoes/${item.id}`} 
                    element={<GetSingleMovie movieId={item.id} />}></Route>
                ))}
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;