import { StyleSheet, Text, View, Button, Dimensions, ImageBackground } from 'react-native';
import React from 'react';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <View>
                <ImageBackground source={require('../assets/books.jpg')} style={styles.image} >
                  <Text style={styles.text}>Welcome my First React-Native App</Text>
              </ImageBackground>
            </View>
            <View>
                  <Button style={styles.button} title="Get Started" onPress={() => navigation.navigate("List")} />

            </View> */}
            <ImageBackground source={require('../assets/Travel.png')} style={{ width: '100%', height: '100%' }}>
                <Text style={styles.text}>Welcome my First React-Native App</Text>
                <View><Button style={styles.button}  title="Get Started" onPress={() => navigation.navigate("List")} /></View>
            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: screenHeight,
        width: screenWidth,

    },
    text: {
        color: 'white',
        justifyContent:'center',
        alignItems: 'center',
        fontSize: 20,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },

    button: {
         position:'absolute',
         bottom:30,
         width: '100%',
         flexDirection:'row',
         justifyContent:"center",

    },
})