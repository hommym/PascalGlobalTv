import React from 'react';
import styled from 'styled-components';

const SeriesContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

function Series() {
  return (
    <SeriesContainer>
      <Title>Series</Title>
      <p>Explore our TV series collection.</p>
    </SeriesContainer>
  );
}

export default Series;