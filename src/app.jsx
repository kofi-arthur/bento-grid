import styles from './styles/app.module.css'

import user from './assets/user.png'
import user1 from './assets/pp01.jpg'
import user2 from './assets/pp02.jpg'
import user3 from './assets/pp03.jpg'
import user4 from './assets/pp04.jpg'

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

                <div className={styles.todo}>
                    <div className={styles.todoHeader}>
                        <h2>Today's To Do</h2>
                        <span className={styles.date}>September 12</span>
                    </div>

                    <div className={styles.flipContainer}>
                        <div className={styles.flip}><p>Scheduled</p></div>
                        <div className={styles.flip}><p>Notes</p></div>
                    </div>

                    <section className={styles.list}>
                        <div className={styles.listItem}>
                            <h3 className={styles.title}>Jake's design</h3>
                            <span className={styles.time}>9:00 - 09:45</span>
                        </div>

                        <div className={styles.listItem}>
                            <h3 className={styles.title}>Martha's appointment</h3>
                            <span className={styles.time}>11:30 - 12:45</span>
                        </div>
                    </section>
                </div>
            </section>

            <section className={styles.bentoBox}>
                <div className={styles.messages}>
                    <div className={styles.peopleList}>
                        <div className={styles.profile}>
                            <img src={user1} alt="" />
                        </div>
                        <div className={styles.profile}>
                            <img src={user2} alt="" />
                        </div>
                        <div className={styles.profile}>
                            <img src={user3} alt="" />
                        </div>
                        <div className={styles.profile}>
                            <img src={user4} alt="" />
                        </div>
                    </div>

                    <div className={styles.info}>
                        <h3>27 New Messages</h3>
                        <span>• 12 People</span>
                    </div>
                </div>

                <div className={styles.notification}>
                    <div className={styles.header}>
                        <div className={styles.greeting}>
                            <span>Welcome back !</span>
                            <h2>Themanwitha Mask</h2>
                        </div>

                        <div className={styles.profile}>
                            <img src={user} alt="" />
                        </div>
                    </div>

                    <div className={styles.notificationList}>
                        <div className={styles.header}>
                            <span className={styles.lastSeen}>Yesterday, 10:12 am</span>
                            <button className={styles.markAsRead}>Mark as read</button>
                        </div>

                        <div className={styles.notificationItemContainer}>
                            <div className={styles.notificationItem}>
                                <div className={styles.icon}>
                                    <i className="fal fa-comment"></i>
                                </div>

                                <p>Catch up later this week to review our progress on integrating new ios features into Tailwag ???</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.calendar}>
                    <div className={styles.topHeader}>
                        <span className={styles.day}>Wednesday</span>
                        <h1>Dec 14</h1>
                    </div>

                    <div className={styles.user}>
                        <div className={styles.profile}>
                            <img src={user} alt="" />
                        </div>
                        <div className={styles.info}>
                            <h3>Happy Birthday!</h3>
                            <span>S. Lusan</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.bentoBox}>
                <div className={styles.friends}>
                    <h3 className={styles.title}>Find Friends</h3>

                    <div className={styles.actionContainer}>
                        <div className={styles.online}>
                            <div className={styles.profile}><img src={user1} alt="" /></div>
                            <div className={styles.profile}><img src={user2} alt="" /></div>
                            <div className={styles.profile}><img src={user3} alt="" /></div>
                            <div className={styles.profile}><span>+2</span></div>
                        </div>

                        <div className={styles.addFriends}>
                            <input type="text" placeholder='Add Friends' />
                            <button><i className="far fa-plus"></i></button>
                        </div>
                    </div>

                    <hr />

                    <div className={styles.miniTitle}>
                        <h3>Other members</h3>
                        <span>27 friends</span>
                    </div>

                    <div className={styles.friendList}>
                        <div className={styles.friend}>
                            <div className={styles.userInfo}>
                                <div className={styles.profile}>
                                    <img src={user1} alt="" />
                                </div>

                                <div className={styles.info}>
                                    <h3>William Moore</h3>
                                    <a href="mailto:william@cloud.com">william@cloud.com</a>
                                </div>
                            </div>

                            <button><i className="far fa-plus"></i></button>
                        </div>

                        <div className={styles.friend}>
                            <div className={styles.userInfo}>
                                <div className={styles.profile}>
                                    <img src={user2} alt="" />
                                </div>

                                <div className={styles.info}>
                                    <h3>Linda Wilson</h3>
                                    <a href="mailto:linda22@cloud.com">linda22@cloud.com</a>
                                </div>
                            </div>

                            <button><i className="far fa-plus"></i></button>
                        </div>

                        <div className={styles.friend}>
                            <div className={styles.userInfo}>
                                <div className={styles.profile}>
                                    <img src={user3} alt="" />
                                </div>

                                <div className={styles.info}>
                                    <h3>Patricia Davis</h3>
                                    <a href="mailto:patriciada@cloud.com">patriciada@cloud.com</a>
                                </div>
                            </div>

                            <button><i className="far fa-plus"></i></button>
                        </div>

                        <div className={styles.friend}>
                            <div className={styles.userInfo}>
                                <div className={styles.profile}>
                                    <img src={user4} alt="" />
                                </div>

                                <div className={styles.info}>
                                    <h3>Patricia Davis</h3>
                                    <a href="mailto:patriciada@cloud.com">patriciada@cloud.com</a>
                                </div>
                            </div>

                            <button><i className="far fa-plus"></i></button>
                        </div>
                    </div>

                    <div className={styles.toast}>
                        <p>Request Sent</p>
                        <div className={styles.profile}>
                            <img src={user1} alt="" />
                        </div>
                    </div>
                </div>

                <section className={styles.bentoInnerBox}>
                    <div className={styles.contact}>
                        <div className={styles.addressBox}>
                            <div className={styles.address}>
                                <i className="fas fa-house-blank"></i>
                                <h3>71812 Parison Bla Vasta Gerachvane</h3>
                            </div>

                            <div className={styles.activity}>
                                <div className={styles.circle}>
                                    <div className={styles.innerCircle}></div>
                                </div>
                                <span>4 Active</span>
                            </div>
                        </div>

                        <h3 className={styles.title}>Primary Contact</h3>

                        <div className={styles.primaryContact}>
                            <div className={styles.profile}>
                                <img src={user1} alt="" />

                                <h1>Carol Show</h1>
                            </div>

                            <div className={styles.users}>
                                <img src={user1} alt="" />
                                <img src={user2} alt="" />
                                <img src={user3} alt="" />
                            </div>
                        </div>

                    </div>

                    <section className={styles.miniBentoBox}>
                        <div className={styles.suggestion}>
                            <span className={styles.title}>Siri Suggestions</span>

                            <div className={styles.contactCard}>
                                <div className={styles.profile}>
                                    <img src={user1} alt="" />
                                </div>

                                <h3>Add Safina</h3>
                                <p><span>@saffina28</span> on Instagram</p>
                            </div>

                            <div className={styles.paginationContainer}>
                                <span className={styles.pagination}></span>
                                <span className={styles.pagination}></span>
                                <span className={styles.pagination}></span>
                            </div>
                        </div>

                        <div className={styles.logo}></div>
                    </section>
                </section>
            </section>
        </main>
    )
}
