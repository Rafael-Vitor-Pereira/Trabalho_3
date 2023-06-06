import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import React, { useState } from 'react';

const Calculadora = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');

  function Calcular() {
    if (a == '' || b == '' || c == '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
    } else {
      setX1((-b + Math.sqrt((b ** 2) - (4 * a * c))) / 2);
      setX2((-b - Math.sqrt((b ** 2) - (4 * a * c))) / 2);
    }
  }

  function Limpar() {
    setA('');
    setB('');
    setC('');
    setX1('');
    setX2('');
  }

  return (
    <>
      <Text style={styles.titulo}>Calculadora de fórmula de Bhaskara</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor de A"
        keyboardType="numeric"
        value={a}
        onChangeText={(text) => setA(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor de B"
        keyboardType="numeric"
        value={b}
        onChangeText={(text) => setB(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor de C"
        keyboardType="numeric"
        value={c}
        onChangeText={(text) => {setC(text)}}
      />

      <View style={styles.areabtn}>
        <TouchableOpacity style={styles.botao} onPress={() => {Calcular()}}>
          <Text style={styles.textobtn}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => Limpar()}>
          <Text style={styles.textobtn}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultado}>Resultado:</Text>
      <Text style={styles.resultado}>X1 = {x1}</Text>
      <Text style={styles.resultado}>X2 = {x2}</Text>
    </>
  );
};

export default Calculadora;

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    margin: 10,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 50,
    margin: 10,
    padding: 10,
  },
  areabtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: 'lightyellow',
    width: '40%',
    height: 40,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  textobtn: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultado: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5,
  },
});
