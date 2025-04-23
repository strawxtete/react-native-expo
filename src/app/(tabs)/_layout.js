import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function HootLayout() {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: '#3F0D09'}}>
      
        <Tabs.Screen name="index" options={{
                      title: "Home",
                      tabBarIcon: ({ color }) => <Ionicons name="home-sharp" size={24} color={color} /> 
                      }}/>

        <Tabs.Screen name="contact" options={{
                      title: "Contact",
                      tabBarIcon: ({ color }) => <FontAwesome5 name="phone" size={24} color={ color } /> 
                      }}/>

        <Tabs.Screen name="profile" options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user-cicle" size={24} color={ color } />
                    }}/>
    </Tabs>
  );
}