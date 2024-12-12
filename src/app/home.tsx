import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import { api } from "@/services/api";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import MapView from "react-native-maps";

type MarketsProps = PlaceProps

const currentLocation = {
    latitude: -23.561187293883442,
    longitude: -46.656451388116494
}

export default function Home() {

    const [categories, setCategories] = useState<CategoriesProps>([]);
    const [markets, setMarkets] = useState<MarketsProps[]>([]);

    const [category, setCategory] = useState("");

    async function fetchCategories() {
        try {

            const { data } = await api.get("/categories")
            setCategories(data)
            setCategory(data[0].id)

        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Não foi possível carregar as categorias")
        }
    }

    async function fetchMarkets() {
        try {
            if (!category) {
                return
            }
            const { data } = await api.get("/markets/category/" + category)
            setMarkets(data)

        } catch (error) {
            console.log(error)
            Alert.alert("Locais", "Não foi possível carregar os locais")
        }
    }

    // pegar a localização atual
    async function getCurrentLocation() {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync()
            if (granted) {
                const location = await Location.getCurrentPositionAsync()
                console.log(location)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        //getCurrentLocation();
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchMarkets();
    }, [category]);

    return (
        <View style={{ flex: 1 }}>
            <Categories data={categories} onSelect={setCategory} selected={category} />
            <MapView style={{ flex: 1 }}
                initialRegion={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            />
            <Places data={markets} />
        </View>
    )
}