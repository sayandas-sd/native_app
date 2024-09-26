import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";





export default function RootApp() {

 
  return (
    <Stack>
      <Stack.Screen 
        options={{headerShown: false}} 
        name="index"
      />
    </Stack>
  )
}
