import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles/global";
import Header from "./pages/components/header/header";
import './app.css'
import theme from './theme/theme'
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Details from "./pages/details/details";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles/>
        <BrowserRouter>
          <Header/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/:name' element={<Details/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
