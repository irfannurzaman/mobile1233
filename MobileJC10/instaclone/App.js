import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import RegisterScreen from './src/screens/RegisterScreen'
import LoginScreen from './src/screens/LoginScreen'
import MainSwitchNavigator from './src/navigators/MainSwitchNavigator'


export default function App() {

  var firebaseConfig = {
    apiKey: "AIzaSyCWyVxzhAnTpIJEIIYGGgEZnnY7jTRjREI",
    authDomain: "instaclone-eb42c.firebaseapp.com",
    databaseURL: "https://instaclone-eb42c.firebaseio.com",
    projectId: "instaclone-eb42c",
    storageBucket: "instaclone-eb42c.appspot.com",
    messagingSenderId: "565853425093",
    appId: "1:565853425093:web:251b8eccd4306c5eb64fac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <View style={styles.container}>
      {/* <RegisterScreen/> */}
      {/* <LoginScreen/> */}
      <MainSwitchNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
