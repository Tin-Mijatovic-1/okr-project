import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import React from 'react';

const StyledButton = styled(({ ...other }) => (
  <Button classes={{ root: 'root' }} {...other} />
))`
  &.root {
    color: white;
    background-color: ${props => (props.upgradeable ? '#228B22' : '#E34234')};
    align: center;
    border: 1px solid #696969;
    &:hover {
    background-color: ${props => (props.upgradeable ? '#228B22' : '#E34234')};
    opacity: 0.6;
    }
    &:disabled {
        color: #d5d5d5;
    }
    &:not(:disabled) {
        animation: enable 0.3s linear;
    }
    @keyframes enable {
    0% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.3);
    }
    100% {
        transform: scale(1);
    }
  },
`;

export default StyledButton;
