import style from './hero.module.css'
const Hero = () => {
    return (
        <div className={style.hero}>
            <section className={style.hero1}>
        <h1 className={style.intro}> <b>We Create <br /> 
        <span className={style.sol}>Solution</span> For <br />
        <span>Your Business</span></b></h1>
        <p className={style.para}><b>Lorem Ipsum is simply dummy text of the printing and.<br/> Lorem Ipsum has been the industry s standard dummy, <br/> when an unknown printer took a galley of type and .</b></p>
     <button className={style.button} >Get  Started</button>
            </section>


           {/* Call to Action section */}


            <section className={style.cta}>
                <h1 className={style.heading}> <u className={style.underline}>Our Services</u></h1>
            <section className={style.marketingbox}>
            <h3 className={style.marketing}> Marketing</h3>
            <p className={style.Services}> Lorem Ipsum is simply dummy text of  <br />the printing and typesetting industry. <br /> Lorem Ipsum has been the industry s <br /> standard dummy text ever since the 1500 <br />when an unknown printer took a galley.</p>
        </section>
        <section className={style.seobox}>
            <h3 className={style.seo}>Seo/Sem</h3>
            <p className={style.Services}> Lorem Ipsum is simply dummy text of  <br />the printing and typesetting industry. <br /> Lorem Ipsum has been the industry s <br /> standard dummy text ever since the 1500 <br />when an unknown printer took a galley.</p>
        </section>
        <section className={style.viralbox}>
            <h3 className={style.seo}>Viral Campaign</h3>
            <p className={style.Services}> Lorem Ipsum is simply dummy text of  <br />the printing and typesetting industry. <br /> Lorem Ipsum has been the industry s <br /> standard dummy text ever since the 1500 <br />when an unknown printer took a galley.</p>
        </section>
            </section>
    </div>
        
    )
}
export default Hero;
