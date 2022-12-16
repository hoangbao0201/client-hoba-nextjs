import classNames from "classnames/bind";
import styles from "./PostSliderLayout.module.scss";
const cx = classNames.bind(styles);

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper as SwiperType, Pagination, Navigation, Parallax } from "swiper";
import { iconHeartFull, iconNext, iconPrev } from "../../../../public/icons";

export interface PostSliderLayoutProps {
    data?: any
    handleHeartPost?: any
    isHeart?: any
}

const StyledSwipper = {
    "--swiper-pagination-color": "#ffff",
}

const PostSliderLayout = ({ data, isHeart, handleHeartPost } : PostSliderLayoutProps) => {
    const [isIconHeart, setIsIconHeart] = useState(false);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const swiperRef = useRef<SwiperType>();

    const eventIconHeartPost = () => {

        // Heart Post
        if(!isHeart) {
            handleHeartPost();
        }

        setIsIconHeart(true);
        setTimeout(() => {
            setIsIconHeart(false);
        }, 1200);
    }

    const listImages = data.content.images.map((image: any, index: any) => {
        return (
            <SwiperSlide key={index} onDoubleClick={eventIconHeartPost}>
                <div className={cx("grid-heart", `${isIconHeart && "show"}`)}>
                    {iconHeartFull}
                </div>
                <div
                    className={cx("image")}
                    style={{ backgroundImage: `URL(${image.url})` }}
                />
            </SwiperSlide>
        );
    });

    return (
        <div>
            <Swiper
                style={{}}
                modules={[Pagination]}
                slidesPerView={1}
                loop={true}
                pagination={{
                    // dynamicBullets: true,
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {listImages}
            </Swiper>

            <div className={cx("button-prev")} onClick={() => swiperRef.current?.slidePrev()}>
                {iconPrev}
            </div>
            <div className={cx("button-next")} onClick={() => swiperRef.current?.slideNext()}>
                {iconNext}
            </div>

        </div>
    );
};

export default PostSliderLayout;
