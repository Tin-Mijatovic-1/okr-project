/**
 *
 * Factory
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import StyledButton from '../../components/StyledButton';
import StyledTypography from '../../components/StyledTypography';
import StyledCard from '../../components/StyledCard';

/* eslint-disable react/prefer-stateless-function */
export class Factory extends React.Component {
  handelUpgradeFactory = () => {
    this.props.handleUpgrade(this.props.label);
  };

  render() {
    const { level } = this.props.data;
    const { label } = this.props;
    return (
      <StyledCard>
        <CardContent>
          <StyledTypography variant="h5">{label}</StyledTypography>
          <StyledTypography variant="h5">Level {level}</StyledTypography>
          <StyledButton
            // upgradeable={isUpgradeable(this.props) ? 1 : 0}
            variant="contained"
            onClick={() => this.handelUpgradeFactory()}
            // disabled={this.state.upgrading}
          >
            {' '}
            Upgrade{' '}
          </StyledButton>
        </CardContent>
      </StyledCard>
    );
  }
}

Factory.propTypes = {
  data: PropTypes.object,
  label: PropTypes.string,
  handleUpgrade: PropTypes.func,
};
//
// function mapStateToProps() {}
//
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }
//
// const withConnect = connect(
//   mapDispatchToProps,
// );
//
// export default compose(withConnect)(Factory);

export default Factory;
