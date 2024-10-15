import React from 'react';
import styled from 'styled-components';

const LiveContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

function Live() {
  return (
    <LiveContainer>
      <Title>Live</Title>
      <p>Watch live content here.</p>
    </LiveContainer>
  );
}

export default Live;