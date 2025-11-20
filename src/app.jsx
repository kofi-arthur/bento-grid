import styles from './styles/app.module.css'

export default function App() {
    return (
        <main className={styles.bentoLayout}>
            <section className={styles.bentoBox}>
                <div className={styles.comment}></div>

                <div className={styles.todo}></div>
            </section>

            <section className={styles.bentoBox}>
                <div className={styles.messages}></div>

                <div className={styles.notification}></div>

                <div className={styles.calendar}></div>
            </section>

            <section className={styles.bentoBox}>
                <div className={styles.friends}></div>

                <section className={styles.bentoInnerBox}>
                    <div className={styles.contact}></div>

                    <section className={styles.miniBentoBox}>
                        <div className={styles.suggestion}></div>
                        <div className={styles.logo}></div>
                    </section>
                </section>
            </section>
        </main>
    )
}
