import styles from './styles/app.module.css'

import user from './assets/user.png'

export default function App() {
    return (
        <main className={styles.bentoLayout}>
            <section className={styles.bentoBox}>
                <div className={styles.comment}>
                    <div className={styles.commentHeader}>
                        <div className={styles.profileInfo}>
                            <div className={styles.profile}>
                                <img src={user} alt="" />
                            </div>

                            <div className={styles.userInfo}>
                                <h3>Themanwitha Mask</h3>
                                <a href="mailto:tmwam@example.com">tmwam@example.com</a>
                            </div>

                            <span className={styles.lastSeen}>Yesterday, 10:52 am</span>
                        </div>

                        <div className={styles.actions}>
                            <button><i className="fal fa-send"></i></button>
                            <button><i className="fal fa-trash-can"></i></button>
                        </div>
                    </div>

                    <div className={styles.commentBody}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quaerat architecto dolores itaque neque accusantium. Ullam magni provident ex eaque ea mollitia id sed reiciendis laborum sint itaque quo deserunt, omnis modi beatae quod a</p>
                    </div>

                    <div className={styles.commentAction}>
                        <input type="text" placeholder='Type here...' />

                        <div className={styles.emojiContainer}>
                            <div className={styles.emojiList}>
                                <span className={styles.emoji}>😂</span>
                                <span className={styles.emoji}>❤️‍🔥</span>
                                <span className={styles.emoji}>🔥</span>
                                <span className={styles.emoji}>⚡</span>
                                <span className={styles.emoji}>👍🏽</span>
                            </div>

                            <button className={styles.emojiBtn}>
                                <i className="far fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>

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
