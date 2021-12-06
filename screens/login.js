import React from 'react';
import {Text, View, TextInput, Button, StyleSheet, Dimensions} from 'react-native';
import MainButton from '../components/MainButton';
import { Formik } from 'formik';
import * as yup from 'yup'

let schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
  });

export default function Login ({navigation}){
    return(
        <View style={styles.container}>

        <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
           
            fetch('https://stage-api.serw.io/v1/auth/local/login', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: values.email,
                  password: values.password
                })
              })
              .then((response) => response.json())
              .then((json) => {

                console.log(json)
                navigation.navigate('BottomTab')

              })
              .catch((error) => {
                  console.log(error)
              })
              console.log(values.email)
              console.log(values.password)
        }}
        validationSchema={schema}
      >
        {(props) => (
            <View>
                <TextInput
              onChangeText={props.handleChange('email')}
              
              value={props.values.email}
              style={styles.textInput}
            />
            <TextInput
              onChangeText={props.handleChange('password')}
              
              value={props.values.password}
              style={styles.textInput}
            />
            <MainButton onPress={props.handleSubmit} text="Login"/>
            </View>
        )}
      </Formik>
    </View>
    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        width: windowWidth - 20,
        height: 30,
        padding: 5,
        marginBottom: 10

    }
})