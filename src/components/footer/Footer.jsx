import React from 'react';
import css from './footer.module.css';
import Logo from '../../assets/logo.png';
import { SlLocationPin, SlPhone, SlEnvolope, SlLogin, SlUser, SlLink } from "react-icons/sl";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt='logo' />
                <span>Entice</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact us</span>
                    <span className={css.pngLine}>
                        <SlLocationPin className={css.icon} />
                        <span>111 north avenue Orlando, FL 32801</span>
                    </span>

                    <span className={css.pngLine}>
                        <SlPhone className={css.Icon} />
                        <span> 352-206-4415</span>
                    </span>

                    <span className={css.pngLine}>
                        <SlEnvolope className={css.Icon} />
                        <span> support@entice.com</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <SlLogin className={css.icon} />
                        <span>Sign In</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <SlUser className={css.icon} />
                        <span>About us</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <SlLink className={css.icon} />
                        <span>Safety Privacy & Terms</span>
                    </span>
                </div>
            </div>

            <div className={css.copyRight}>
                <span>Copyright @2022 by Entice, Inc</span>
                <span>All rights reserved.</span>
            </div>
        </div>
    </div>
  )
}

export default Footer