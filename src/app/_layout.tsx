import { Stack } from "expo-router";
import { colors } from "@/styles/theme"

import { useFonts, Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold } from "@expo-google-fonts/rubik";

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold
    })
    return (
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.gray[100] } }} />
    )
}