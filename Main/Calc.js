import React, { useState, useEffect } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import { Formik } from 'formik';
import * as yup from 'yup';
import images from './Assets/ImgIndex';



const Calculate = ({ navigation }) => {

  const [name, setname] = useState("");
  const [dob, setdob] = useState("");


  const onSubmit = {
    // SaveDOB(name,dob)
    // console.log("Data from app"+name+dob);
  }

  const Mulyank = (dob) => {
    const numString = dob.toString();
    
    if (numString.length == 8) {
       // Extract the first two digits and convert them back to numbers for addition
    const firstDigit = parseInt(numString.charAt(0));
    const secondDigit = parseInt(numString.charAt(1));
  
    // Calculate the sum of the first two digits
    const sum = firstDigit + secondDigit;
  
    return sum;
      
    }else return "Enter DOB in described format mmDDyyyy";
  }

  function Bhagyank(number) {
    let sum = 0;
    // Convert the number to a string to easily access its digits
    const numString = number.toString();
    // Calculate the initial sum of digits
    for (let i = 0; i < numString.length; i++) {
      sum += parseInt(numString.charAt(i));
    }
    // Keep adding digits until the sum becomes a single digit
    while (sum > 9) {
      let tempSum = 0;
      const sumString = sum.toString();
      for (let j = 0; j < sumString.length; j++) {
        tempSum += parseInt(sumString.charAt(j));
      }
      sum = tempSum;
    }
  
    return sum;
  }
  function Jeevank(number) {
    let sum = 0;
    // Convert the number to a string to easily access its digits
    const numString = number.toString();
    // Calculate the initial sum of digits
    for (let i = 0; i < 4; i++) {
      sum += parseInt(numString.charAt(i));
    }
    // Keep adding digits until the sum becomes a single digit
    while (sum > 9) {
      let tempSum = 0;
      const sumString = sum.toString();
      for (let j = 0; j < sumString.length; j++) {
        tempSum += parseInt(sumString.charAt(j));
      }
      sum = tempSum;
    }
  
    return sum;
  }

  const Samanank=()=>{
    let sum = 0;
    sum = Math.abs(Bhagyank(dob)-Mulyank(dob));
    return sum;
  }

  const rowOne=(number)=> {
    const numString = number.toString();
    let result = '';
  
    const numOf4s = numString.split('4').length - 1;
    const numOf9s = numString.split('9').length - 1;
    const numOf2s = numString.split('2').length - 1;

    result += numOf4s > 0 ? '4'.repeat(numOf4s) : ' # ';
    result += numOf9s > 0 ? '9'.repeat(numOf9s): ' # ';
    result += numOf2s > 0 ? '2'.repeat(numOf2s) : ' # ';
  
    return result || 'Not found';
  }
  const rowTwo=(number) =>{
    const numString = number.toString();
    let result = '';
  
    const numOf4s = numString.split('3').length - 1;
    const numOf9s = numString.split('5').length - 1;
    const numOf2s = numString.split('7').length - 1;

    result += numOf4s > 0 ? '3'.repeat(numOf4s) : ' # ';
    result += numOf9s > 0 ? '5'.repeat(numOf9s): ' # ';
    result += numOf2s > 0 ? '7'.repeat(numOf2s) : ' # ';
  
    return result || 'Not found';
  } 
  const rowThree=(number) =>{
    const numString = number.toString();
    let result = '';
  
    const numOf4s = numString.split('8').length - 1;
    const numOf9s = numString.split('1').length - 1;
    const numOf2s = numString.split('6').length - 1;

    result += numOf4s > 0 ? '8'.repeat(numOf4s) : ' # ';
    result += numOf9s > 0 ? '1'.repeat(numOf9s): ' # ';
    result += numOf2s > 0 ? '6'.repeat(numOf2s) : ' # ';
  
    return result || 'Not found';
  }

  const Naamank=(nameString)=> {
    const words = nameString.split(' ');
  
    const letterValues = {
      A: 1, I: 1, J: 1, Q: 1, Y: 1,
      B: 2, K: 2, R: 2,
      C: 3, G: 3, L: 3, S: 3,
      D: 4, M: 4, T: 4,
      E: 5, H: 5, N: 5,
      U: 6, V: 6, W: 6, X: 6,
      O: 7, Z: 7,
      P: 8, F: 8,
    };
  
    let totalSum = 0;
  
    words.forEach(word => {
      for (let i = 0; i < word.length; i++) {
        const letter = word[i].toUpperCase();
        if (letterValues.hasOwnProperty(letter)) {
          totalSum += letterValues[letter];
        }
      }
    });
  
    return totalSum;
  }

  const Calculate=(name,dob) =>{
 console.log("button pressed and data send name:"+ name," DOB : " + dob)
  }
  
  

  return (
    <View
      style={{
        flex: 1,
        fontSize: 16,
        backgroundColor: "#FFFFFF",

      }}
    >
         {/* Header section */}
         <View
            style={{
                backgroundColor: "#7BCEBC",
                alignItems: 'center',
                flexDirection:'row',
                justifyContent:'space-between',
                paddingVertical: 18,
            }}
        >
            <View 
                style={{ flexDirection: 'row', alignItems: 'center', width:'80%'}}
                >
                    <TouchableOpacity
                        style={{
                            fontSize: 10,
                            borderRadius: 40,
                            height: 40,
                            width: 40,
                            backgroundColor: "Green",
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                        }}
                        onPress={() => navigation.navigate('Walk')}
                    >
                        <Image source={images.backBt} />
                    </TouchableOpacity>

                    

                    <View style={{flex:1,alignItems: 'center',}}>
                        <Text style={{ fontSize: 24, color: "#000000", fontWeight: 'bold',textAlign: 'center' }}>Numerology Calculator</Text>
                        </View>
            </View>



        </View>

         {/* Header ends here */}

      <View
        style={{
          justifyContent: 'space-around',
          padding: 18,
          alignContent: 'space-between',
        }}>
        <Text>Enter your name as per documents</Text>
        <TextInput
          value={name}
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            backgroundColor: "#DFDFE8",
            borderRadius: 12,
            marginBottom: 10,
          }}
          onChangeText={setname}
          // onBlur={() => setFieldTouched('name')}
          placeholder="Full Name"
        />

        <Text>Enter your DOB in MM DD YYYY</Text>
        <TextInput
          value={dob}
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            backgroundColor: "#DFDFE8",
            borderRadius: 12,
            marginBottom: 10,
          }}
          onChangeText={setdob}
          // onBlur={() => setFieldTouched('dob')}
          placeholder="DDMMYYYY"
        />

<TouchableOpacity
              style={{
                alignItems: 'center',
                padding: 5,
                fontSize: 12,
                backgroundColor: "#FF8B45",
                borderRadius: 12,
                width:"100%",
              }}

               onPress={()=>navigation.navigate('Walk')}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  margin: 10,
                  textAlign: 'center',
    
                }}> Join The Community </Text>

              </TouchableOpacity>
              {/* C7C6F3 */}
      </View>

      {/* Results will be shown on below view */}
      <ScrollView style={styles.mainContainer}>
        {/* <TouchableOpacity
          // onPress={nav}
        > */}
          <View style={styles.courseContainer}>
            <Text style={styles.mainHeader}>Mulyank hints the direction:   {Mulyank(dob)}</Text>
          </View>

          <View style={styles.courseContainer}>
            <Text style={styles.mainHeader}>Bhagyank hints the tendencies: {Bhagyank(dob)}</Text>
          </View>

          <View style={styles.courseContainer}>
            <Text style={styles.mainHeader}>Jeevank signifies the duality : {Jeevank(dob)}</Text>
          </View>

          

          <View style={styles.courseContainer}>
            <Text style={styles.mainHeader}>Naamank show effect of name: {Naamank(name)}</Text>
          </View>

          <View style={styles.courseContainer}>
            <Text style={styles.mainHeader}>Samanank gives the connection: {Samanank(dob)}</Text>
          </View>

          <View style={styles.courseContainer}>
            <Text style={styles.mainHeader}>Mentality   {rowOne(dob)}</Text>
            <Text style={styles.mainHeader}>Emotional  {rowTwo(dob)}</Text>
            <Text style={styles.mainHeader}>Practical  {rowThree(dob)}</Text>
          </View>

        {/* </TouchableOpacity> */}

      </ScrollView>

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
    //(item.id == 1)? AppColors.BUTTON_BLUE_TWO:AppColors.YELLOW
    backgroundColor: "#C7C6F3",
    borderRadius: 18,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    padding: 10,
    margin:5,
  },
  mainHeader: {
    fontSize: 18,
    color: "#000000",
    textTransform: "uppercase",
    fontWeight: 'bold',
    paddingBottom: 10,
    //   fontFamily: "Nunito_700Bold",
  },
  description: {
    textAlign: "left",
    fontFamily: "WorkSans_400Regular",
    fontSize: 16,
    color: "White",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "WorkSans_400Regular",
    textTransform: "capitalize",
  },
});

export default Calculate;