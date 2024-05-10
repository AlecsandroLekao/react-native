import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import icons from "../../constants/icons.js"
import { styles } from "./home.style.js"
import Despesa from "../../components/despesa/despesa.jsx"
import { useEffect, useState } from "react";

const Home = (props) => {

    const [valor, setValor] = useState(0);
    const [dadosApi, setDadosApi] = useState([]);

    ///// 2:28
    const OpenDespesa = (id) => {
        props.navigation.navigate('despesas')
    }

    useEffect(() => {
        listarDespesas()
    }, [])

    const listarDespesas = () => {

        const dados = [
            { id: 1, icone: icons.linkUri, categoria: "Categoria 7", descricao: "descriçã 1o", valor: 100.10 },
            { id: 2, icone: icons.linkUri, categoria: "Categoria w", descricao: "descrição 3", valor: 100.12 },
            { id: 3, icone: icons.linkUri, categoria: "Categoria 3", descricao: "descrição 4", valor: 100.15 },
            { id: 4, icone: icons.linkUri, categoria: "Categoria 4", descricao: "descrição 4", valor: 10 },
            { id: 5, icone: icons.linkUri, categoria: "Categoria 5", descricao: "descrição r", valor: 101 },
        ]

        setValor(dados.reduce((prev, actual) => prev + actual.valor, 0))
        setDadosApi(dados)
    }

    return <View style={styles.container}>
        <Image source={icons.logo} style={styles.logo} />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.dashboard}>
                <View>
                    <Text style={styles.dashboardValor}>
                        {valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Text>

                    <Text style={styles.dashboardText}>Total de Gastos</Text>
                </View>
                <Image source={icons.logo} style={styles.dashboardImg} />
            </View>

            <View >
                <Text style={styles.despesaTitulo}>Despesas</Text>

                {
                    dadosApi.map(value => {
                        return (
                            <Despesa
                                key={value.id}
                                id={value.id}
                                icone={value.icone}
                                categoria={value.categoria}
                                descricao={value.descricao}
                                valor={value.valor}
                                onclick={OpenDespesa}
                            />
                        )
                    })
                }

            </View>
        </ScrollView>
        <TouchableOpacity style={styles.btnAnnd} onPress={() => OpenDespesa(0)}>
            <Image source={icons.add} style={styles.btnAddImage} ></Image>
        </TouchableOpacity>
    </View>
};

export default Home;