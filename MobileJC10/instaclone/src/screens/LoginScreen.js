import React, { useState } from 'react'
import {View, Text, StyleSheet, Alert} from 'react-native'
import {Input, Button, Grid, Col, Row, H1} from 'native-base'
import firebase from 'firebase'

const LoginScreen = props => {
    // const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        if (password && email) {

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log(firebase.auth().currentUser)
                
                Alert.alert('Success', 'You are now logged in')
            })
            .catch(err => {
                Alert.alert('Firebase Auth Failed')  
            })
        } else {
            Alert.alert('Error!', 'Password and repeat password not identical')
        }

        }
        

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'blue',
            flexDirection: 'column',
            alignSelf: 'stretch'
            }}>

                
                <Grid>
                {/* <Row size={1} style={{
                    alignItems: 'center'
                }}> */}
                    <Col size={1} style={{ flexDirection : 'column', justifyContent : 'flex-end' }}>
                        <H1 style={{ color : '#f0f8ff', textAlign : 'center', marginBottom : 20 }}>
                            Buka Warung
                        </H1>
                    </Col>
                {/* </Row> */}
                <Row size={1.5} style={{
                    alignItems: 'center'
                }}>
                    <Col style={{ padding : 30 }}>

                        <View  style={{...styles.inputRounded}} >
                            <Input onChangeText={text => setEmail(text)} placeholder='Email atau Username' />
                        </View>
                      

                        <View style={{...styles.inputRounded}}>
                            <Input secureTextEntry={true} onChangeText={text => setPassword(text)} placeholder='Password' />
                        </View>
                        
                    </Col>
                </Row>


                <Col size={1} style={{
                    alignItems: 'center'
                }}>
                    <Button onPress={onLogin} rounded style={{
                        backgroundColor : '#cae9f5',
                        paddingHorizontal : 50,
                        paddingVertical : 10
                    }}>
                        <Text style={{
                            color : 'black',
                            alignSelf : 'center'
                        }}>
                            Login
                        </Text>
                        
                    </Button>

                    <Button style={{
                        backgroundColor : 'red',
                        paddingHorizontal : 50,
                        paddingVertical : 10
                    }}>
                        <Text>
                            Register
                        </Text>
                    </Button>
                </Col>
            </Grid>
        </View>
    )
}

const styles = StyleSheet.create({
    inputRounded : { 
        color : 'gray', 
        backgroundColor : '#f0f8ff',
        borderBottomEndRadius : 50,
        borderTopEndRadius : 50,
        borderBottomStartRadius : 50,
        borderTopStartRadius : 50,
        paddingLeft : 20,
        marginVertical : 10,
        // flex : 1
        height: 60,
        width : '100%'
    }
})

export default LoginScreen