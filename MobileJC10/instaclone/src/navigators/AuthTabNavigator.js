import React from 'react'
import { createMaterialTopTabNavigator} from 'react-navigation-tabs'

const AuthTabNavigator = createMaterialTopTabNavigator({
    RegisterScreen,
    LoginScreen
},
{
        tabBarComponent : null
})

export default AuthTabNavigator