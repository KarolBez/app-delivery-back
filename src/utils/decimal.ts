import Decimal from 'decimal.js';

export const converterDecimal = (
  valor: string | number,
  decimalPlaces: number = 2,
) => {
  return new Decimal(valor)
    .toDecimalPlaces(decimalPlaces, Decimal.ROUND_UP)
    .toString();
};

export const formatarDinheiro = (valor: string | number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(converterDecimal(valor)));
};


export const stringParaNumber = (
  valor: string = '0',
  decimalPlaces: number = 2,
): number => {
  let numero = Number(valor.replace(/\D/g, ''));
  return numero / Math.pow(10, decimalPlaces);
};