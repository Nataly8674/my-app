import { useNavigation,NavigationProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient'; dando erro que ainda não sei resolver
//import Seta1 from '../../../assets/IMG/seta1.png';
import Calendario from '../../../assets/IMG/Calendario.png';

const { width } = Dimensions.get('window'); 
const { height } = Dimensions.get('window');

export default function PainelInicial() {

  const navigation = useNavigation<NavigationProp<any>>();

  

  return (
    <View style={styles.container}>
      
      {/*Header*/}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.textoHeader}>Painel Inicial</Text>
          <TouchableOpacity onPress={() => navigation.navigate("TelaLogin")}>
          {/*<Image source={Seta1} style={styles.Seta} />*/}
          </TouchableOpacity>
        </View>
      </View>

      {/*Sombra para o Header dando erro que ainda não sei resolver */}  
      {/*<View style={styles.rectanglesContainer}>
        <LinearGradient 
          colors={['#092d5e', '#2F80ED']} style={styles.retangulo1}/>
      </View>*/}

      {/*Caixa Materia 1*/}
      <TouchableOpacity onPress={() => navigation.navigate("HorarioAulas")}>
        <View style={[styles.caixaMateria1]}>
          <Text style={styles.textoMateria1}>Horários das Aulas</Text>
    
          <Image source={Calendario} style={[styles.ImgCalendario]} />

        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F80ED',
  },

  /*Header*/
  header: {
    width: width,
    height: height * 0.1,
    backgroundColor: "#fff",
    elevation: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderColor: 'black',
    borderWidth: 1,
    
  },

  textoHeader: {
    fontSize: 24,
    color: '#0073e6',
    marginTop: 30,
    textAlign: 'center',
    fontFamily: 'Nunito-VariableFont_wght'
  },

  //Seta: { /*Avaliar necessidade*/
    //width: 30,
    //height: 30,
    //marginTop: 30,
    //right: 30,
  //},

  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  /*Sombra para o Header*/ //Ta quebrado o Linear Gradient
  //rectanglesContainer: {
    //bottom: 318,
    //width: width,
  //},

  /*Caixa Materia 1*/
  caixaMateria1: {
    backgroundColor: '#fff',
    height: height * 0.1, 
    width: width * 0.75,
    borderRadius: 10,
    bottom: width * 0.65,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
  },
  

  textoMateria1: {
    fontSize: 22,
    color: '#0073e6',
    marginTop: 23,
    left: 20,
    textAlign: 'center',
    fontFamily: 'Nunito-VariableFont_wght',
    borderRadius: 10,
  },


  ImgCalendario: { /*Substituir por calendario*/ 
    width: 70,
    height: 70,
    bottom: 45,
    left: 5,
  },

});