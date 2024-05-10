import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        alignItems: "center",
        padding: 20,
        flex:1
    },
    logo: {
        width: 100,
        height: 30
    },
    dashboard: {
        width: "100%",
        backgroundColor: COLORS.blue,
        padding: 20,
        borderRadius: 20,
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between"
    },
    dashboardValor: {
        color: COLORS.white,
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold"
    },
    dashboardText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.sm
    },
    dashboardImg: {
        width: 35,
        height: 60,
    },
    despesaTitulo: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray,
        fontWeight: "bold",
        marginTop: 12
    }, 
    btnAddImage: {
        width: 50,
        height: 50
    }, 
    btnAnnd: {
        position:"absolute",
        bottom:12
    }
}