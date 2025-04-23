import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ 
        headerStyle: { 
            backgroundColor: '#EAE5E1',
        },
        headerTintColor: '#3F0D09',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }}>
        <Stack.Screen name="index" options={{title: "Home"}}/>
        <Stack.Screen name="create" options={{title: "Criar Produto"}}/>
        <Stack.Screen name="(tabs)" options={{title: "Tabs", headerShown: false}}/>
    </Stack>
  );
}