import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View  } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>
        profile
      </Text>
      <StatusBar style="auto"/>
    </View>
  )
}
