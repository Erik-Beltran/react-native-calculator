import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom:10
  },
  resultadoPequeno: {
    fontSize: 30,
    textAlign: 'right',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
  boton: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
  },
});
