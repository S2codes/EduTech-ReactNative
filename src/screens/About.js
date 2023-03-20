import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>BeetaBie</Text>
        <Text style={styles.para}>I am Self-Taught Developer </Text>

        <View>
          <Image style={styles.profile} resizeMode="contain" source={require("../../assets/avatar.jpg")} />
        </View>

        <View style={styles.aboutSec}>
          <Text style={styles.aboutTitle}>About Me</Text>
          <Text style={styles.para}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem pariatur, eum quasi nisi minima, id sapiente odio enim dignissimos expedita qui numquam! Praesentium soluta laborum sequi vero maxime voluptatibus libero?</Text>
        </View>

        <Text style={styles.mainHeader}>Follow Me on Social Network</Text>
        <View style={styles.menuContainer}>

          <TouchableOpacity style={styles.btnStyle} onPress={() => Linking.openURL("https://www.instagram.com/beetabie/")}>
            <Image style={styles.iconStyle} source={{ uri: "https://cdn-icons-png.flaticon.com/512/4138/4138124.png" }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={() => Linking.openURL("https://www.youtube.com/@beetabie")}>
            <Image style={styles.iconStyle} source={{ uri: "https://cdn-icons-png.flaticon.com/512/3670/3670147.png" }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={() => Linking.openURL("https://www.linkedin.com/in/subhankar-sarkar-4898271b7/")}>
            <Image style={styles.iconStyle} source={{ uri: "https://cdn-icons-png.flaticon.com/512/145/145807.png" }} />
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  profile: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10
  },
  para: {
    fontSize: 18,
    color: "#aaa",
    paddingBottom: 30,
    textAlign: "center"
  },
  aboutSec: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutTitle: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
})

export default About
