import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    slider: {
        alignItems: 'center',
        width: 200,
        height: 40
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }

    ,
    entradaTexto: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    }

    ,
    botao: {
        backgroundColor: '#007BFF',
        padding: 10,
        alignItems: 'center',
    }

    ,
    textoBotao: {
        color: 'white',
        fontSize: 16,
    }

    ,
});

export default styles;