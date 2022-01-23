import { useStyles } from "../utils/styles"

export default function Logo({ large }) {

    const styles = useStyles()
    
    return (
        <img 
            src="/images/logo.png" 
            alt="food order" 
            className={large ? styles.largeLogo : styles.logo}
        />
    )
}
