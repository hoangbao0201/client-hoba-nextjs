import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./Header.module.scss";
import Navbar from "./Navbar";
const cx = classNames.bind(styles);

export interface HeaderProps {}
const Header = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                
                <div className={cx("content-item")}>
                    <Navbar />
                    <a className={cx("logo")} href="/">
                        Logo
                    </a>
                </div>
                <div className={cx("content-item")}></div>

                <div className={cx("content-accout")}>
                    <Link href="/auth/login">
                        <div className={cx("accout-button", "button-login")}>
                            Đăng nhập
                        </div>
                    </Link>
                    <Link href="/auth/register">
                        <div className={cx("accout-button", "button-register")}>
                            Đăng kí
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Header;
