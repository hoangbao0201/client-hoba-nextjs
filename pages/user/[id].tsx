import classNames from 'classnames/bind'
import styles from '../../styles/UserDetail.module.scss';
const cx = classNames.bind(styles);

import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import { iconAddFriend, iconMore } from '../../public/icons';

export interface UserDetailProps {

}

const StyledGridAvatar = styled.div`
    
`

const UserDetail = () => {

    const router = useRouter();
    const newRouter = useBreadcrumbs(router);

    return (
        <div>
            <Head>
                <title>{newRouter[newRouter.length - 1].title} - HoBa</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />
                <div className={cx("wrapper")}>
                    <div className={cx("container")}>
                        <div className={cx("content")}>

                            <div className={cx("header-form")}>

                                <StyledGridAvatar>
                                    <img src='/images/avatar-default-2.png' className={cx("avatar")}/>
                                </StyledGridAvatar>

                                <div className={cx("grid-info")}>

                                    <div className={cx("info-head")}>

                                        <div className={cx("head-name")}>
                                            <span>hoangbao0201</span>
                                            <span className={cx("badge-blue")} />
                                        </div>
                                        <div className={cx("head-action")}>
                                            <div className={cx("button-action", "button-follow")}>
                                                Theo dõi
                                            </div>
                                            <div className={cx("button-action", "button-message")}>
                                                Nhắn tin
                                            </div>
                                            <div className={cx("button-action", "button-more")}>
                                                {iconAddFriend}
                                            </div>
                                            <div className={cx("button-action", "button-more")}>
                                                {iconMore}
                                            </div>
                                        </div>

                                    </div>

                                    <div className={cx("grid-count")}>

                                        <div className={cx('grid-posts')}>
                                            <span className={cx("posts-number")}>1,362</span>
                                            <span>bài viết</span>
                                        </div>
                                        <div className={cx('grid-follow')}>
                                            <span className={cx("follow-number")}>6,7M</span>
                                            <span>người theo dõi</span>
                                        </div>
                                        <div className={cx('grid-watching')}>
                                            <span>Đang theo dõi</span>
                                            <span className={cx("watching-number")}>5</span>
                                            <span>người dùng</span>
                                        </div>

                                    </div>

                                    <div className={cx("grid-description")}>
                                        <span className={cx("description-text")}>Nguyễn Hoàng Bảo</span>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
   )
}

export default UserDetail