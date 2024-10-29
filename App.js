import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator({
    Search: SearchScreen,
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search'
    }
})

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})