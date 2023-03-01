import React from 'react';
import styled from 'styled-components';


const StyledPlanet = styled.img`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Planet = function CreateEarth({ planet }) {
  return (
    <StyledPlanet src={planet.url} />
  );
};

export default Planet;
