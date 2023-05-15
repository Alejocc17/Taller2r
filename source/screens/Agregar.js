import * as React from 'react';
import * as RN from 'react-native';
import {baseDatos} from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function Agregar() {
const navigation = useNavigation();

    const [newObjeto, setNewObjeto] = React.useState({
        imagen: '👕',
        nombre: '',
        descripcion: '',
        precio: 0,
        vendido: false,
        creadoEn: new Date(),
    })

    const enviar = async () =>{
         await addDoc(collection(baseDatos, 'objetos'), newObjeto);
         navigation.goBack();
    }
    
    return (
        <RN.View style={styles.container}>
            <RN.Text style={styles.title}>Agregar Prenda</RN.Text>
            <RN.Text style={styles.imagen}>{newObjeto.imagen}</RN.Text>
            <RN.TextInput style={styles.inputContainer} placeholder='Prenda' onChangeText={(text) => setNewObjeto({...newObjeto, nombre:text})} />
            <RN.TextInput style={styles.inputContainer} placeholder='Tipo' onChangeText={(text) => setNewObjeto({...newObjeto, descripcion:text})} />
            <RN.TextInput style={styles.inputContainer} placeholder='Cantidad' keyboardType='number-pad' onChangeText={(text) => setNewObjeto({...newObjeto, precio:text})} />
            <RN.Button title='Guardar' onPress={enviar}/> 

        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0D6D8',
        alignItems: 'center',
    },
    title: {
        fontSize: 34,
        fontWeight: '700',
    },
    imagen: {
        fontSize: 100,
        borderWidth: 1,
        borderColor: '#79CBE6',
        borderRadius: 10,
        padding: 10,
        marginVertical: 6,
    },
    inputContainer: {
        width: '90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#79CBE6',
        borderRadius: 6,
    }

})