import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Col, Button, Modal, Alert, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Dashboard(props) {
  /************* States **********************/
  const [users, setUsers] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [editsuccess, setEditsuccess] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    email: "",
    username: "",
    address: "",
  });

  /************* handler functions ************/
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeName = (e) => {
    e.persist();
    setUser((user) => ({
      ...user,
      username: e.target.value,
    }));
  };

  const onChangeAddress = (e) => {
    e.persist();
    setUser((user) => ({
      ...user,
      address: e.target.value,
    }));
  };

  const handleEdit = (e) => {
    setSubmitted(true);
    const headers = {
      Authorization: "Bearer " + props.token,
    };
    axios
      .put("api/udpate", user, { headers })
      .then((res) => {
        console.log("User edited successfully!");
        setEditsuccess(true);
        setSubmitted(false);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  /********** Effect hook to fetch the users data from backend ***********/
  useEffect(() => {
    (async function fetchdata() {
      try {
        const response = await axios.get("/api/users", {
          headers: {
            Authorization: "Bearer " + props.token,
          },
        });
        const { users } = response.data;
        setUsers(users);
      } catch (err) {}
    })();
  }, [users, props.token]);

  /******************* A row component for user details table **************/
  const TableRow = (props) => {
    return (
      <tr>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td>{props.address}</td>
        <td>
          <Button
            variant="success"
            onClick={() => {
              setUser((user) => ({
                ...user,
                username: props.username,
                email: props.email,
                address: props.address,
              }));
              handleShow();
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        </td>
        <td>
          <Button
            variant="danger"
            onClick={() => {
              setSubmitted(true);
              axios
                .delete("/api/delete", {
                  headers: { Authorization: "Bearer " + props.token },
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

  /*************** Function to render a row of the user details table *********************/
  const renderRow = () => {
    if (users === null) return;
    return users.map((user, i) => {
      return (
        <TableRow
          key={i}
          username={user.userName}
          email={user.email}
          address={user.address}
          token={props.token}
        />
      );
    });
  };

  /***************** Actual return body of the component ******************************/
  return (
    <div className="container align-content-center my-3">
      {props.token === null && <Redirect to="/Login" />}
      {successful && (
        <Alert
          variant="success"
          onClose={() => setSuccessful(false)}
          dismissible
        >
          <p>Successfully deleted user</p>
        </Alert>
      )}
      {editsuccess && (
        <Alert
          variant="success"
          onClose={() => setEditsuccess(false)}
          dismissible
        >
          <p>Successfully edited user</p>
        </Alert>
      )}
      <Helmet>
        <style>{"body { background-color: black; }"}</style>
      </Helmet>

      <h2 id="user_details_title" className="d-flex justify-content-center">
        User Details
      </h2>
      <p style={{ color: "gray" }}>
        *If you edit or delete your own account, then changes will be reflected
        in your next session. Current session will remain unaffected
      </p>
      {submitted && (
        <Spinner animation="border" variant="primary" className="mx-auto" />
      )}

      {/************************ Modal to edit user details ********************/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Details: <p style={{ color: "red" }}>{user.email}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="d-grid gap-2 col-8 mx-auto my-3">
              <label>
                Username<sup style={{ color: "red" }}>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter user name"
                value={user.username}
                onChange={onChangeName}
              />
            </div>
            <div className="d-grid gap-2 col-8 mx-auto my-3">
              <label>
                Address<sup style={{ color: "red" }}>*</sup>
              </label>
              <div className="input-group">
                <textarea
                  className="form-control"
                  placeholder="Enter the address"
                  value={user.address}
                  onChange={onChangeAddress}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleEdit}
            disabled={
              user.email === "" || user.address === "" || user.username === ""
                ? true
                : false
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/************************** Table to display users **************************/}
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
