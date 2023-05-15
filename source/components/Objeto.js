import * as React from 'react';
import * as RN from 'react-native';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {AntDesign} from '@expo/vector-icons';
import { baseDatos } from '../config/firebase';

export default function Objeto({
    id,
    imagen,
    nombre,
    descripcion,
    precio,
    vendido,
}) {
    const editar = () => {
        const docRef = doc(baseDatos, 'objetos', id);
        updateDoc(docRef, {
            vendido: true,
        });
    };

    const eliminar = () => {
        const docRef = doc(baseDatos, 'objetos', id);
        deleteDoc(docRef);
        };

    return(
        <RN.View style={styles.objetoContainer}>
            <RN.View style={styles.conEliminar}>
            <RN.Text style={styles.imagen}>{imagen}</RN.Text>
            <AntDesign omPress={eliminar} name='delete' size={40}/>
            </RN.View>

            <RN.Text style={styles.nombre}>{nombre}</RN.Text>
            <RN.Text style={styles.descripcion}>{descripcion}</RN.Text>
            <RN.Text style={styles.precio}>${precio}</RN.Text>
            {vendido ? (
                <RN.TouchableOpacity style={styles.button}>
                    <RN.Text style={styles.button}>Cargado</RN.Text>
                </RN.TouchableOpacity>
            ) : (
                <RN.TouchableOpacity
                style={styles.button}
                onPress={editar}>
                    <RN.Text style={styles.button}>Cargar</RN.Text>
                </RN.TouchableOpacity>
            )}
        </RN.View>
    );
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
    },
    conEliminar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        borderRadius: 10,
        color: '#FF0202',
        backgroundColor: '#ddd'
    },

})