import classNames from 'classnames/bind'
import styles from '../../../styles/PostDetail.module.scss';
const cx = classNames.bind(styles);

import Head from 'next/head';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import BreadcrumbLayout from '../../../components/Layout/BreadcrumbLayout';
import { useRouter } from 'next/router';
import useBreadcrumbs from '../../../hooks/useBreadcrumbs';
import styled from 'styled-components';
import { iconFacebook, iconTwitter } from '../../../public/icons';

export interface DetailProps {}

const StyledGridAvatar = styled.div`
`

const Detail = () => {

    const router = useRouter();
    const newRouter = useBreadcrumbs(router)

    return (
        <div>
            <Head>
                <title>Home - HoBa</title>
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

                        <BreadcrumbLayout data={newRouter}/>

                        <div className={cx("content")}>

                            <div className={cx("posts-content", "dev-col-8")}>
    
                                <h2 className={cx("header-title")}>Mẫu đơn xin cấp lại căn cước công dân bị mất mới 2022</h2>
    
                                <div className={cx("grid-info")}>

                                    <div className={cx("info-user")}>

                                        <StyledGridAvatar>
                                            <img src='/images/avatar-default-2.png' className={cx("user-avatar")}/>
                                        </StyledGridAvatar>
                                        <span> by </span>
                                        <span className={cx("user-name")}>Nguyễn Hoàng Bảo</span>
                                        <span> &#8212; </span>
                                        <span className={cx("create-at")}> Tháng Sáu 23, 2022 </span>

                                    </div>

                                    <div className={cx("info-posts")}>

                                        <div className={cx('grid-share')}>
                                            <div>664</div>
                                            <span>SHARE</span>
                                        </div>
                                        <div className={cx('grid-views')}>
                                            <div>5.1k</div>
                                            <span>VIEWS</span>
                                        </div>

                                        <div className={cx("group-button")}>
                                            <div className={cx("button-share", "share-facebook")}>
                                                <span className={cx("grid-icon")}>{iconFacebook}</span>
                                                <span className={cx("text")}>Chia sẽ với Facebook</span>
                                            </div>
                                            <div className={cx("button-share", "share-twitter")}>
                                                <span className={cx("grid-icon")}>{iconTwitter}</span>
                                                <span className={cx("text")}>Chia sẽ với Twitter</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className={cx("content-document")}>
                                        Xin chào Luật sư X, do bị cướp giật ví và trong đấy có các giấy tờ quan trọng như bằng lái xe, thẻ ngân hàng, căn cước công dân,… Bây giờ muốn xin cấp lại căn cước công dân tôi cần phải làm thủ tục gì? Mẫu đơn xin cấp lại căn cước công dân ra sao? Xin được tư vấn. Chào bạn, căn cước công dân là một trong những loại giấy tờ chứng minh nhân thông quan trọng và bắt buộc phải có. Nhưng nếu không may làm mất thì có thể làm lại không? Mẫu đơn xin cấp lại căn cước công dân bị mất 2022 như thế nào? Hãy cùng Luật sư X tìm hiểu nhé.
                                        Căn cứ pháp lý hủ tục cấp thẻ CCCD là ảnh màu, phông nền trắng, chụp chính diện, đầu để trần, rõ mặt, rõ hai tai, không đeo kính; trang phục, tác phong nghiêm túc, lịch sự.
                                    </div>

                                </div>
    
                            </div>
    
                            <div className={cx("sidebar-content", "dev-col-4")}>
                                Sidebar
                            </div>

                        </div>

                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default Detail;
