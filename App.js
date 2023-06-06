import Calculadora from "./src/Components/calculadora";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Calculadora />
      </SafeAreaView>
    </SafeAreaProvider> 
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'darkblue'
  }
})