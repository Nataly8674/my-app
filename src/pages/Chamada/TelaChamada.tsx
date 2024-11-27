import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Seta1 from '../../../assets/IMG/seta1.png';
import { useNavigation,NavigationProp } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

type PresencaType = {
  [key: string]: 'P' | 'F' | null;
};

const AttendanceScreen = () => {

    const navigation = useNavigation<NavigationProp<any>>();

    const { width, height } = Dimensions.get('window'); 

    const [presenca, setPresenca] = useState<PresencaType>({
        aluno1: null,
        aluno2: null,
        aluno3: null,
        aluno4: null,
    });

     const tratarSelecao = (aluno: string, status: 'P' | 'F') => {
     setPresenca({
        ...presenca,
        [aluno]: status,
      });
     };

    const salvarPresenca = async () => { //Requisição não funcionando ERRO 403
        //geralmente ocorre quando o servidor entende a solicitação, mas se recusa a processá-la. Isso pode ser causado por diversas razões, 
        //como falta de permissões, autenticação ausente ou incorreta, ou configurações inadequadas no servidor.//
     try {
        const response = await fetch('http://192.168.1.70:8080/api/chamadas/realizar', {
         method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
             alunos: [
                { id: 1, presenca: presenca.aluno1 },
                { id: 2, presenca: presenca.aluno2 },
                { id: 3, presenca: presenca.aluno3 },
                { id: 4, presenca: presenca.aluno4 },
             ],
          
        }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Chamada salva:', data);
            Alert.alert('Sucesso', 'Chamada salva com sucesso!');

            navigation.navigate("HorarioAulas");

        } else {
            console.error('Erro ao salvar a chamada:', response.status);
            Alert.alert('Erro', 'Ocorreu um erro ao salvar a chamada.');
        }
      
        } catch (error) {
         console.error('Erro de conexão:', error);
          Alert.alert('Erro', 'Não foi possível salvar a chamada. Verifique sua conexão.');
        }
    };

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.textoHeader}>Lista de Chamada</Text>
          <TouchableOpacity onPress={() => navigation.navigate("HorarioAulas")}>
            <Image source={Seta1} style={[styles.seta]} />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {/* Data fora do container */}
        <Text style={styles.data}>Segunda-Feira 12/08/2024</Text>
      </View>

      {/* Container com informações da matéria e lista de presença, estendido até o fundo da tela */}
      <View style={styles.containerPresenca}>
        <Text style={styles.materia}>Português | 7:45 - 9:30</Text>

        <View style={styles.listaAlunos}>
          {['aluno1', 'aluno2', 'aluno3', 'aluno4'].map((aluno, index) => (
            <View key={index} style={styles.linha}>
              <Text style={styles.nomeAluno}>Aluno {index + 1}</Text>
              <View style={styles.grupoRadio}>
                <TouchableOpacity
                  style={styles.radio}
                  onPress={() => tratarSelecao(aluno, 'P')}>
                  <View style={presenca[aluno] === 'P' ? styles.radioSelecionado : styles.radioNaoSelecionado} />
                  <Text style={styles.labelRadio}>P</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.radio}
                  onPress={() => tratarSelecao(aluno, 'F')}>
                  <View style={presenca[aluno] === 'F' ? styles.radioSelecionado : styles.radioNaoSelecionado} />
                  <Text style={styles.labelRadio}>F</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Botão de salvar posicionado no final do container */}
        <TouchableOpacity style={styles.botaoSalvar} onPress={salvarPresenca}>
          <Text style={styles.textoBotaoSalvar}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F80ED',
  },

  /*Header*/
  header: {
    width: width,
    height: height * 0.11,
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
    marginTop: 40,
    textAlign: 'center',
    fontFamily: 'Nunito-VariableFont_wght'
  },

  seta: {
    width: 30,
    height: 30,
    marginTop: 13,
    right: 30,
  },

  headerContent: {
    width: width,
    height: height * 0.11,
    backgroundColor: "#fff",
    elevation: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderColor: 'black',
    borderWidth: 1,
    
  },

  data: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'left',
  },

  containerPresenca: {
    width:width * 0.9,
    height: height * 0.1,
    flex: 1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 2,
    marginLeft:20,
    marginBottom:20,
    marginTop:70,
  },

  materia: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 15,
    textAlign: 'center',
  },

  listaAlunos: {
    flexGrow: 1,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  nomeAluno: {
    fontSize: 16,
    color: '#333',
  },

  grupoRadio: {
    flexDirection: 'row',
  },

  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  radioNaoSelecionado: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#003366',
    marginRight: 5,
  },

  radioSelecionado: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#003366',
    marginRight: 5,
  },

  labelRadio: {
    fontSize: 16,
    color: '#333',
  },

  botaoSalvar: {
    backgroundColor: '#003366',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },

  textoBotaoSalvar: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AttendanceScreen;
