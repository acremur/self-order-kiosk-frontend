import { 
    Box, 
    Button, 
    CircularProgress, 
    Typography 
} from "@material-ui/core"
import { useContext, useEffect } from "react"
import { createOrder } from "../Redux/actions"
import { Store } from "../Redux/Store"
import Logo from '../components/Logo'
import { useStyles } from "../utils/styles"
import { Alert } from "@material-ui/lab"
import { useNavigate } from "react-router-dom"

export default function CompleteOrder() {

    const styles = useStyles()
    const { state, dispatch } = useContext(Store)
    const { order } = state
    const { loading, error, newOrder } = state.orderCreate
    let navigate = useNavigate()

    useEffect(() => {
        if (order.orderItems.length > 0) {
            createOrder(dispatch, order)
        }
    }, [order, dispatch])

    return (
        <Box className={`${styles.root} ${styles.navy}`}>
            <Box className={`${styles.main} ${styles.center}`}>
                <Box>
                    <Logo large />
                    {loading ? (
                        <CircularProgress />
                    ) : error ? (
                        <Alert severity="error">{error}</Alert>
                    ) : (
                        <>
                            <Typography
                                gutterBottom
                                className={styles.title}
                                variant='h1'
                                component='h1'
                            >
                                Thank you!
                            </Typography>
                            <Typography
                                gutterBottom
                                className={styles.title}
                                variant='h3'
                                component='h3'
                            >
                                Your order number is {newOrder.number}
                            </Typography>
                        </>
                    )}
                </Box>
            </Box>
            <Box className={`${styles.main} ${styles.center}`}>
                <Button
                    onClick={() => navigate('/')}
                    variant='contained'
                    color='primary'
                    className={styles.largeButton}
                >
                    Order Again
                </Button>
            </Box>
        </Box>
    )
}
