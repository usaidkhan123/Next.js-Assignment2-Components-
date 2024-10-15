import Header from "./components/header/Header";
import style from './ui.module.css';
import Hero from "./components/body/hero";
import Footer from "./components/footer/footer";
const landingPage = () =>{
  return (
    <div className={style.body}>

    <Header/>
     <Hero/>
     <Footer/>
    </div>
  )
}

export default landingPage;
