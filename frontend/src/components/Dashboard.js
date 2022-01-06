import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Dashboard(props) {
  return (
    <div>
      {props.token === null && <Redirect to="/Login" />}
      <h1>Welcome to dashboard</h1>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(Dashboard);
