import React, {Component} from 'react';
import s from './NavMenuMobile.module.css';
import {Link} from "react-scroll";




class NavMenuMobile extends Component {
    state ={
        isOpen : false
    }


    addClassName = (e) =>{
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const menuNavActive = this.state.isOpen ? `${s.menu_nav} ${s.menu_nav_active}` : `${s.menu_nav}`;
        const menuBtnActive = this.state.isOpen ? `${s.menu_btn} ${s.menu_btn_active}` : `${s.menu_btn}`;
        return (
            <div className={s.section}>
                <div className={s.menu_block}>
                    <nav className={menuNavActive}>
                        <Link
                            className={s.nav__link}
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            ПОРТФОЛИО
                        </Link>
                        <Link
                            className={s.nav__link}
                            activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            ОБО МНЕ
                        </Link>
                        <Link
                            className={s.nav__link}
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            УСЛУГИ
                        </Link>
                        <Link
                            className={s.nav__link}
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            КОНТАКТЫ
                        </Link>

                    </nav>
                    <a href="#" className={menuBtnActive} onClick={this.addClassName}>
                        <span></span>
                    </a>
                </div>
            </div>
        );
    }
}

export default NavMenuMobile;
