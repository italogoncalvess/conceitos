import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <ScrollView style={{ marginTop: 30 }}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Hello world</Text>
        <Text style={styles.paragrafo}>Isto é um parágrafo.</Text>
        <Text>Isto é um parágrafo.</Text>
        <Text style={styles.paragrafo}>Isto é um parágrafo.</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  card: {
    borderColor: 'blue',
    borderStyle: 'solid',
    borderwidth: 2,
  },

  titulo: {
    color: 'red',
    fontSize: 30,
    padding: 10,
    marginBotton: 20,
    borderBottonColor: 'red',
    borderBottonStyle: 'solid',
    borderBottonWidth: 2,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  paragrafo: {
    fontSize: 20
  
});
