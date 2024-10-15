import style from './header.module.css'
const Header = () => {
    return (
        <div className={style.header}>
            <p className={style.logo}> LandingPage.X</p>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a> </li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
    )
}
export default Header;