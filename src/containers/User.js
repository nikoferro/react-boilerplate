import React from "react";
import { connect } from "react-redux";
import Button from "../components/Button";
import * as UsersActions from "../actions/users";
import * as UserActions from "../actions/user";
import "./User.css";

function renderUsers(props) {
  if (props.users.loading) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {props.users.data.map(user => (
        <li className="user-item" key={`user-${user.id}`}>
          {`${user.name} (${user.email})`}{" "}
          <Button
            label={`Fetch User User ID: ${user.id}`}
            onClick={() => props.dispatch(UserActions.loadUser(user.id))}
          />
        </li>
      ))}
    </ul>
  );
}

function renderUser(props) {
  if (props.user.loading) {
    return <div>Loading...</div>;
  }
  return (
    <pre>{props.user.data.id ? JSON.stringify(props.user.data) : null}</pre>
  );
}

function User(props) {
  return (
    <div id="User">
      <h2>User</h2>
      <Button
        label="Fetch Users"
        onClick={() => props.dispatch(UsersActions.loadAllUser())}
      />
      {renderUsers(props)}
      {renderUser(props)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users
  };
};

export default connect(mapStateToProps)(User);
