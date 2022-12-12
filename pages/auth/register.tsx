import classNames from 'classnames/bind'
import styles from '../../styles/Register.module.scss';
const cx = classNames.bind(styles);

import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { iconFacebook, iconGithub, iconGoogle } from '../../public/icons';
import { useRouter } from 'next/router';
import useBreadcrumbs from "../../hooks/useBreadcrumbs"
import BreadcrumbLayout from '../../components/Layout/BreadcrumbLayout';
import { ChangeEvent, useState } from 'react';

export interface RegisterProps {}
const Register = () => {
    const [dataForm, setDataForm] = useState({
        fullName: "",
        username: "",
        password: "",
        rePassword: ""
    })

    const router = useRouter();
    const newRouter = useBreadcrumbs(router)

    const eventChangeValueInput = (e : ChangeEvent<HTMLInputElement>) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    console.log(dataForm)

    
    return (
        <>
            <Head>
                <title>Register - HoBa</title>
            </Head>

            <main>
                <Header />
                <div className={cx("wrapper")}>
                    <div className={cx("container")}>

                        <BreadcrumbLayout data={newRouter}/>
                        
                        <div className={cx("content-auth")}>

                            <form className={cx("form-register")}>

                                <div className={cx("form-header")}>
                                    <div className={cx("header-title")}>
                                        <span className={cx("header-under-line")}></span> Đăng kí
                                    </div>
                                </div>

                                <div className={cx("form-group")}>
                                    <div className={cx("form-title")}>Họ và tên</div>
                                    <div className={cx("form-input")}>
                                        <input value={dataForm.fullName} name="fullName" onChange={eventChangeValueInput}/>
                                    </div>
                                </div>
                                <div className={cx("form-group")}>
                                    <div className={cx("form-title")}>Tài khoản</div>
                                    <div className={cx("form-input")}>
                                        <input value={dataForm.username} name="username" onChange={eventChangeValueInput}/>
                                    </div>
                                </div>
                                <div className={cx("form-group")}>
                                    <div className={cx("form-title")}>Mật khẩu</div>
                                    <div className={cx("form-input")}>
                                        <input type="password" value={dataForm.password} name="password" onChange={eventChangeValueInput}/>
                                    </div>
                                </div>
                                <div className={cx("form-group")}>
                                    <div className={cx("form-title")}>Nhập lại mật khẩu</div>
                                    <div className={cx("form-input")}>
                                        <input type="password" value={dataForm.rePassword} name="rePassword" onChange={eventChangeValueInput}/>
                                    </div>
                                </div>

                                <div className={cx("form-action")}>
                                    <input id="inputMemo" type="checkbox"/>
                                    <label className={cx("text-checkInput")} htmlFor="inputMemo">Ghi nhớ đăng nhập</label>
                                </div>

                                <div className={cx("form-group-button")}>
                                    <div className={cx("button-auth", "auth-submit-form")}>
                                        Đăng kí
                                    </div>
                                </div>

                                <div className={cx("form-devider")}>
                                    <div className={cx("text")}>Đăng nhập bằng</div>
                                    <div className={cx("devider-line")}></div>
                                </div>

                                <div className={cx("form-group-button", "login-with-social")}>
                                    <div className={cx("button-auth", "auth-google")}>
                                        <span className={cx("grid-icon")}>{iconGoogle}</span>Google
                                    </div>
                                    <div className={cx("button-auth", "auth-facebook")}>
                                        <span className={cx("grid-icon")}>{iconFacebook}</span>Facebook
                                    </div>
                                    <div className={cx("button-auth", "auth-github")}>
                                        <span className={cx("grid-icon")}>{iconGithub}</span>Github
                                    </div>
                                </div>

                            </form>

                        </div>
                        <div className={cx("content-side")}></div>

                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Register;
