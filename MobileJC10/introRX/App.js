import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0)

  return (
    <View style={{
      ...styles.container
    }}>
      <View style={{flex : 1}}>
        <Text style={{fontSize : 30}}>{counter}</Text>
        <Button title='Bucin Akut' onPress={() => setCounter(counter + 1)} />
      </View>

      {/* <View style={{flex : 1}}>
        <Text>{inputText}</Text>
        <TextInput onChangeText={e => }/>
      </View> */}
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
