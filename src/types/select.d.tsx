import { ReactNode } from 'react';

export type typeSelect = {
    className?: string;
    disabled?: boolean;
    name?: string;
    label?: string;
    opcional?: boolean;
    indepedente?: boolean;
    labelOpcaoPadrao?: string;
    placeholder?: string;
    isClearable?: boolean;
    isFiltro?: boolean;
    subTitulo?: string;
    modalNovo?: boolean;
    semOpcaoNula?: boolean;
    temBotao?: boolean;
    onClickBotao?: Function;
    disabledBotao?: boolean;
    iconeBotao?: ReactNode;
}

export type typeSelectResponse = {
    id: number;
    descricao: string;
}

export type typeSelectOptions<ValueType = any> = {
    value: ValueType;
    label: string;
}

export type filtrosSelect = {
    pesquisa?: string;
}