import { Menu, Segment, Image } from "semantic-ui-react";
import { LOGIN_USER, CREATE_ARTICLE } from "../state/actions/actionTypes";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import Logo from "../images/Logo.png";
import React from "react";

const DisplayHeader = props => {

  const authenticated = useSelector(state => state.authenticated);
  const role = useSelector(state => state.role);
  let name;
  if (authenticated) {
    name = "Logout"
  } else {
    name = "Login"
  }

  return (
    <>
      <Segment inverted >
        <Menu inverted pointing secondary id="main-header">
          <Menu.Item
            id="login"
            onClick={() => props.dispatch({ type: LOGIN_USER })}
          >
            {name}
          </Menu.Item>
          <Image src={Logo} size="medium" centered rounded />
        </Menu>
      </Segment>
      <Menu
        vertical
        style={{ backgroundColor: "orange" }}
        id="sidebar"
      >
        <Menu.Item
          name="Create New Article"
          icon="write"
          onClick={() => props.dispatch({ type: CREATE_ARTICLE })}
        >

        </Menu.Item>
        <Menu.Item
          name="Review Article"
          icon="edit outline"
        >
        </Menu.Item>
      </Menu>
    </>
  );
};

export default connect()(DisplayHeader);
