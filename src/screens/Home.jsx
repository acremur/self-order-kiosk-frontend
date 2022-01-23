import { 
    Box, 
    Card, 
    CardActionArea, 
    Typography 
} from "@material-ui/core";
import { TouchApp } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useStyles} from '../utils/styles'

export default function Home() {

    const styles = useStyles()
    let navigate = useNavigate()
    
    return (
        <div>
            <Card>
                <CardActionArea onClick={() => navigate('/choose')}>
                    <Box className={`${styles.root} ${styles.red}`}>
                        <Box className={`${styles.main} ${styles.center}`}>
                            <Typography component='h6' variant='h6'>
                                Fast & Easy
                            </Typography>
                            <Typography component='h1' variant='h1'>
                                Order <br /> & pay <br /> here
                            </Typography>
                            <TouchApp fontSize="large" />
                        </Box>
                        <Box className={`${styles.green} ${styles.center}`}>
                            <Logo large />
                            <Typography component='h5' variant='h5'>
                                Touch to start
                            </Typography>
                        </Box>
                    </Box>
                </CardActionArea>
            </Card>
        </div>
    )
}
