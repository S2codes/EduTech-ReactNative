import React, {Component} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Courses from './src/screens/Courses';
import CourseDetails from './src/screens/CourseDetails';
 

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen name='Home' component={Home} /> */}
        {/* Home  */}
        <Stack.Screen name='Home' options={{headerShown: false}}>
          {(props) => <Home {...props} channelName={"BeetaBie"} />}
        </Stack.Screen>

      {/* course  */}
      <Stack.Screen name='Course' component={Courses} options={{
        // headerTitleStyle: {
        //   fontSize: 15,
        // },
        headerTitle: "Courses",
        headerTitleAlign: "center"
      }} />
      {/* course  */}
      <Stack.Screen name='About' component={About} options={{
        headerTitleAlign: "center"
      }} />

      {/* Contact  */}
      <Stack.Screen name='Contact' component={Contact} options={{
        headerTitleAlign: "center"
      }} />
      {/* Course Details  */}
      <Stack.Screen name='CourseDetails' component={CourseDetails} options={{
        headerTitleAlign: "center"
      }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

