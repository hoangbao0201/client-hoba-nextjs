import classNames from "classnames/bind";
import styles from "./CardPostLayout.module.scss";
const cx = classNames.bind(styles);

import Link from "next/link";
import PostSliderLayout from "../Slider/PostSliderLayout";
import {
    iconCollectionHollow,
    iconCommentHollow,
    iconHeartFull,
    iconHeartHollow,
} from "../../../public/icons";
import { useState } from "react";

export interface CardPostLayoutProps {
    data?: any
}

const CardPostLayout = ({ data } : CardPostLayoutProps) => {
    const [isHeart, setIsHeart] = useState(false);
    const [isHeartAnimation, setIsHeartAnimation] = useState(false);

    const handleHeartPost = () => {
        setIsHeart((value) => !value);
    };

    return (
        <>
            <div className={cx("card")}>
                <div className={cx("head")}>
                    <Link
                        className={cx("link-avatar")}
                        href={`/user/${data.author.name}`}
                    >
                        <img
                            className={cx("avatar")}
                            alt="avatar"
                            src={`https://res.cloudinary.com/djrbd6ftt/image/upload/w_150,c_fill,ar_1:1,g_auto,r_max/${data.author.avatar.public_id}`}
                        />
                    </Link>
                    <div className={cx("grid-info")}>
                        <Link
                            className={cx("link-name")}
                            href={`/user/${data.author.name}`}
                        >
                            <h4 className={cx("name")}>{data.author.name}</h4>
                        </Link>
                        <div className={cx("time")}>3 ngày trước</div>
                    </div>
                </div>
                <div className={cx("content")}>
                    <div className={cx("grid-text")}>
                        <span className={cx("text")}>
                            Cologne you were such a beautiful city! I had so
                            much fun at the Christmas market Our BLINKs help
                            beat the cold! I can&apos;t wait to be back to see you
                            all . Love you
                        </span>
                    </div>
                    <div className={cx("group-images")}>
                        <PostSliderLayout
                            data={data}
                            isHeart={isHeart}
                            handleHeartPost={handleHeartPost}
                        />
                    </div>
                </div>
                <div className={cx("action")}>
                    <div className={cx("grid-event")}>
                        <span
                            className={cx(
                                "action-heart",
                                `${isHeart && "heart"}`,
                            )}
                            onClick={handleHeartPost}
                        >
                            {isHeart ? iconHeartFull : iconHeartHollow}
                        </span>
                        <span className={cx("action-comment")}>
                            {iconCommentHollow}
                        </span>
                        <span className={cx("action-collection")}>
                            {iconCollectionHollow}
                        </span>
                    </div>
                    {/* <div className={cx("grid-comment")}></div> */}
                </div>
            </div>
        </>
    );
};

export default CardPostLayout;
