import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './routes/rootStack';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredintialsContext } from './components/CredintialContext';

export default function App() {

  const [appReady, setAppReady] = useState(false);
  const [storedCredintials, setStoredCredintials] = useState("")

  const checkLoginCredintials = async() => {
    try{
        const credintial = await AsyncStorage.getItem('rootCode')
        if(credintial !== null){
          setStoredCredintials(JSON.parse(credintial))
        }
        else{
          setStoredCredintials(null)
        }
    }
    catch(e){
      console.log(e)
    }
  }



  if(!appReady){
    return(
      <AppLoading
      startAsync={checkLoginCredintials}
      onFinish={() => {setAppReady(true)}}
      onError={console.warn} 
      />
    )
 }

 return (
 
 <CredintialsContext.Provider value={{storedCredintials, setStoredCredintials}}>
         <RootStack/>
       
 </CredintialsContext.Provider>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
