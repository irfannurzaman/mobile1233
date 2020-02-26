import React from 'react'
import {View, Text} from 'react-native'


const Stack1Screen = () =>{
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

        </View>
    )
}

export default  Stack1Screen