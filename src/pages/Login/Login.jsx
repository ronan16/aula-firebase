import { useState } from 'react';
import { Text, TextInput, View, Pressable } from 'react-native';
import { auth } from '../../services/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

import styles from "../../Styles/styles";

export default function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const fazLogin = () => {
        signInWithEmailAndPassword(auth, login, senha)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate('Home')
            })
            .catch((error) => {
                alert('Login ou senha incorretos')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };


    return (
        <View style={styles.container}>
  
            <Text>EXEMPLO DE GITHUB! DANI</Text>


            <Text style={styles.titulo}>Login</Text>
            <TextInput
                style={styles.entradaTexto}
                onChangeText={setLogin}
                value={login}
                placeholder="Digite seu email"
                inputMode='email'
            />
            <TextInput
                style={styles.entradaTexto}
                onChangeText={setSenha}
                value={senha}
                placeholder="Digite sua senha"
                secureTextEntry
            />
            <Pressable style={styles.botao} onPress={fazLogin}>
                <Text style={styles.textoBotao}>Entrar</Text>
            </Pressable>
            <Pressable style={styles.botao} onPress={() => navigation.navigate('CadUsuario')}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </Pressable>
        </View>
    )
}









