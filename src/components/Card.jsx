import { 
    Card as MUICard,
    CardActionArea, 
    CardContent, 
    CardMedia, 
    Typography 
} from "@material-ui/core"
import { useStyles } from "../utils/styles"
import { useContext } from "react"
import { Store } from "../Redux/Store"
import { setOrderType, setPaymentType } from "../Redux/actions"
import { useNavigate } from "react-router-dom"

const Card = ({ text, imgUrl, method }) => {

    const styles = useStyles()
    const { dispatch } = useContext(Store)
    let navigate = useNavigate()

    const chooseOrderHandler = orderType => {
        setOrderType(dispatch, orderType)
        navigate('/order')
    }

    const selectPaymentHandler = paymentType => {
        setPaymentType(dispatch, paymentType)
        if (paymentType === 'Pay here') {
            navigate('/payment')
        } else {
            navigate('/complete')
        }
    }

    const getMethod = (method) => {
        if (method === 'order') {
            chooseOrderHandler(text)
        }
        if (method === 'payment') {
            selectPaymentHandler(text)
        }
    }
    
    return (
        <MUICard className={`${styles.card} ${styles.space}`}>
            <CardActionArea onClick={() => getMethod(method)}>
                <CardMedia 
                    component='img'
                    alt={text}
                    image={`/images/${imgUrl}`}
                    className={styles.media}
                />
                <CardContent>
                <Typography 
                    component='p' 
                    variant='h3'
                    gutterBottom
                    color='textPrimary'
                >
                    {text}
                </Typography>
                </CardContent>
            </CardActionArea>
        </MUICard>
    )
}

export default Card