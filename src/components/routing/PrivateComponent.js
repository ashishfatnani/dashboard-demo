import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Spin } from "antd";

const PrivateComponent = ({
  component: Component,
  auth: { isAuthenticated, loading },
}) => {
  if (loading) return <Spin />;
  if (isAuthenticated) return <Component />;

  return <Navigate to="/" />;
};

PrivateComponent.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateComponent);
