import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles/global";
import Header from "./pages/components/header/header";
import './app.css'
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles/>
        <Header/>
      </div>
    </ThemeProvider>
  );
}

export default App;
