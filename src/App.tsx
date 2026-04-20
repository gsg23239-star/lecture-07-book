import {BrowserRouter, Routes} from "react-router";
import Home from "./routes/Home.tsx";
import Search from "./routes/Search.tsx";
import Detail from "./routes/Detail.tsx";


function{ BrowserRouter, Route, Routes} from"react-router";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home >} />
            <Route path={"/search"} element={<Search / >} />
            <Route path={"/search"} element={<Detail / >} />
        </Routes>
    </BrowserRouter>
  );
}