import classNames from "classnames/bind";
import styles from "./CardPostLayout.module.scss";
const cx = classNames.bind(styles);

import Link from "next/link";
import PostSliderLayout from "../Slider/PostSliderLayout";

export interface CardPostLayoutProps {}

const data = {
    author: {
        name: "hoangbao0201",
        avatar: {
            url: "https://res.cloudinary.com/djrbd6ftt/image/upload/v1671084245/hoba-web/avatar/avatar-default-2_tmhleu.jpg",
            public_id: "hoba-web/avatar/avatar-default-2_tmhleu.jpg",
        },
    },
    content: {
        text: "",
        images: [
            {
                url: "https://res.cloudinary.com/djrbd6ftt/image/upload/v1671114015/hoba-web/post-images/319005973_484073633711200_3245131900487081441_n_pc2mqh.jpg",
                public_id: "",
            },
            {
                url: "https://res.cloudinary.com/djrbd6ftt/image/upload/v1671114016/hoba-web/post-images/318961815_700354774753403_2923789161523616319_n_uvt3xx.jpg",
                public_id: "",
            },
            {
                url: "https://res.cloudinary.com/djrbd6ftt/image/upload/v1671114015/hoba-web/post-images/319322379_2189521184588376_7227291141648726782_n_qvpuhp.jpg",
                public_id: "",
            },
            {
                url: "https://res.cloudinary.com/djrbd6ftt/image/upload/v1671114015/hoba-web/post-images/319119788_233108139050796_350200225400317452_n_nmzp7a.jpg",
                public_id: "",
            },
            {
                url: "https://res.cloudinary.com/djrbd6ftt/image/upload/v1671114015/hoba-web/post-images/319506918_1241159693129180_773097323842336567_n_rsd5ui.jpg",
                public_id: "",
            },
            {
                url: "https://res.cloudinary.com/djrbd6ftt/image/upload/v1671114015/hoba-web/post-images/318974712_1277019439539641_3114040973139100477_n_eghj2v.jpg",
                public_id: "",
            },
        ],
    },
};

const CardPostLayout = () => {
    return (
        <>
            <div className={cx("card")}>
                <div className={cx("head")}>
                    <img
                        className={cx("avatar")}
                        alt="avatar"
                        src={`https://res.cloudinary.com/djrbd6ftt/image/upload/w_150,c_fill,ar_1:1,g_auto,r_max/${data.author.avatar.public_id}`}
                    />
                    <div className={cx("grid-info")}>
                        <Link
                            className={cx("link-name")}
                            href={`/user/${data.author.name}`}
                        >
                            <h4 className={cx("name")}>hoangbao0201</h4>
                        </Link>
                        <div className={cx("time")}>3 ngày trước</div>
                    </div>
                </div>
                <div className={cx("content")}>
                    <div className={cx("grid-text")}>
                        <span className={cx("text")}>
                            Cologne you were such a beautiful city! I had so
                            much fun at the Christmas market Our BLINKs help
                            beat the cold! I can't wait to be back to see you
                            all . Love you
                        </span>
                    </div>
                    <div className={cx("group-images")}>
                        <PostSliderLayout data={data} />
                        {/* <div className={cx("image")} style={{backgroundImage: "URL(https://res.cloudinary.com/djrbd6ftt/image/upload/v1671108272/hoba-web/post-images/319550143_3310426859199733_3063173541893685907_n_mvaeia.jpg)"}} /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardPostLayout;
