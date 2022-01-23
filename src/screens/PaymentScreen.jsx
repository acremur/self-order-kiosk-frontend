import { 
    Box, 
    Button, 
    CircularProgress, 
    Typography 
} from "@material-ui/core"
import { useNavigate } from "react-router-dom"
import Logo from '../components/Logo'
import { useStyles } from "../utils/styles"

export default function Choose() {

    const styles = useStyles()
    let navigate = useNavigate()
    
    return (
        <Box className={`${styles.root} ${styles.navy}`}>
            <Box className={`${styles.main} ${styles.center}`}>
                <Box>
                    <Logo large />
                    <Typography
                        gutterBottom
                        className={styles.title}
                        variant='h3'
                        component='h3'
                    >
                        Please follow the instructions on the PIN pad
                    </Typography>
                    <CircularProgress />
                </Box>
            </Box>
            <Box className={`${styles.center} ${styles.space}`}>
                <Button
                    onClick={() => navigate('/complete')}
                    variant="contained"
                    color='primary'
                    className={styles.largeButton}
                >
                    Complete Order
                </Button>
            </Box>
        </Box>
    )
}