import { useState } from "react";
import { View, Button, TextInput, Text } from "react-native";
import Slider from '@react-native-community/slider';
import styles from "../../Styles/styles";
import { db, auth } from "../../services/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export default function CadUsuario({ navigation }) {

    const [usuario, setUsuario] = useState({
        nome: '',
        email: '',
        senha: '',
        uf: '',
        idade: 10 // Valor inicial da idade
    })

    const atualizaUsuarioState = (valor, chave) => {
        setUsuario(prevUsuario => ({ ...prevUsuario, [chave]: valor }));
    };

    const atualizaIdade = (valor) => {
        atualizaUsuarioState(valor, 'idade');
    };

    const cadastraUsuario = async () => {
        try {
            let criacaoDeUsuario = await createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
                .then((userCredential) => {
                    // Criar o usuario
                    const user = userCredential.user;

                    //Salva no Banco de Dados
                    const docRef = addDoc(collection(db, "usuarios"), usuario);
                    console.log("ID Gerado: ", docRef.id);

                    console.log("Logado com sucesso")
                    navigation.navigate('Home')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });


        } catch (e) {
            console.error("Erro ao salvar documento: ", e);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro de usuário</Text>
            <TextInput
                style={styles.entradaTexto}
                onChangeText={(valor) => { atualizaUsuarioState(valor, 'nome') }}
                value={usuario.nome}
                placeholder="Digite seu nome"
            />
            <TextInput
                style={styles.entradaTexto}
                onChangeText={(valor) => { atualizaUsuarioState(valor, 'email') }}
                value={usuario.email}
                placeholder="Não Digite seu email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.entradaTexto}
                onChangeText={(valor) => { atualizaUsuarioState(valor, 'senha') }}
                value={usuario.senha}
                placeholder="Digite sua senha"
                secureTextEntry
            />
            <TextInput
                style={styles.entradaTexto}
                onChangeText={(valor) => { atualizaUsuarioState(valor, 'uf') }}
                value={usuario.uf}
                placeholder="Digite seu Estado (UF)"
            />
            <Text>Idade: {usuario.idade}</Text>
            <Slider
                style={styles.slider}
                minimumValue={10}
                maximumValue={100}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={atualizaIdade}
                value={usuario.idade}
                step={1}
            />
            <Button title="Cadastrar" onPress={cadastraUsuario} />
        </View>
    )
}
