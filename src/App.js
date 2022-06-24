import styled from 'styled-components';

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
`;

const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
  box-shadow: 1px 1px 1px 1px #645cff;

  &:active {
    box-shadow: none;
  }
`;

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>styled components</BasicTitle>
      <DefaultButton>click me</DefaultButton>
    </div>
  );
}
export default App;
