import { useContext, useState, useEffect } from "react"
import { 
    Box, 
    Button, 
    Dialog, 
    DialogTitle, 
    TextField} 
from "@material-ui/core"
import { useStyles } from "../utils/styles"
import { Add, Remove } from '@material-ui/icons'
import { addToOrder, removeFromOrder } from "../Redux/actions"
import { Store } from "../Redux/Store"

export default function QuantityModal({ product, isOpen, setIsOpen }) {

    const styles = useStyles()
    const { state, dispatch } = useContext(Store)
    const { orderItems } = state.order
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setQuantity(1)
            }, 200);
        }
    }, [isOpen])

    const closeHandler = () => {
        setIsOpen(false)
    }

    const addToOrderHandler = () => {
        addToOrder(dispatch, { ...product, quantity })
        setIsOpen(false)
    }

    const cancelOrRemoveFromOrderHandler = () => {
        removeFromOrder(dispatch, product)
        setIsOpen(false)
    }
    
    return (
        <Dialog
            maxWidth='sm'
            fullWidth={true}
            open={isOpen}
            onClose={closeHandler}
        >
            <DialogTitle className={styles.center}>
                Add {product.name}
            </DialogTitle>
            <Box className={`${styles.row} ${styles.center}`}>
                <Button
                    variant='contained'
                    color='primary'
                    disabled={quantity === 1}
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                    <Remove />
                </Button>
                <TextField 
                    inputProps={{ className: styles.largeInput }}
                    InputProps={{
                        bar: 'true',
                        inputProps: { className: styles.largeInput }
                    }}
                    className={styles.largeNumber}
                    type='number'
                    variant='filled'
                    min={1}
                    value={quantity}
                />
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => setQuantity(quantity + 1)}
                >
                    <Add />
                </Button>
            </Box>
            <Box className={`${styles.row} ${styles.around}`}>
                <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    className={styles.largeButton}
                    onClick={cancelOrRemoveFromOrderHandler}
                >
                    {orderItems.find(item => item.name === product.name)
                    ? 'Remove From Order'
                    : 'Cancel'}
                </Button>
                <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    className={styles.largeButton}
                    onClick={addToOrderHandler}
                >
                    ADD To Order
                </Button>
            </Box>
        </Dialog>
    )
}
