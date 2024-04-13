import { View, Text, Pressable } from "react-native";
import styles from "../../Styles/styles";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../services/firebaseConfig";
import { useState } from "react";


//teste Github


export default function Home({ navigation }) {

    const [lista, setLista] = useState([])

    const buscarTodos = async () => {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        let listaUsuarios = []
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            listaUsuarios.push(doc.data())
        });
        setLista(listaUsuarios)
    }


    return (
        <View>
            {lista.map((usuario, index) => (
                <Text key={index}>
                    {JSON.stringify(usuario)}
                </Text>
            ))}
            <Pressable style={styles.botao} onPress={buscarTodos}>
                <Text style={styles.textoBotao}>Listar</Text>
            </Pressable>
            <Pressable style={styles.botao} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textoBotao}>Deslogar</Text>
            </Pressable>
        </View>
    )
}