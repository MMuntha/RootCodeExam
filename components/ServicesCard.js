import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions} from "react-native";

export default function ServicesCard(props){

    return(
        <View style={styles.card}>
            <View style={styles.uploadedBy}> 
                {/* <Image
                    style={styles.proPic}
                    source={require('../public/pro-pic.jpg')}
                /> */}
               <TouchableOpacity style={styles.uploadedByTextContainer} onPress={props.onPressUploadedBy}> 
                    <Text style={styles.uploadedByText}>{props.name}</Text>
               </TouchableOpacity>

            </View>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: `${props.image}`  }}
                />
            </View>
           
        </View>
    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginBottom: 12,
        marginTop: 12,
        maxHeight: 450,
        backgroundColor: '#E7E7E7',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        width: windowWidth-12,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10
    },
    
    image :{
        width: windowWidth-12,
        height: 250,
        marginLeft: 'auto',
        marginRight: 'auto',
        
        

    },
    uploadedBy: {
        
      marginBottom: 10,
      marginLeft: 10
  
    },
    proPic:{
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10
    },
    mainButton: {
    },
    btnContainer: {
        marginRight: 12,
        marginLeft: 12  
    },
    detailContainer: {
        //flexDirection: 'row',
        marginBottom: 30,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
       // justifyContent: 'space-between'
    },
    modelName: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 20,
        marginBottom: 5,
        textTransform: 'uppercase'
    },
    price: {
       fontSize: 18,
    },
    uploadedByText: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    uploadedByTextContainer: {
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 5,
        alignSelf: 'flex-start',
    }


})