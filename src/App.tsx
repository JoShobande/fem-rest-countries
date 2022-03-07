import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles/global";
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles>

        </GlobalStyles>
      </div>
    </ThemeProvider>
  );
}

export default App;
