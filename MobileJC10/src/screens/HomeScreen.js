import React from 'react'
import {View, Text} from 'react-native'


const HomeScreen = (props) =>{
    return(
        <View style={{
            flexDirection : 'colums',
            flex: 1,
            justifyContent: 'center',
            alignItem: 'center'
        }}>
            <Text style={{fontSize: 36, color: 'red'}}>
                    HomeScreen
            </Text>
            
            <Button primary onPress={()=> props.navigation.navigate('Stack1Screen')}>
                <Text>Go to stack 1</Text>
            </Button>
        </View>
    )
}

export default HomeScreen