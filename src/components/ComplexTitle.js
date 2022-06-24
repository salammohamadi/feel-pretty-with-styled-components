import React from 'react';
import styled from 'styled-components';

const ComplexTitle = ({ title, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className='underline'></div>
    </div>
  );
};

const Wrapper = styled(ComplexTitle)`
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

export default Wrapper;
