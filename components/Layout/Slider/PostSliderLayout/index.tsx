import classNames from "classnames/bind";
import styles from "./PostSliderLayout.module.scss";
const cx = classNames.bind(styles);

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper as SwiperType, Pagination, Navigation } from "swiper";
import { iconNext, iconPrev } from "../../../../public/icons";

export interface PostSliderLayoutProps {}
const PostSliderLayout = ({ data }: any) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const swiperRef = useRef<SwiperType>();

    const listImages = data.content.images.map((image: any, index: any) => {
        return (
            <SwiperSlide key={index}>
                <div
                    className={cx("image")}
                    style={{ backgroundImage: `URL(${image.url})` }}
                />
            </SwiperSlide>
        );
    });

    // const handleRef = (e: any) => {
    //     console.log(navigationPrevRef)
    // }

    return (
        <div>
            <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
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
