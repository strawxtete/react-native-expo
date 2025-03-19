import {View, StyleSheet, Text} from 'react-native'
import { Image } from 'expo-image'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header(){
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={"https://cdn.dooca.store/9528/files/banners-poente-por-brazilian-girlie-1-18.jpg?v=1740676891&webp=0"}
            />
            <Text style={styles.nome}>Sthefany Santiago</Text>
            <Ionicons style={styles.menu} name="menu-outline" size={24} color="#3F0D09" />
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: '#EAE5E1',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        borderBottomColor: "#3F0D09",
        borderBottomWidth: 1
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 35
    },
    nome: {
        fontSize: 16,
        color: "#3F0D09"       
    },
    menu: {
        marginLeft: 'auto'
    }
})