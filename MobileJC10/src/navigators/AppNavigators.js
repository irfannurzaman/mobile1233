import React from 'react'
import { createAppContainer, createNavigator, createSwitchNavigator } from 'react-navigation'
import MainNavigator from './MainNavigator'

const AppNavigator = createAppContainer(
    createSwitchNavigator({
        MainNav : MainNavigator
    })
)

export default AppNavigator