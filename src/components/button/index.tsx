import { colors } from "@/styles/colors";
import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { s } from "./styles";

type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean
}

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={[s.container, style]} activeOpacity={0.7} disabled={isLoading} {...rest}>
            {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
        </TouchableOpacity>
    )
}

function Title({ children }: TextProps) {
    return (
        <Text style={s.title}>{children}</Text>
    )
}

Button.Title = Title

export { Button };
