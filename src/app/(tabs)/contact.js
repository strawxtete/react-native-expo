import { View, Text , StyleSheet, TextInput, Button, ScrollView } from 'react-native'

export default function ContactScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAE5E1',
        gap: 20,        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F0D09',
    },
})