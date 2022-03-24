import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./style";

export default function App() {
  const [randomNumber, setRandomNumver] = useState(0);

  function getNumberRandom() {
    setRandomNumver(Math.floor(Math.random() * 1000));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.randomNumber}>{randomNumber}</Text>
      <TouchableOpacity onPress={getNumberRandom}>
        <Text style={styles.button}>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
