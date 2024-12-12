import { Text, View } from "react-native"
import { s } from "./style"

export type PropsDetails = {
    name: string,
    description: string,
    address: string,
    phone: string,
    coupons: number,
    rules: {
        id: string,
        description: string
    }[]
}

type Props = {
    data: PropsDetails
}

export function Details({ data }: Props) {
    return (
        <View style={s.container}>
            <Text style={s.name}>{data.name}</Text>
            <Text style={s.description}>{data.description}</Text>

            <View style={s.group}>
                <Text style={s.title}>Informações</Text>
            </View>
        </View>
    )
}