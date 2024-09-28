import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";


export default function Auth() {

  return (
    <Stack>
      <Stack.Screen 
        options={{headerShown: false}} 
        name="signin"
      />
      <Stack.Screen 
        options={{headerShown: false}} 
        name="signin"
      />
    <StatusBar backgroundColor="#161622" style="light"/>
    </Stack>
  )
}
