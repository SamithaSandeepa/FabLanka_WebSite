import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Activate from "./containers/Activate";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import FirstPage from "./containers/FirstPage";

// import Footer from "./components/Footer";

import { Provider } from "react-redux";
import store from "./store";
import { ContextProvider } from "./context/ContextProvider";
import Layout from "./hocs/Layout";

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <ContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route
              exact
              path="/password/reset/confirm/:uid/:token"
              component={ResetPasswordConfirm}
            />
            <Route exact path="/activate/:uid/:token" component={Activate} />
            <Route exact path="/firstpage" component={FirstPage} />
          </Switch>
        </ContextProvider>
      </Layout>
    </Router>
  </Provider>
);

export default App;
