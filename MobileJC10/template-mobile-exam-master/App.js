import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './src/2.reducers'
import firebase from 'firebase'
import TodoListScreen from './src/components/TodoListScreen';
import TodoStack from './src/navigators/TodoStack';


export default function App() {
  const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))

  var firebaseConfig = {
    apiKey: "AIzaSyBMAdFSBKVTyiK4UV8dSQ1lbjGCSe7CL_4",
    authDomain: "todoexam-4c540.firebaseapp.com",
    databaseURL: "https://todoexam-4c540.firebaseio.com",
    projectId: "todoexam-4c540",
    storageBucket: "todoexam-4c540.appspot.com",
    messagingSenderId: "655931496750",
    appId: "1:655931496750:web:02985332a705493811c2bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.disableYellowBox = true
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoStack />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
