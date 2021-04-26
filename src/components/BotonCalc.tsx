import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {style} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  onPress: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  texto,
  color = '#2D2D2D',
  ancho = false,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(texto)}
      style={{...style.boton, backgroundColor: color, width: ancho ? 180 : 80}}>
      <Text style={style.botonText}>{texto}</Text>
    </TouchableOpacity>
  );
};
