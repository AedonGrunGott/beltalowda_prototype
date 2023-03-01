import React from 'react';
import styled from 'styled-components';


const StyledSpace = styled.div`
  display: flex;
  position: relative;
  color: white;
  border: 1px solid red;
  margin: 10px;
`;

const OpponentSpace = function CreateOpponentSpace() {
  return (
    <StyledSpace>
      OPPONENT PLAY AREA
    </StyledSpace>
  );
};


export default OpponentSpace;
