import React, { useState } from "react";
import { Control, Controller, FieldErrors, FieldValues, UseFormRegister, UseFormSetError, useController } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styled } from "nativewind";
import SelectDropdown from "react-native-select-dropdown";
import { typeSelectOptions } from "../../types/select.d";
import { DateTimePickerAndroid, DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { formatarData } from "../../utils/data";
import CheckBox from 'react-native-check-box'
import { converterDecimal, formatarDinheiro, stringParaNumber } from "../../utils/decimal";

type PropsField = {
    children?: React.ReactNode;
    className?: string;
    label?: string;
    opcional?: boolean;
}

type PropsInput = {
    name: string;
    control?: Control<any>;
    errorMensage?: string;
    password?: boolean;
    errors?: FieldErrors<FieldValues>;
    placeholder?: string;
    className?: string;
    icon?: string | React.JSX.Element;
    positionIcon?: "right" | "left";
    options?: Array<typeSelectOptions> | null;
    defaultValue?: null | string | typeSelectOptions;
    labelOpcaoPadrao?: string;
    semOpcaoNula?: boolean;
    onInputChange?: Function;
    min?: number | Date | String | null;
    max?: number | Date | String | null;
    rows?: number;
    typeKeyboard?: "default" | "numeric" | "email-address" | "phone-pad" | "url";
    disabled?: boolean;
}

const StyledView = styled(View);
const StyledText = styled(Text);

type PropsForm = {
    children: React.ReactNode;
    className?: string;
}

export default function Formulario({ children, className }: PropsForm) {

    return (
        <StyledView className={`w-full ${className}`}>
            {children}
        </StyledView>
    )
}

Formulario.Field = ({ label, opcional, children }: PropsField) => {
    return (
        <StyledView className="my-1">
            {!!label && <Text className="font-bold text-gray-500 px-1 mb-1 text-sm">
                {label} {!opcional && <Text className="font-bold text-red-500 mb-1">*</Text>}
            </Text>}

            {children}
        </StyledView>
    )
}

Formulario.InputText = ({ password, className, icon, control, opcional, typeKeyboard, positionIcon, name, disabled, placeholder, label }: PropsInput & PropsField) => {
    if (password == null)
        password = false

    if (password == null)
        disabled = false

    const [viewPassword, setViewPassword] = useState<boolean>(false);

    return (
        <Formulario.Field className={className} label={label} opcional={opcional}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <StyledView className="flex flex-row items-center text-gray-400 bg-white border border-slate-300/80 rounded-xl px-3">
                        {positionIcon == "left" && (typeof icon == "string" ? <Icon name={icon} size={18} /> : icon)}
                        <TextInput
                            placeholder={placeholder}
                            placeholderTextColor={"rgb(156, 163, 175)"}
                            onBlur={onBlur}
                            onChangeText={value => {
                                onChange(value)
                            }}
                            editable={!disabled}
                            value={value}
                            secureTextEntry={(password && !viewPassword)}
                            className={`${icon && (positionIcon == "right" ? "mr-1" : "ml-1")} h-10 px-1 flex-1`}
                            keyboardType={typeKeyboard || "default"}
                        />

                        {
                            password && <Pressable
                                onPress={() => setViewPassword(!viewPassword)}
                            >
                                <Icon name={!viewPassword ? "eye" : "eye-slash"} size={18} />
                            </Pressable>
                        }

                        {positionIcon == "right" && (typeof icon == "string" ? <Icon name={icon} size={18} /> : icon)}
                    </StyledView>
                )}
                name={name}
            />
        </Formulario.Field>

    )
}

Formulario.InputSelect = ({ control, name, options, className, opcional, label, labelOpcaoPadrao, semOpcaoNula, defaultValue, placeholder, disabled, onInputChange }: PropsInput & PropsField) => {
    const { field: { value: SelectValue, onChange: onChangeSelect } } = useController({ name: name, control, defaultValue: defaultValue });
    const { field: { onChange: onChangeSelectId } } = useController({ name: name + "Id", control, defaultValue: (defaultValue as typeSelectOptions)?.value });

    const getOpcoesSelect = (): Array<typeSelectOptions> => {
        const opcoesSelect = [{ value: null, label: labelOpcaoPadrao || "" }]

        if (!options)
            return opcoesSelect;

        if (!labelOpcaoPadrao || semOpcaoNula)
            return options;

        return opcoesSelect.concat(options);
    }

    return (
        <Formulario.Field className={className} label={label} opcional={opcional}>
            <SelectDropdown
                data={getOpcoesSelect()}
                onSelect={(option: typeSelectOptions) => {
                    onChangeSelect(option || option)
                    onChangeSelectId(option.value || option)
                }}
                defaultValue={SelectValue}
                defaultButtonText={SelectValue?.value ? SelectValue.label : placeholder || "Selecione"}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem?.label
                }}
                rowTextForSelection={(item, index) => {
                    return item?.label
                }}
                disabled={disabled}
                onBlur={() => onInputChange && onInputChange("")}
                buttonStyle={{
                    width: '100%',
                    height: 40,
                    borderWidth: 1,
                    borderColor: "rgb(226, 232, 240)",
                    borderRadius: 8,
                }}
                buttonTextStyle={{
                    textAlign: "left",
                    fontSize: 14,
                    fontWeight: "400",
                }}
                renderDropdownIcon={(isOpen) => {
                    return !disabled ? <Icon name={isOpen ? "chevron-up" : "chevron-down"} size={18} /> : null
                }}
                rowStyle={{
                    backgroundColor: "white",
                }}
                rowTextStyle={{ textAlign: "left" }}
                dropdownStyle={{
                    borderRadius: 8,
                }}
                search
                onChangeSearchInputText={(value) => {
                    onInputChange && onInputChange(value)
                }}
                searchPlaceHolder="Pesquisar"
            />
        </Formulario.Field>
    )
}

Formulario.InputDate = ({ control, name, className, label, opcional, disabled }: PropsInput & PropsField) => {
    const { field: { value, onChange } } = useController({ control: control, name: name })

    const onChangeDate = (event: DateTimePickerEvent, date?: Date | undefined) => {
        if (event.type == "set")
            onChange(date)
    }

    const modeDate = () => {
        DateTimePickerAndroid.open({
            value: value || new Date(),
            onChange: onChangeDate,
            display: 'default',
            mode: "date",
            is24Hour: true
        })
    }

    const showDate = () => {
        modeDate();
    }

    return (
        <Formulario.Field className={className} label={label} opcional={opcional}>
            <TextInput
                className="h-10 rounded-xl mt-1 px-3 bg-slate-100 border border-slate-300/80"
                onFocus={showDate} showSoftInputOnFocus={false}
                value={value ? formatarData(value, "data") : ""}
                keyboardType="numeric"
                editable={!disabled}
            />
        </Formulario.Field>
    )
}

Formulario.InputTextArea = ({ className, label, opcional, control, placeholder, disabled, password, name, rows }: PropsInput & PropsField) => {

    return (
        <Formulario.Field className={className} label={label} opcional={opcional}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <StyledView className="flex flex-row items-center">
                        <TextInput
                            placeholder={placeholder}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            editable={!disabled}
                            textAlignVertical="top"
                            secureTextEntry={password}
                            className={`rounded-xl px-3 bg-slate-100 border border-slate-300/80 flex-1`}
                            multiline={true}
                            numberOfLines={rows || 4}
                        />
                    </StyledView>
                )}
                name={name}
            />
        </Formulario.Field>

    )
}

Formulario.InputCheckbox = ({ control, label, disabled, name }: PropsInput & PropsField) => {

    return (
        <>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <CheckBox
                            onClick={() => onChange(!value)}
                            isChecked={value}
                            rightText={label}
                            disabled={disabled}
                            rightTextStyle={{ marginLeft: 4, fontSize: 16, fontWeight: "400" }}
                            style={{ borderColor: "gray", height: 20, paddingVertical: 4 }}
                            checkBoxColor="green"
                            uncheckedCheckBoxColor="gray"
                        />
                    </View>
                )}
                name={name}
            />
        </>
    )
}

Formulario.InputDinheiro = ({ className, label, opcional, control, positionIcon, icon, placeholder, disabled, password, name }: PropsInput & PropsField) => {

    return (
        <Formulario.Field className={className} label={label} opcional={opcional}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <StyledView className="flex flex-row items-center">
                        {positionIcon == "left" && <Icon name={(icon as string) || ""} size={18} />}
                        <TextInput
                            placeholder={placeholder}
                            onBlur={onBlur}
                            editable={!disabled}
                            onChangeText={value => onChange(stringParaNumber(value))}
                            value={formatarDinheiro(converterDecimal(value || 0))}
                            secureTextEntry={password}
                            className={`${icon && (positionIcon == "right" ? "mr-2" : "ml-2")} h-10 rounded-xl px-3 bg-slate-100 border border-slate-300/80 flex-1`}
                            keyboardType="numeric"
                        />
                        {positionIcon == "right" && <Icon name={(icon as string) || ""} size={18} />}
                    </StyledView>
                )}
                name={name}
            />
        </Formulario.Field>

    )
}