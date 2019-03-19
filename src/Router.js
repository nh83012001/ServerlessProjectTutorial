import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ReviewForm from './components/ReviewForm';

const RouterComponent = () => {
  // <Scene key="auth">
  //   <Scene
  //     key="login"
  //     component={LoginForm}
  //     title="Please Login"
  //     initial
  //   />
  //   <Scene
  //     key="signup"
  //     component={SignupForm}
  //     title="Please Signup"
  //   />
  //   <Scene
  //     key="signupQuestions"
  //     component={SignupQuestions}
  //     title="Further Questions"
  //   />
  // </Scene>
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="main">

          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={ReviewForm}
            title="Profile"
            initial
          />
        </Scene>
      </Scene>
    </Router>

  );
};

export default RouterComponent;
