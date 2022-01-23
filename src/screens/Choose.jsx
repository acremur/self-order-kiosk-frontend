import { useState, useEffect } from 'react'
import { 
    Box, 
    Fade, 
    Typography 
} from "@material-ui/core"
import Logo from '../components/Logo'
import MyCard from "../components/Card"
import { useStyles } from "../utils/styles"

export default function Choose({ choice }) {

    const styles = useStyles()
    const [election, setElection] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        if (choice === 'order') {
            setElection('order')
            setTitle('Where will you be eating today?')
        }
        if (choice === 'payment') {
            setElection('payment')
            setTitle('Select payment type')
        }
    }, [choice])
    
    return (
        <div>
            <Fade in={true}>
                <Box className={`${styles.root} ${styles.navy}`}>
                    <Box className={`${styles.main} ${styles.center}`}>
                        <Logo large />
                        <Typography 
                            component='h3' 
                            variant='h3'
                            className={styles.center}
                            gutterBottom
                        >
                            {title}
                        </Typography>
                        <Box className={styles.cards}>
                            {election === 'order' ? (
                                <>
                                    <MyCard text={'Eat in'} imgUrl={'eating.png'} method='order' />
                                    <MyCard text={'Take out'} imgUrl={'takeout.png'} method='order' />
                                </>
                            ) : (
                                <>
                                    <MyCard text={'Pay here'} imgUrl={'payhere.png'} method='payment' />
                                    <MyCard text={'At counter'} imgUrl={'atcounter.png'} method='payment' />
                                </>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </div>
    )
}