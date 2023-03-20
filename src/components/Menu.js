import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Home")}>
                {/* <Text>Course</Text> */}
                <Image style={styles.icon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/1659/1659146.png" }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Course")}>
                <Image style={styles.icon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/4625/4625442.png" }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("About")}>
                <Image style={styles.icon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/6488/6488587.png" }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Contact")}>
                <Image style={styles.icon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/10068/10068206.png" }} />
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    menuContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        // marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 10,
        width: "100%",
        backgroundColor: "#ECF2FF",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
    },
    icon: {
        width: "100%",
        height: 30,
        aspectRatio: 1
    }
})


export default Menu