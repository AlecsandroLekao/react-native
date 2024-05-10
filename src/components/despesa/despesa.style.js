import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    despesas: {
        width: "100%",
        backgroundColor: COLORS.light_gray,
        alignItems: "center",
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    }, despesaIcon: {
        width: 50,
        height: 50
    }, containerImg: {
        flex: 3

    }, containerCategoria: {
        flex: 10

    }, containerValor: {
        flex: 4
    }, despesaValor: {

    }, despesaCategoria: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_grey,
        fontWeight: "bold"

    }, despesaDescricao: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_grey
    },
    despesaValor: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_grey,
        textAlign: "right"
    }
}