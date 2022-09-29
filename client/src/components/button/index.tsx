import { NextPage } from 'next'
import styles from '../../../styles/Splash.module.css'

const Button: NextPage = () => {
    return (
        <div>
            <div className={styles.button}>
                <svg className={styles.svg} preserveAspectRatio="none">
                    <rect className={styles.rect} x="0" y="0" width="100%" height="100%" />
                    <text x="50" y="50">Hello</text>
                </svg>
            </div>
        </div>
    )
}

export default Button