import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './main.module.scss'
import Logo from './logo-white'

const Header = () => (
  <header className={styles.header} >
    <div className={styles.logoBox}>
      <Logo />
    </div>
  </header>
)

export default Header
