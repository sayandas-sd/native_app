import images from "@/constants/images";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View  } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


export default function SignIn() {
  return (
    <SafeAreaView className="bg-primary h-full ">
        <ScrollView>
            <View className="w-full justify-center min-h-[85vh] px-4 my-6">
                
                <Image source={images.logo} resizeMode="contain"/>
            </View> 
        </ScrollView>
    </SafeAreaView>
  )
}
