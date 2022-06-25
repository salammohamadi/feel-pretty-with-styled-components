import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './global-styles';
import Card from './components/Card';

const BaseTheme = {
  name: 'base',
  color: '#222',
  background: '#fff',
};

const DarkTheme = {
  name: 'dark',
  color: '#fff',
  background: '#222',
};

const Container = styled.div`
  padding: 2rem;
  font-weight: 700;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
`;

function App() {
  const [isBaseTheme, setIsBaseTheme] = useState(true);
  const toggleHandler = () => setIsBaseTheme(!isBaseTheme);

  return (
    <ThemeProvider theme={isBaseTheme ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        Hello World
        <button className='btn' onClick={toggleHandler}>
          toggle theme
        </button>
      </Container>
      {/* <Card /> */}
    </ThemeProvider>
  );
}
export default App;
