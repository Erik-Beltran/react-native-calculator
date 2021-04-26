import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
  empty
}
export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [operacion, setOperacion] = useState('');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
    setOperacion('');
  };

  const concatNumero = (numeroTexto: string) => {
    //no aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      }

      // otro cero despues del punto
      else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      }

      //diferente de cero sin punto
      else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      }

      //evitar 000000.0
      else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numeroTemp = numero;

    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substr(1);
    }

    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const cambiarNumberoAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else if (Number(numero) === 0) {
      setNumeroAnterior(numeroAnterior);
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnSumar = () => {
    cambiarNumberoAnterior();
    setOperacion('+');
    ultimaOperacion.current = Operadores.sumar;
  };

  const btnRestar = () => {
    cambiarNumberoAnterior();
    setOperacion('-');
    ultimaOperacion.current = Operadores.restar;
  };
  const btnMultiplicar = () => {
    cambiarNumberoAnterior();
    setOperacion('x');
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnDividir = () => {
    cambiarNumberoAnterior();
    setOperacion('/');
    ultimaOperacion.current = Operadores.dividir;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        ultimaOperacion.current=Operadores.empty;
        break;

      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        ultimaOperacion.current=Operadores.empty;
        break;

      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        ultimaOperacion.current=Operadores.empty;
        break;

      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        ultimaOperacion.current=Operadores.empty;
        break;

      default:
        break;
    }
    setNumeroAnterior('0');
    setOperacion('');
  };

  return {
    numeroAnterior,
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
    calcular,
  };
};
