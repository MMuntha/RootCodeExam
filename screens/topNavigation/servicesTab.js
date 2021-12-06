import React, { useState, useEffect } from "react";
import {Text, View, StyleSheet, FlatList} from 'react-native'
import ServicesCard from "../../components/ServicesCard";

export default function ServiceTab (){

    const [servicesList, setServicesList] = useState('')

    useEffect(() => {
        fetch('https://stage-api.serw.io/v1/services')
          .then((response) => response.json())
          .then((json) => {
              console.log(json)
              setServicesList(json.services  )
          })
          .catch((error) => console.error(error))
          //.finally(() => setLoading(false));
      }, []);


    return(
        <View style={styles.container}>
            <FlatList
            data={servicesList}
            keyExtractor={(item) => item.serviceId}
            numColumns={2}
            renderItem={({item}) => (
               <ServicesCard name={item.serviceName} image={item.image}/>
            )}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
        flexDirection: 'column'
    }
})
