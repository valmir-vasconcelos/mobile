import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({

    logo: {
        width: 48,
        height: 48,
        marginTop: 10,
        marginBottom: 28
    },

    title: {
        fontSize: 22,
        fontFamily: fontFamily.bold,
        color: colors.gray[600]
    },

    subtitle: {
        fontSize: 15,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 12
    }
})