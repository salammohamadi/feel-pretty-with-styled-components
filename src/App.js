import BasicTitle from './components/BasicTitle';
import { DefaultButton, HipsterButton } from './components/Button';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle special>styled components</BasicTitle>
      <BasicTitle>styled components</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>cancel</HipsterButton>
    </div>
  );
}
export default App;
