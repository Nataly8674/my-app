import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import TelaLogin from "../pages/login/TelaLogin";
import PainelInicial from "../pages/list/PainelInicial";



export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
            initialRouteName="TelaLogin"
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:"#fff"
                }

            }}
                
            
        >
            <Stack.Screen name ="TelaLogin" component={TelaLogin}/>
            <Stack.Screen name ="PainelInicial" component={PainelInicial}/>
        </Stack.Navigator>
    )
}