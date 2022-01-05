import React from "react";
import { connect } from "react-redux";

function User(props) {
  return (
    <div>
      <p style={{ color: "white" }} className="mx-md-5 my-2">
        Hello {props.userName}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    email: state.email,
  };
};

export default connect(mapStateToProps)(User);
