import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const StyledTypography = styled(({ ...other }) => (
  <Typography
    classes={{ h5: 'h5', paragraph: 'paragraph', h3: 'h3' }}
    {...other}
  />
))`
  &.h5 {
    color: #d5d5d5;
    margin-bottom: 10px;
    font-size: 24px;
  }
  &.h3 {
    color: #d5d5d5;
    font-size: 18px;
    margin: 15px;
  }
  &.paragraph {
    margin-top: 5px;
    color: #006ad1;
    font-size: 25px;
  }
`;

export default StyledTypography;
