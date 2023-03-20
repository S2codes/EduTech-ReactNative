import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import Menu from '../components/Menu'

const Home = (props) => {
    const description ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic, consequuntur eveniet corporis dolorum magnam dicta quas"
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
        <View style={styles.homeTop}>
          <Image resizeMode='contain' style={styles.headerImg} source={require('../../assets/Webinar-pana.png')} />
          <Text style={styles.mainHeader}>Welcome To EduTech</Text>
          <Text style={[styles.mainHeader, {
            fontSize: 33,
            color: "#4c5dab"
          }]}>
            {/* EduTech */}
            {props.channelName}
            </Text>

          <Text style={styles.para}>{description}</Text>
        </View>
        </ScrollView>
        <View>
            <Menu/>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      display: "flex",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: "space-evenly",
      // paddingHorizontal: 10
    },
    homeTop: {
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      paddingHorizontal: 5
    },
  
    headerImg: {
      height: undefined,
      width:"100%",
      aspectRatio: 1,
      display: "flex",
    //   marginTop: 10,
      borderRadius: 20
    },
    mainHeader: {
      fontSize: 25,
      color: "#344055",
      textTransform: "uppercase",
    },
    para: {
      fontSize: 19,
      color: "#7d7d7d",
      marginTop: 10,
      textAlign: "center",
      paddingBottom: 50,
      lineHeight: 25
    }
  
  
  });


export default Home
