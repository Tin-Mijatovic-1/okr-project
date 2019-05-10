import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import React from 'react';

const StyledCard = styled(({ ...other }) => (
  <Card classes={{ root: 'root' }} {...other} />
))`
  flex: 1;
  width: 400px;
  margin: 10px;

  &.root {
    background-color: #1d3245;
    text-align: center;
    align: center;
  }
`;

export default StyledCard;
