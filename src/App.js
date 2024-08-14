
import Header from "./Сomponents/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePages from "./Pages/MoviePages";
import CardMovie from "./Сomponents/CardMovie";
import PopularMoviePages from "./Pages/PopularMoviePages";
import Search from "./Сomponents/Search";
import HomePages from "./Pages/HomePages";


function App() {
    return (
        <>

            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePages/>}/>
                    <Route path="/search" element={<Search/>} />
                    <Route path="/movie/:id" element={<MoviePages/>}/>
                    {/*<Route path="/ingredient/:ingredient" element={<IngredientPage/>}/>*/}
                </Routes>
            </Router>
        </>
    )
}
export default App;
// e517fdd963d18169b695e97d2c1e3ff2
//https://api.themoviedb.org/3/movie/11?api_key=e517fdd963d18169b695e97d2c1e3ff2
//
