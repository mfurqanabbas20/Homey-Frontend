import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import { Clipboard, ClipboardList, Home, MessageCircleWarning, User, User2 } from 'lucide-react-native';

const Layout = () => {
    return (
        <Tabs initialRouteName="home" screenOptions={{
            tabBarActiveTintColor: "#C59315",
            headerShown: false,
            tabBarStyle: {
                borderTopStartRadius: 30,
                borderTopEndRadius: 30,
                borderColor: "white",
            }
        }}>
            <Tabs.Screen 
              name="home"
              options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({focused}) => ( <Home fill={focused ? "#C59315" : ""} color={focused ? "#C59315" : "black"} size={20} /> )
              }}
            />
            <Tabs.Screen 
              name="booking"
              options={{
                title: "Booking",
                headerShown: false,
                 tabBarIcon: ({focused}) => ( <Home  fill={focused ? "#C59315" : ""} color={focused ? "#C59315" : "black"} size={20} /> )
              }}
            />
            <Tabs.Screen 
              name="help"
              options={{
                title: "Help",
                headerShown: false,
                 tabBarIcon: ({focused}) => ( <Home  fill={focused ? "#C59315" : ""} color={focused ? "#C59315" : "black"} size={20} /> )
              }}
            />
            <Tabs.Screen 
              name="profile"
              options={{
                title: "Profile",
                headerShown: false,
                 tabBarIcon: ({focused}) => ( <Home  fill={focused ? "#C59315" : ""} color={focused ? "#C59315" : "black"} size={20} /> )
              }}
            />
        </Tabs>
    )
}

export default Layout;
