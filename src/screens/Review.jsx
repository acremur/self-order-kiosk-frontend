import { useContext, useState } from "react"
import { 
    Box, 
    Button, 
    Card, 
    CardContent, 
    Grid,
    Typography
} from "@material-ui/core"
import { useStyles } from "../utils/styles"
import { Store } from "../Redux/Store"
import Logo from "../components/Logo"
import { useNavigate } from "react-router-dom"
import QuantityModal from "../components/QuantityModal"

export default function Review() {

    const styles = useStyles()
    const { state } = useContext(Store)
    const { orderItems, itemsCount, totalPrice, taxPrice, orderType } = state.order
    const [isOpen, setIsOpen] = useState(false)
    const [product, setProduct] = useState({})
    let navigate = useNavigate()

    const productClickHandler = product => {
        setProduct(product)
        setIsOpen(true)
    }

    const proceedToCheckout = () => {
        navigate('/select-payment')
    }
    
    return (
        <Box className={styles.root}>
            <Box className={`${styles.main} ${styles.navy} ${styles.center}`}>
                <QuantityModal product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
                <Box className={`${styles.center} ${styles.column}`}>
                    <Logo large />
                    <Typography
                        gutterBottom
                        className={styles.title}
                        variant='h3'
                        component='h3'
                    >
                        Review my {orderType} order
                    </Typography>
                </Box>
                <Grid container>
                    {orderItems.map(orderItem => (
                        <Grid item md={12} key={orderItem.name}>
                            <Card 
                                className={styles.card}
                                onClick={() => productClickHandler(orderItem)}
                            >
                                <CardContent>
                                    <Box className={`${styles.row} ${styles.between}`}>
                                        <Typography
                                            gutterBottom
                                            color='textPrimary'
                                            variant='body2'
                                            component='p'
                                        >
                                            {orderItem.name}
                                        </Typography>
                                        <Button variant='contained'>Edit</Button>
                                    </Box>
                                    <Box className={`${styles.row} ${styles.between}`}>
                                        <Typography
                                            color='textSecondary'
                                            variant='body2'
                                            component='p'
                                        >
                                            {orderItem.calorie} Cal
                                        </Typography>
                                        <Typography
                                            color='textPrimary'
                                            variant='body2'
                                            component='p'
                                        >
                                            {orderItem.quantity} x {orderItem.price}€
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box>
                <Box>
                    {itemsCount > 0 && (
                        <Box className={`${styles.bordered} ${styles.space}`}>
                            My Order - {orderType === 'takeout' ? 'Take out' : 'Eat in'} | Tax: {taxPrice}€ | Total: {totalPrice}€ | Items: {itemsCount}
                        </Box>
                    )}
                    <Box className={`${styles.row} ${styles.around}`}>
                        <Button
                            onClick={() => navigate('/order')}
                            variant='contained'
                            color='primary'
                            className={styles.largeButton}
                        >
                            Back
                        </Button>
                        <Button
                            onClick={proceedToCheckout}
                            variant='contained'
                            color='secondary'
                            className={styles.largeButton}
                            disabled={orderItems.length === 0}
                        >
                            Proceed To Checkout
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}