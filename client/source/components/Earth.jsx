import React from 'react';
import styled from 'styled-components';


const StyledEarth = styled.img`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Earth = function CreateEarth() {
  return (
    <StyledEarth src="/images/earth_orbit.png" />
  );
};

export default Earth;
