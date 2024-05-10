import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import { styles } from "./cadDespesa.style.js";
import { typeKeyboard } from "../../constants/theme.js";
import icons from "../../constants/icons.js";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";

const CadDespesa = (props) => {

    const [id,setId] = useState(0);
    const [valor,SetValor] = useState(0);
    const [descricao,setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")

    const handleSalvar = () => {
        props.navigation.navigate('home')
    }

    const handleDelete = () => {
        props.navigation.navigate('home')
    }
    return (
        <View style={styles.containerCadDespesa}>
            <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Valor</Text>
                <TextInput placeholder="0.00"
                    defaultValue="0"
                    style={styles.inputValor}
                    keyboardType={typeKeyboard.decimalPad}
                />
            </View>

            <View style={styles.containerField}>
            <Text style={styles.inputLabel}>Categoria</Text>
                <View style={styles.inputPicker}>
                
                <Picker selectedValue={categoria} onValueChange={(item,index)=>{
                setCategoria(item)
                }}>
                    <Picker.Item label="Carro" value="Carro"/>
                    <Picker.Item label="Casa" value="Casa"/>
                    <Picker.Item label="Lazer" value="Lazer"/>
                    <Picker.Item label="Mercado" value="carro"/>
                    <Picker.Item label="Educação" value="Educação"/>
                    <Picker.Item label="Viagem" value="Viagem"/>
                </Picker>

                </View>
            </View>

            <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Descrição despesa</Text>
                <TextInput placeholder="Descrição" style={styles.inputText} />
            </View>

            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btn} onPress={handleSalvar}>
                    <Text style={styles.btnText}>Salvar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerDelete}>
                <TouchableOpacity onPress={handleDelete}>
                    <Image source={icons.remove} style={styles.btnDelete}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CadDespesa;