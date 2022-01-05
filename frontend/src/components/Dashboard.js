import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

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
