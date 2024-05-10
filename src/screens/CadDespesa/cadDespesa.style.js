import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    containerCadDespesa:{
         width: '100%',
         height: '100%',
         backgroundColor:COLORS.white,
         padding:20
    },
    containerField:{
        marginBottom:40
    },inputValor:{
        fontSize:FONT_SIZE.xl,
        padding:10,
        borderBottomColor:COLORS.gray,
        fontWeight:"bold",
        borderBottomWidth:2
    },inputText:{
        fontSize:FONT_SIZE.md,
        borderBottomWidth:2,
        padding:5,
        borderBottomColor:COLORS.gray,
    },inputLabel:{
        fontSize:FONT_SIZE.md,
        color:COLORS.gray
    },containerBtn:{
        alignItems:"flex-end",
        borderWidth: 1, // Define a largura da borda como 1 pixel
        borderColor: 'black', // Define a cor da borda como preta
    },
    btn:{
        backgroundColor:COLORS.blue,
        padding:10,
        borderRadius:6,
        width: 150
    },btnText:{
        color:COLORS.white,
        fontSize:FONT_SIZE.md,
        textAlign: "center"
    },
    containerDelete:{
        alignItems:"center",
        marginTop:20
    },
    btnDelete:{
        width:50,
        height:50    
    },inputPicker:{
        fontSize:FONT_SIZE.md,
        borderBottomWidth:2,
        borderBottomColor:COLORS.gray,
    }
}