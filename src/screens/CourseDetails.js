import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import CoursesData from '../api/CoursesData'


const CourseDetails = ({navigation, route}) => {
    const couseId =route.params.couseId
    const selectedCourseData = CoursesData.find(
        (element) => {return couseId === element.id}
    )
  return (
    <ScrollView>
    <View style={styles.mainContainer}>
    <View style={styles.courseContainer}>

      <View>
        <Image style={styles.cardImage} resizeMode="contain" source={selectedCourseData.image} />
      </View>
      <Text style={styles.courseHeader}>{selectedCourseData.title}</Text>
      <Text style={styles.courseDescription}>{selectedCourseData.description}</Text>
      <Text style={styles.courseDescription}>{selectedCourseData.course1}</Text>
      <Text style={styles.courseDescription}>{selectedCourseData.course2}</Text>
      <Text style={styles.courseDescription}>{selectedCourseData.course3}</Text>

      <View style={styles.btnContainer}>
        <Text style={styles.price}>{selectedCourseData.price} ₹</Text>
        <TouchableOpacity style={styles.btnStyle}
          onPress={
            () => navigation.navigate("Course")
          }>
          <Text style={styles.btnText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
    cardImage: {
      width: "100%",
      height: undefined,
      aspectRatio: 1,
  
    },
    mainContainer: {
      paddingHorizontal: 0,
    },
    courseContainer: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      backgroundColor: "rgba(255, 255,255,0.90)",
      textAlign: "center",
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
    //   marginVertical: 20
        marginBottom: 10
    },
    courseHeader: {
      fontSize: 22,
      color: "#344055",
      textTransform: "uppercase",
      // fontWeight: 500,
      paddingTop: 5,
      paddingBottom: 10,
      textAlign: "center"
    },
    courseDescription: {
      textAlign: "center",
      paddingBottom: 15,
      lineHeight: 20,
      fontSize: 16,
      color: "#7d7d7d"
    },
    btnContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      paddingBottom: 17
    },
    btnStyle: {
      backgroundColor: "#809fff",
    //   borderRadius: 5,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 30,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    price: {
      backgroundColor: "#129fff",
    //   borderRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 30,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#eee",
    //   marginRight: 15,
      fontSize: 18
    },
    btnText: {
      fontSize: 18,
      color: "#eee",
      textTransform: "capitalize"
    }
  
  
  })

export default CourseDetails
