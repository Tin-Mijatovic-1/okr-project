/**
 *
 * Shipyard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import makeSelectShipyard from './selectors';
import reducer from './reducer';

const StyledCard = styled(({ ...other }) => (
  <Card classes={{ root: 'root' }} {...other} />
))`
  width: 400px;
  margin: 10px;

  &.root {
    background-color: #f0f0f0;
    text-align: center;
    align: center;
  }
`;
/* eslint-disable react/prefer-stateless-function */
export class Shipyard extends React.Component {
  render() {
    return (
      <div>
        <StyledCard />
      </div>
    );
  }
}

// Shipyard.propTypes = {
//   dispatch: PropTypes.func,
// };

const mapStateToProps = createStructuredSelector({
  shipyard: makeSelectShipyard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'shipyard', reducer });

export default compose(
  withReducer,
  withConnect,
)(Shipyard);
