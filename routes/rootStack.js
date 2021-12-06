import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import BottomTab from './bottomTab';
import DrawerNav from './drawer';
import { CredintialsContext } from '../components/CredintialContext';

const Stack = createNativeStackNavigator();

export default function RootStack(){
    return(
        <CredintialsContext.Consumer>
        {({storedCredintials}) => (
            <NavigationContainer>
            <Stack.Navigator>
                {storedCredintials ? 
                    ( 
                            <Stack.Screen name="BottomTab" component={BottomTab} /> 
                        

                    ) : (
                    
                        <Stack.Screen name="Login" component={Login} />     


                      )   
                }
           
             </Stack.Navigator>
             </NavigationContainer>
            
        )}
    </CredintialsContext.Consumer>
    )
}


{/* <Stack.Screen name="Login" component={Login} />     
<Stack.Screen name="BottomTab" component={BottomTab} />      */}