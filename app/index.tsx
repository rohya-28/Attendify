import { Redirect } from "expo-router"
import { View, Text } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"



const Home = () => {
    return (
    <GestureHandlerRootView>
        <Redirect href="/(auth)/welcome" />
    </GestureHandlerRootView>
    )
}

export default Home