import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./despesa.style";

const Despesa = (props) => {
    return (
        <TouchableOpacity onPress={()=> props.onclick(0)}> 
            <View style={styles.despesas}>
            <View style={styles.containerImg}>
                <Image
                    style={styles.despesaIcon}
                    source={{ uri: props.icone }} ></Image>
            </View>

            <View style={styles.containerCategoria}>
                <Text style={styles.despesaCategoria} >{props.categoria}</Text>
                <Text style={styles.despesaDescricao} >{props.descricao}</Text>
            </View>

            <View style={styles.containerValor}>
                <Text style={styles.despesaValor}>
                    {props.valor.toLocaleString('pt-BR',
                        { minimumFractionDigits: 2 })}
                </Text>
            </View>
            </View>
        </TouchableOpacity>
    )
}

export default Despesa;