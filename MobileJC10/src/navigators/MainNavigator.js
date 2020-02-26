import React from 'react'
import { createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screens/HomeScreen'
import ProfilleScreen from './screens/ProfilleScreen'
import SettingScreen from './screens/SettingScreen'
import HomeStack from './HomeStack'

const MainNavigator = createBottomTabNavigator({
    Home : {
        screen : HomeScreen,
        path : 'Home'
    },
    ProfilleScreen,
    SettingScreen
})

export default MainNavigator