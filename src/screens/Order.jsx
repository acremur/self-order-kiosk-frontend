import { useContext, useEffect, useState } from 'react'
import { 
    Avatar,
    Box, 
    Button, 
    Card, 
    CardActionArea, 
    CardContent, 
    CardMedia, 
    CircularProgress, 
    Grid, 
    List, 
    ListItem,
    Typography,
} from "@material-ui/core"
import { useStyles } from '../utils/styles'
import { Store } from '../Redux/Store'
import { 
    clearOrder, 
    listCategories, 
    listProducts, 
} from '../Redux/actions'
import Logo from '../components/Logo'
import { Alert } from '@material-ui/lab'
import { useNavigate } from 'react-router-dom'
import QuantityModal from '../components/QuantityModal'

export default function Order() {

    const styles = useStyles()
    const { state, dispatch } = useContext(Store)
    const { categories, loading, error } = state.categoryList
    const { products, loading: loadingProducts, error: errorProducts } = state.productList
    const { orderItems, itemsCount, totalPrice, taxPrice, orderType } = state.order
    const [categoryName, setCategoryName] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [product, setProduct] = useState({})
    let navigate = useNavigate()

    useEffect(() => {
        if (!categories) {
            listCategories(dispatch)
        } else {
            listProducts(dispatch, categoryName)
        }
    }, [dispatch, categories, categoryName])

    const categoryClickHandler = name => {
        setCategoryName(name)
        listProducts(dispatch, categoryName)
    }

    const previewOrderHandler = () => {
        navigate('/review')
    }

    const productClickHandler = product => {
        setProduct(product)
        setIsOpen(true)
    }
    
    return (
        <Box className={styles.root}>
            <QuantityModal product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
            <Box className={styles.main}>
                <Grid container>
                    <Grid item sm={2} md={2}>
                        <List>
                            {loading ? (
                                <CircularProgress />
                            ) : error ? (
                                <Alert severity='error'>{error}</Alert>
                            ) : (
                                <>
                                    <ListItem onClick={() => categoryClickHandler('')} button>
                                        <Logo />
                                    </ListItem>
                                    {categories.map(category => (
                                        <ListItem 
                                            onClick={() => categoryClickHandler(category.name)}
                                            button 
                                            key={category._id}
                                        >
                                            <Avatar src={category.image} />
                                        </ListItem>
                                    ))}
                                </>
                            )}
                        </List>
                    </Grid>
                    <Grid item sm={10} md={10}>
                        <Typography
                            gutterBottom
                            className={styles.title}
                            variant='h2'
                            component='h2'
                        >
                            {categoryName || 'Main Menu'}
                        </Typography>
                        <Grid container spacing={1}>
                            {loadingProducts ? (
                                <CircularProgress />
                            ) : errorProducts ? (
                                <Alert severity='error'>{errorProducts}</Alert>
                            ) : (
                                products.map(product => (
                                    <Grid key={product._id} item sm={6} md={6}>
                                        <Card 
                                            className={styles.card}
                                            onClick={() => productClickHandler(product)}
                                        >
                                            <CardActionArea>
                                                <CardMedia 
                                                    component='img'
                                                    alt={product.name}
                                                    image={product.image}
                                                    className={styles.media}
                                                />
                                            </CardActionArea>
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant='body2'
                                                    color='textPrimary'
                                                    component='p'
                                                >
                                                    {product.name}
                                                </Typography>
                                            </CardContent>
                                            <Box className={styles.cardFooter}>
                                                <Typography
                                                    variant='body2'
                                                    color='textSecondary'
                                                    component='p'
                                                >
                                                    {product.calorie} Cal
                                                </Typography>
                                                <Typography
                                                    variant='body2'
                                                    color='textPrimary'
                                                    component='p'
                                                >
                                                    {product.price}€
                                                </Typography>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Box>
                    {itemsCount > 0 && (
                        <Box className={`${styles.bordered} ${styles.space}`}>
                            My Order - {orderType} | Tax: {taxPrice}€ | Total: {totalPrice}€ | Items: {itemsCount}
                        </Box>
                    )}
                    <Box className={`${styles.row} ${styles.around}`}>
                        <Button
                            variant='contained'
                            color='primary'
                            className={styles.largeButton}
                            onClick={() => {
                                clearOrder(dispatch)
                                navigate('/')
                            }}
                        >
                            Cancel Order
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            className={styles.largeButton}
                            disabled={orderItems.length === 0}
                            onClick={previewOrderHandler}
                        >
                            Done
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}