import React from 'react'
import { View, Text } from 'react-native'

const ParamScreen = props => {
    return (
        <View style={{
            flexDirection : 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 36, color: 'red'}}>
            Param Screen
            </Text>
            <Text style={{fontSize: 36, color: 'red'}}>
                {props.navigation.getParam('nama', 'NO-NAMA')}
            </Text>
        </View>
    )
}



export default ParamScreen