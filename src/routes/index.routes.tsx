import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import TelaLogin from "../pages/login/TelaLogin";
import PainelInicial from "../pages/list/PainelInicial";
import HorarioAulas from "../pages/Horario/HorarioAulas";
import TelaChamada from "../pages/Chamada/TelaChamada";



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

            }}>

            <Stack.Screen name ="TelaLogin" component={TelaLogin}/>
            <Stack.Screen name ="PainelInicial" component={PainelInicial}/>
            <Stack.Screen name ="HorarioAulas" component={HorarioAulas}/>
            <Stack.Screen name ="TelaChamada" component={TelaChamada}/>
        </Stack.Navigator>
    )
}