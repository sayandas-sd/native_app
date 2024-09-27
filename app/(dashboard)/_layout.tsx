import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import { View, Image, Text } from "react-native";



const Icon = ({ icon, color, name, focused}: any) => {
  return (
    <View className="flex items-center justify-center ">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6 mt-2"
      />

      <Text className= {`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
            style = {{color: color}}
      >
        {name}
      </Text> 

    </View>
  )
}
export default function Auth() {

  return (
    <>
      <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84
        }
      }}
      >
        <Tabs.Screen
        name="home" 
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused}) => (
            <Icon
              icon = {icons.home}
              color = {color}
              name = "Home"
              focused = {focused}
            />
          )
        }}
        />
        <Tabs.Screen
        name="bookmark" 
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused}) => (
            <Icon
              icon = {icons.bookmark}
              color = {color}
              name = "Bookmark"
              focused = {focused}
            />
          )
        }}
        />
        <Tabs.Screen
        name="post" 
        options={{
          title: 'Post',
          headerShown: false,
          tabBarIcon: ({ color, focused}) => (
            <Icon
              icon = {icons.plus}
              color = {color}
              name = "Post"
              focused = {focused}
            />
          )
        }}
        />
        <Tabs.Screen
        name="profile" 
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused}) => (
            <Icon
              icon = {icons.profile}
              color = {color}
              name = "Profile"
              focused = {focused}
            />
          )
          
        }}
        />
          
      </Tabs>
    </>
  )
}
