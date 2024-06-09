import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react';
const { width, height } = Dimensions.get('window');
import images from './Assets/ImgIndex';


const WTscreens = ({ navigation }) => {
  return (
    <>

      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >
          <View style={{ width, height }}>
            <Image source={images.One} style={styles.imageStyle} />
            {/* <View style={styles.wrapper}>
              <Text style={styles.header}>Nature Imitates Art</Text>
              <Text style={styles.paragraph}>....something like that</Text>
            </View> */}
          </View>
          <View style={{ width, height }}>
            <Image
              source={images.Two}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>High quality Art work</Text>
              <Text style={styles.paragraph}>... for a fraction of the price</Text>
            </View>
          </View>
          
          <View style={{ width, height }}>
            <ImageBackground 
            source={images.Click}
            style={styles.imageStyle}
            >
              <View style={{justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,}}>
              <Text style={styles.header}> Welcome To Jeevank</Text>
              <Text style={styles.paragraph}>Want to know about yourself</Text>
              <TouchableOpacity
              style={{
                alignItems: 'center',
                padding: 10,
                fontSize: 16,
                backgroundColor: "#FF8B45",
                borderRadius: 12,
                
                marginTop: 50,
                width:"80%",
              }}

            //   disabled={!isValid}
               onPress={()=>navigation.navigate('Calc')}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  margin: 15,
                  textAlign: 'center',
    
                }}> Numerology Calculator </Text>

                <Text style={{fontSize: 18,
                  color:"white",}}>
                Get all the calculations with your Name and Date Of Birth
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
              style={{
                alignItems: 'center',
                padding: 10,
                fontSize: 16,
                backgroundColor: "#D65BD6",
                borderRadius: 12,
                
                marginTop: 50,
                width:"80%",
              }}

            //   disabled={!isValid}
               onPress={()=>navigation.navigate('Calc')}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  margin: 15,
                  textAlign: 'center',
    
                }}> Join Community </Text>

                <Text style={{fontSize: 18,
                  color:"white",}}>
                Be a part of community and know about the no. governing your life and future
                </Text>
              </TouchableOpacity>
            </View>
              
            </ImageBackground>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </> 
  )
}

const styles = StyleSheet.create({
    imageStyle: {
      height: height,
      width: '100%',
    },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    paragraph: {
      fontSize: 17,
    },
  });

export default WTscreens;