import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Col, Button, Alert, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Dashboard(props) {
  const [users, setUsers] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [successful, setSuccessful] = useState(false);

  useEffect(() => {
    (async function fetchdata() {
      try {
        const response = await axios.get("/api/users");
        const { users } = response.data;
        setUsers(users);
      } catch (err) {
        console.log("error!! ", err);
      }
    })();
  }, [users]);

  const TableRow = (props) => {
    return (
      <tr>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td>{props.address}</td>
        <td>
          <Button variant="success" value={props.email}>
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        </td>
        <td>
          <Button
            variant="danger"
            value={props.email}
            onClick={() => {
              setSubmitted(true)
              axios
                .delete("/api/delete", {
                  headers: {},
                  data: { email: props.email },
                })
                .then((res) => {
                  console.log(res);
                  setUsers(res.data.users);
                  setSuccessful(true);
                  setSubmitted(false);
                })
                .catch((err) => {
                  console.log(err);
                  setSubmitted(false);
                });
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </td>
      </tr>
    );
  };

  const renderRow = () => {
    if (users === null) return;
    return users.map((user, i) => {
      return (<TableRow key={i} username={user.userName} email={user.email} address={user.address} />);
    });
  };

  return (
    <div className="container align-content-center my-3">
      {props.token === null && <Redirect to="/Login" />}
      {successful && (
        <Alert
          variant="success"
          onClose={() => setSuccessful(false)}
          dismissible
        >
          <p>
            Successfully deleted user
          </p>
        </Alert>
      )}
      <Helmet>
        <style>{"body { background-color: black; }"}</style>
      </Helmet>

      <h2 id="user_details_title" className="d-flex justify-content-center">
        User Details
      </h2>

      {submitted && (
            <Spinner animation="border" variant="primary" className="mx-auto" />
        )}

      <Row className="my-5 d-flex justify-content-center">
        <Col lg={8}>
          <table
            id="users"
            className="table table-light table-striped table-hover"
          >
            <thead style={{ color: "green" }}>
              <tr>
                <td>
                  <b>Username</b>
                </td>
                <td>
                  <b>Email</b>
                </td>
                <td>
                  <b>Address</b>
                </td>
                <td>
                  <b>Edit</b>
                </td>
                <td>
                  <b>Delete</b>
                </td>
              </tr>
            </thead>
            <tbody>{renderRow()}</tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(Dashboard);
