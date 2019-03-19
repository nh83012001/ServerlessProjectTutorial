import React, { Component } from 'react';
import { View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { createStore, applyMiddleware } from 'redux';
import { Auth } from 'aws-amplify';
import ReduxThunk from 'redux-thunk';
import { Button } from './common';
import { Provider } from 'react-redux';
import RouterComponent from './Router';
import reducers from './reducers';


class App extends Component {
  onButtonPress() {
    console.log(this);
  }

  logout() {
    Auth.signOut()
    .then(data => console.log(data, this.props))
    .catch(err => console.log(err, 'props after signout', this.props));
  }

  // <Provider store={store}>
  //   <View style={styles.container}>
  //     <RouterComponent />
  //   </View>
  // </Provider>
  //
  // <View style={styles.container}>
  //

    render() {
      // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      return (
        <View style={styles.container}>
          <Button onPress={this.logout.bind(this)}>
            Logout
          </Button>
        </View>

      );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
};

export default withAuthenticator(App);
