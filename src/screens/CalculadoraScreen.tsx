import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import {style} from '../theme/appTheme';


export const CalculadoraScreen = () => {
  
  const {numeroAnterior,
    operacion,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    concatNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,}= useCalculadora()
    
  return (
    <View style={style.calculadoraContainer}>
      <Text style={style.resultadoPequeno}>{`${numeroAnterior} ${operacion}`}</Text>
      <Text style={style.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={style.fila}>
        <BotonCalc texto="C" color="#9B9B9B" onPress={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" onPress={positivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" onPress={btnDelete} />
        <BotonCalc texto="/" color="#FF9427" onPress={btnDividir} />
      </View>
      <View style={style.fila}>
        <BotonCalc texto="7" onPress={concatNumero} />
        <BotonCalc texto="8" onPress={concatNumero} />
        <BotonCalc texto="9" onPress={concatNumero} />
        <BotonCalc texto="x" color="#FF9427" onPress={btnMultiplicar} />
      </View>
      <View style={style.fila}>
        <BotonCalc texto="4" onPress={concatNumero} />
        <BotonCalc texto="5" onPress={concatNumero} />
        <BotonCalc texto="6" onPress={concatNumero} />
        <BotonCalc texto="-" color="#FF9427" onPress={btnRestar} />
      </View>
      <View style={style.fila}>
        <BotonCalc texto="1" onPress={concatNumero} />
        <BotonCalc texto="2" onPress={concatNumero} />
        <BotonCalc texto="3" onPress={concatNumero} />
        <BotonCalc texto="+" color="#FF9427" onPress={btnSumar} />
      </View>
      <View style={style.fila}>
        <BotonCalc texto="0" ancho onPress={concatNumero} />
        <BotonCalc texto="." onPress={concatNumero} />
        <BotonCalc texto="=" color="#FF9427" onPress={calcular} />
      </View>
    </View>
  );
};
