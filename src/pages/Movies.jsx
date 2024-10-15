import React from 'react';
import styled from 'styled-components';

const MoviesContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

function Movies() {
  return (
    <MoviesContainer>
      <Title>Movies</Title>
      <p>Browse our collection of movies.</p>
    </MoviesContainer>
  );
}

export default Movies;