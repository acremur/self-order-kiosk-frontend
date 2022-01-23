import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    navy: {
        backgroundColor: '#003080',
    },
    red: {
        backgroundColor: '#ff2040',
        color: 'white'
    },
    main: {
        flex: 1,
        overflow: 'auto',
        flexDirection: 'column',
        display: 'flex',
        color: 'white'
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    green: {
        backgroundColor: '#00b020'
    },
    largeLogo: {
        height: 100
    },
    logo: {
        height: 50
    },
    cards: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        margin: 10
    },
    cardFooter: {
        padding: 10
    },
    productContainer: {
        backgroundColor: 'hidden'
    },
    title: {
        margin: 10,
    },
    space: {
        padding: 10
    },
    media: {
        width: 300,
        height: 200,
        objectFit: 'cover'
    },
    largeButton: {
        width: 250
    },
    largeInput: {
        width: '60px !important',
        padding: '0 !important',
        fontSize: '35px !important',
        textAlign: 'center !important'
    },
    bordered: {
        border: '2px',
        borderRadius: '5px',
        margin: '5px 20px',
        borderStyle: 'solid'
    },
    row: {
        display: 'flex',
        padding: 10
    },
    around: {
        justifyContent: 'space-around'
    },
    between: {
        justifyContent: 'space-between'
    },
    column: {
        flexDirection: 'column'
    }
}))