import React from "react";
import CreateArticle from "./components/CreateArticle";
import DisplayHeader from "./components/Header";
import Login from './components/Login';
import { connect } from "react-redux";

const App = props => {
  return (
    <>
      <DisplayHeader />
      {props.showLogin && <Login />}
      {props.showArticleForm && props.role === "journalist" && <CreateArticle />}
      {props.showArticleForm && props.role !== "journalist" && <h3>You must be a journalist to view this page</h3>}
    </>
  );
};

const mapStateToProps = state => {
  return {
    showLogin: state.showLogin,
    showArticleForm: state.showArticleForm,
    role: state.role
  };
};

export default connect(mapStateToProps)(App);
