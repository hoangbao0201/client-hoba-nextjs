import classNames from "classnames/bind";
import Link from "next/link";
import styled from "styled-components";
import { iconGithub, iconSearch } from "../../public/icons";
import styles from "./Header.module.scss";
import Navbar from "./Navbar";
const cx = classNames.bind(styles);

export interface HeaderProps {}

const GridIcon = styled.label`
    cursor: pointer;
    padding: 0px 10px;

    > svg {
        width: 18px;
        height: 18px;
        fill: #666;
        display: block;
    }
`

const Header = () => {
    return (
        <div className={cx("wrapper")}>

            <div className={cx("navbar-info")}>
                <div className={cx("info-container")}>
                    <div className={cx("info-detail")}>
                        <div className={cx("detail-phone")}>
                            Hotline: 0377138449
                        </div>
                        <Link href="https://github.com/hoangbao0201" target="_blank">
                            <div className={cx("detail-github")}>
                                {iconGithub}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx("container")}>
                
                <div className={cx("content-item")}>
                    <Navbar />
                    <Link className={cx("logo")} href="/">
                        Logo
                    </Link>
                </div>
                <div className={cx("content-search")}>
                    <GridIcon htmlFor="inputSearch">
                        {iconSearch}
                    </GridIcon>
                    <input id="inputSearch" className={cx("input-search")} type="input" placeholder="Tìm kiếm"/>
                </div>

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
