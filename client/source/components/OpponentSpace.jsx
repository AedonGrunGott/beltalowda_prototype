import React from 'react';
import styled from 'styled-components';

import CardSlot from './CardSlot';

const StyledSpace = styled.div`
  display: ${(props) => (props.hide ? 'flex' : 'none')};
  justify-content: center;
  position: relative;
  color: white;
  margin: 10px;
`;

const OpponentSpace = function CreateOpponentSpace({ planet, hide }) {
  return (
    <StyledSpace hide={hide}>
      <CardSlot color="RGBA(120,40,80,0.5)" />
      <CardSlot color="RGBA(120,40,80,0.5)" />
      <CardSlot color="RGBA(120,40,80,0.5)" />
    </StyledSpace>
  );
};


export default OpponentSpace;
