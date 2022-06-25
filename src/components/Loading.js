import styled, { keyframes } from 'styled-components';
import { setBorder } from '../utils';

const spinner = keyframes`

to{
  transform: rotate(360deg)
}
`;
const Loading = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  border: ${setBorder(5, 'solid', '#ccc')};
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: ${spinner} 600ms ease-in-out infinite;
`;

export default Loading;
