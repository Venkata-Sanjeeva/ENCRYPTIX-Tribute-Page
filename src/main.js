import MainImage from "./Images/Main-Image.jpg";
import Image2 from "./Images/Image2.jpeg";
import Image3 from "./Images/Image3.jpeg";

import styles from "./styles.module.css";
// import "./Images/Main-Image.jpg";

function Main() {
    return(
        <>
            <section className={styles.main}>
                <a className={styles.title} href="https://en.wikipedia.org/wiki/Dwayne_Johnson" target="_blank">Dwyane <b>The Rock</b> Johnson</a>
                <p className={styles.subTitle1}>
                    Wrestler | Actor | BusinessMan | Film Producer 
                </p>
                <div className={styles.imgsDiv}>
                    {/* <img className={styles.Image2} src={Image2} alt="Formal"></img> */}
                    {/* <img className={styles.mainImg} src={MainImage} alt="Formal"></img> */}
                    {/* <img className={styles.Image3} src={Image3} alt="Formal"></img> */}
                </div>
                <div className={styles.details}>
                <p className={styles.subTitle2}>
                    Here is the Time Line about <b>The Rock</b>.
                </p>
                    <ul className={styles.list}>
                        <li>
                        <b>1990's</b> :- Widely regarded as one of the greatest professional wrestlers of all time, he was integral to the development and success of the World Wrestling Federation (WWF, now WWE) during the Attitude Era, an industry boom period in the late 1990s and early 2000s.
                        </li>
                        <li>
                        Johnson wrestled for the WWF full-time for eight years before pursuing an acting career. His films have grossed over $3.5 billion in North America and over $10.5 billion worldwide, making him one of the world's highest-grossing and highest-paid actors.
                        </li>
                        <li>
                        <b>2001</b> :- Johnson's first film role was in The Mummy Returns (2001). The next year, he played his first leading role in the action fantasy film The Scorpion King.
                        </li>
                        <li>
                            <b>2007</b> :- He has since starred in family films The Game Plan (2007), Race to Witch Mountain (2009), Tooth Fairy (2010), Journey 2: The Mysterious Island (2012), G.I. Joe: Retaliation (2013), Hercules (2014). He also starred in the action comedy films Get Smart (2008). His role as Luke Hobbs in the Fast & Furious films, beginning with Fast Five (2011), helped the franchise become one of the highest-grossing in film.
                        </li>
                        <li>
                        <b>2015</b> :- San Andreas (2015), Central Intelligence (2016), Jumanji: Welcome to the Jungle (2017) and  Baywatch (2017), Rampage (2018) and Skyscraper (2018), Jumanji: The Next Level (2019), Jungle Cruise (2021) and Red Notice (2021). He joined the DC Extended Universe playing the title role in Black Adam (2022).
                        </li>
                    </ul>
                    <p className={styles.link}>If you have more time, know more about <b><a href="https://en.wikipedia.org/wiki/Dwayne_Johnson" target="_blank">THE ROCK</a></b></p>
                </div>
            </section>
        </>
    );
}

export default Main;