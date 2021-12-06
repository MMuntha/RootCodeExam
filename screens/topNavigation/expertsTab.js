import React, { useState, useEffect } from "react";
import {Text, View, StyleSheet, FlatList} from 'react-native'
import Card from "../../components/Card";

export default function ExpertTab (){

    const [profileList, setProfileList] = useState('')

    useEffect(() => {
        fetch('https://stage-api.serw.io/v1/experts')
          .then((response) => response.json())
          .then((json) => {
              console.log(json)
              setProfileList(json.experts)
          })
          .catch((error) => console.error(error))
          //.finally(() => setLoading(false));
      }, []);


    return(
        <View style={styles.container}>
            <FlatList
            data={profileList}
            keyExtractor={(item) => item.profileId}
            numColumns={2}
            renderItem={({item}) => (
               <Card name={item.name}/>
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
