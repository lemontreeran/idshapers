import { connect } from "react-redux";

import * as actions from "../../actions";
import { getCityIdInfo, isLoggedIn, isLoading } from "../../selectors";

import ClaimReceived from "./ClaimReceived";

const mapStateToProps = state => ({
  isLoading: isLoading(state),
  isLoggedIn: isLoggedIn(state),
  data: getCityIdInfo(state)
});

const mapDispatchToProps = dispatch => ({
  redirectToHome() {
    dispatch(actions.redirectToHome());
  },
  redirectToPassengerHome() {
    dispatch(actions.redirectToPassengerHome());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ClaimReceived);
