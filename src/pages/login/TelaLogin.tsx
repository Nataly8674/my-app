import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import RecorteLogo2 from '../../../assets/IMG/RecorteLogo2.png';
import LogoOk from '../../../assets/IMG/logoOk-removebg-preview.png';
import Balao from '../../../assets/IMG/balao.png';
import Onda1 from '../../../assets/IMG/onda1.png';

const { width, height } = Dimensions.get('window');


export default function TelaLogin() {

  const [CPF,setCPF] = useState('');
  const [Senha,setSenha] = useState('');

  function getLogin(){
    try{

      if(!CPF || !Senha){
        return Alert.alert('Atenção!','Informe os campos obrigatórios!')
      }
        
      Alert.alert('Logado com sucesso')

    } catch (error) {
      console.log(error)

    }
  }

  const [isFocused, setIsFocused] = useState(false);
  //const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={RecorteLogo2} style={styles.headerImage} />
        </View>
        <View style={styles.rectanglesContainer}>
          <View style={styles.retangulo1} />
          <View style={styles.retangulo2} />
          <View style={styles.retangulo3} />
        </View>

        <View style={styles.imagesContainer}>
          <Image source={LogoOk} style={styles.image1} />
          <Image source={Balao} style={styles.image2} />
        </View>

        <View style={[styles.loginContainer, isFocused && styles.loginContainerFocused]}>
          <Text style={styles.loginText}>Login</Text>
          <TextInput
            style={styles.input}

            value={CPF}
            onChangeText={setCPF}

            placeholder="CPF"
            placeholderTextColor="#666"
            keyboardType="numeric"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"

            value={Senha}
            onChangeText={setSenha}

            secureTextEntry={true}
            placeholderTextColor="#666"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.containerLogin}>
          <Image source={Onda1} style={styles.ondaImage} />        

          <TouchableOpacity
            style={[styles.loginButton, isPressed && styles.loginButtonPressed]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={()=>getLogin()}
          >
            <Text style={[styles.loginButtonText, isPressed && styles.loginButtonTextPressed]}>Login</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Cabeçalho com imagem
  header: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    backgroundColor: '#0073e6',
    width: width, 
    height: height * 0.1, 
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },

  headerImage: {
    top: 15,
    width: width * 0.2, 
    height: height * 0.04, 
  },

  // Container com os retângulos de cores
  rectanglesContainer: {
    position: 'absolute',
    top: height * 0.1, 
    flexDirection: 'row',
    width: width, 
  },

  retangulo1: {
    backgroundColor: '#003F98',
    height: height * 0.005, 
    width: '33.7%',
  },

  retangulo2: {
    backgroundColor: '#7BB52B',
    height: height * 0.005, 
    width: '33.7%',
  },

  retangulo3: {
    backgroundColor: '#FFB400',
    height: height * 0.005, 
    width: '33.7%',
  },

  // Container com as imagens do balão e da secretaria
  imagesContainer: {
    flexDirection: 'row',
    top: height * 0.25, 
    width: width * 0.87, 
    position: 'absolute',
  },

  image1: {
    width: width * 0.95, 
    height: height * 0.35, 
    bottom: height * 0.07, 
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },

  image2: {
    width: width * 0.95, 
    height: height * 0.22, 
    bottom: height * 0.14, 
    right: height * 0.14, 
    resizeMode: 'contain',
    position: 'absolute',
  },

  // Mover tudo que tem no Container logo
  loginContainer: {
    width: width, 
    padding: 20,
    top: height * 0.25, 
  },

  // Estilo da view quando clicamos em CPF ou Senha
  loginContainerFocused: {
    backgroundColor: '#fff',
    borderRadius: 16,
  },

  loginText: {
    fontSize: width * 0.08, 
    fontWeight: 'bold',
    color: '#0073e6',
    marginBottom: 20,
    textAlign: 'left',
  },

  input: {
    height: height * 0.05, 
    borderColor: '#0073e6',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    //backgroundColor:themas.colors.lightGray
  },

  // Esqueci a senha
  forgotPasswordContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  forgotPassword: {
    color: '#0073e6',
  },

  // 'Onda' onde o login fica
  containerLogin: {
    width: width * 0.8, 
    height: height * 0.2, 
  },

  ondaImage: {
    width: width * 1.0, 
    height: height * 0.25, 
    top: height * 0.22, 
    right: 40,
  },

  loginButton: {

    top: height * 0.05, 
    left: width * 0.54, 
    width: width * 0.3, 
    height: height * 0.07, 
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderColor: '#fff',
    borderWidth: 1,
    elevation: 20, 
  },

  loginButtonPressed: {
    backgroundColor: '#fff',
  },

  loginButtonText: {
    color: '#fff',
    fontSize: width * 0.05, 
  },

  loginButtonTextPressed: {
    color: '#0073e6',
  },
});
