import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import Stack1Screen from '../screens/Stack1Screen'
import Stack2Screen from '../screens/Stack2Screen'
import ParamScreen from '../screens/ParamsScreen'

const HomeStack = createStackNavigator({
    HomeScreen : {
        screen : HomeScreen,
        navigationOptions : {
            header : null
        }
    },
    ParamScreen,
    Stack2Screen
})

export default HomeStack