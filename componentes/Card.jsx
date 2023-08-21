import { Text, View } from "react-native"
import React From 'react'

const Card = => {
    return (
        <>
        <View style={styles.card}>
        <Text style={styles.titulo}>Hello word</Text>
        <StatusBar style="auto" />
        <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
        <Text>Isso é um parágrafo</Text>
        <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
      </View>
        </>
    )
}
export default Card

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card:{
      borderColor:'blue',
      borderStyle:'solid',
      borderWidth:2,
    },
    titulo:{
      color:'white',
      fontSize: 30,
      borderColor:'blue',
      borderStyle:'dotted',
      borderWidth:5,
      padding:20, 
      marginBottom:20,
      borderColor:'blue',
      borderStyle:'solid',
      borderWidth:2,
      textAlign:'center',
      backgroundColor:'red'
    };