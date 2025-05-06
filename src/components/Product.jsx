import { Image } from 'expo-image'
import {View, Text, StyleSheet} from 'react-native'

export default function Product({foto, titulo, preco}) {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.foto}
                source={foto}
            />
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.preco}>{preco}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#3F0D09",
        borderRadius: 5,
        width: 180,
        height: 280,
        alignItems: "center",
    },
    foto: {
        width: "100%",
        height: 200,
        marginBottom: 10,
    },
    titulo: {
        color: "#3F0D09",
        textTransform: "uppercase",
        fontSize: 10,
        borderTopColor: "#3f0d098c",
        borderTopWidth: 1,
        paddingTop: 10,
        fontWeight: 400,
        textAlign: "center"
    },
    preco: {
        color: "#3F0D09",
        fontSize: 16,
        fontWeight: 500,
        textAlign: "center"
    }
})