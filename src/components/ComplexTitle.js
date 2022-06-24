import React from 'react';
import styled from 'styled-components';

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className='underline'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-align: center;
    text-transform: capitalize;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: #645cff;
    margin: 1rem auto;
  }
`;

export default ComplexTitle;
