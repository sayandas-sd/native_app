import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView, Image  } from "react-native";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import { Redirect, router } from "expo-router";


export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className=" items-center justify-center  px-4 min-h-[85-vh] w-full">
                <Image 
                    source = {images.logo}
                    className="w-[130px] h-[84px]"
                    resizeMode="contain"
                />
                <Image 
                    source = {images.cards}
                    className="w-[380px] w-full h-[300px]"
                    resizeMode="contain"
                />

                <View className="relative mt-5">
                    <Text className="text-3xl text-white font-bold text-center">
                        Explore Endless
                        Possibilities with{' '}
                        <Text className="text-yellow-600">
                        Aora
                        </Text>
                    </Text>
                    
                </View>
                <Text className="text-sm text-center text-gray-200 mt-8 font-sbold">
                    Where creativity meets innovation:
                    explore Aora
                </Text>

                <CustomButton 
                    title="Login"
                    handlepress = {()=> router.push('/Signin')}
                    containerStyles = "w-full mt-7"
                    />
            </View>
        </ScrollView>

        <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  )
}
