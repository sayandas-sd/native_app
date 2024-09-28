import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from "react-native";

interface CustomButtonProps {
    title: string;
    handlepress: () => void;
    containerStyles?: string; 
    textStyles?: StyleProp<TextStyle>; 
    isLoading?: boolean;
  }


export default function CustomButton({title, handlepress, containerStyles, textStyles, isLoading}: CustomButtonProps) {
    return (
        <TouchableOpacity 
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center 
                ${containerStyles} $ {isLoading ? 'opacity-50' : ''}`}
            onPress={handlepress}
            activeOpacity={0.7}
            disabled = {isLoading}
        >
            <Text className={`font-semibold text-lg text-primary ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}