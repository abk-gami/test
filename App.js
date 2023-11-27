import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
// import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}> 
        <Text style={styles.paystack}>PAYSTACK CHECKOUT</Text>
        <Text style={styles.first}>Use one of the payment methods below to pay GHS 1,000 to LyfeAtlas</Text>
        {/* <TouchableOpacity style={styles.first}>Pay with Mobile Money</TouchableOpacity>
        <TouchableOpacity style={styles.first}>Pay with card</TouchableOpacity> */}
      </View>
        {/* <TouchableOpacity>Cancel Payment</TouchableOpacity> */}
        {/* <View>Secured by <Text>paystack</Text></View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  top:{
    backgroundColor: '#c8c5c5',
    paddingLeft: 6,
    // paddingTop: 4,
  },
  paystack:{
    color: '#0dde0d'
  },
  first:{
    borderBottomWidth: 0.3,
    borderBottomColor:'#a49d9d',
    padding: 5,
  }
});
