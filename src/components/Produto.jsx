import {View, StyleSheet, Text} from 'react-native'
import { Image } from 'expo-image'

export default function Produto(props){
    return (
        <View style={styles.container}>
            <Image style={styles.imagem}
                source={props.image}
            />

            <Text style={styles.nome}>{props.name}</Text>
            <Text style={styles.preco}>R$ {props.price}</Text>
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
    imagem: {
        width: "100%",
        height: 200,
        marginBottom: 10,
    },
    nome: {
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