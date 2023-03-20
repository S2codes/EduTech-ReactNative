import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CoursesData from '../api/CoursesData'

const Courses = ({ navigation }) => {

  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>

          <View>
            <Image style={styles.cardImage} resizeMode="contain" source={item.image} />
          </View>
          <Text style={styles.courseHeader}>{item.title}</Text>
          <Text style={styles.courseDescription}>{item.description}</Text>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnStyle}
              onPress={
                () => navigation.navigate("CourseDetails",
                  {
                    couseId: item.id
                  })
              }>
              <Text style={styles.btnText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View>
      <FlatList data={CoursesData}
        keyExtractor={(item) => item.id}
        renderItem={courseCard}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,

  },
  mainContainer: {
    paddingHorizontal: 10,
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
    marginVertical: 20
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
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    fontSize: 18,
    color: "#eee",
    textTransform: "capitalize"
  }


})

export default Courses
