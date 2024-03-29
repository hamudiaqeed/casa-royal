import React from "react";
import './about.styles.scss';
import nmc from '../../assets/nmc.jpg';
import acm from '../../assets/acm.png';
import bluemarine from '../../assets/bluemarine.PNG';
import emiliana from '../../assets/emiliana.png';
import grandeco from '../../assets/grandeco.PNG';
import soudal from '../../assets/soudal.PNG';
import wallfix from '../../assets/wallfix.png';
import mida from '../../assets/mida.PNG';
import roberto from '../../assets/roberto.png';

const About = () => {
    return (
        <div className="about">
            <div className="about-1">
                <h2>Despre noi</h2>
                <p>Cream standarde si trenduri din 2007. Nu-i urma pe altii. Defineste-ti propriul stil impreuna cu Casa Royal!</p>
                <p>Inca de la infiintarea sa, in 2007, Casa Royal este furnizorul preferat de decoratiuni interioare si exterioare, tapet, mocheta si corpuri de iluminat de lux atat pentru persoane fizice, cat si pentru designeri si arhitecti.</p>
                <p>An de an, Casa Royal aduce in casele si cladirile comerciale romanesti colectii de top ale designerilor si producatorilor internationali. Cu ajutorul produselor noastre se pot crea interioare si exterioare unice in tara – totul la preturi accesibile.</p>
                <p>
                  Casa Royal este distribuitorul roman al unor branduri internationale sonore ca Roberto Cavalli Home, Blumarine Home, Industrie Emiiana Parati, Design ID, Adi, Tekko, ACM, MATERIA, Zambaiti Parati - Murella, Sirpi, Selecta Parati - Portofino, Grandeco Wallfashion, Graham & Brown, si multe altele. Ne dorim ca prezenta noastra pe piata romaneasca sa ii inspire pe clienti sa aprecieze calitatea, luxul si unicitatea designului la justa lor valoare.
                </p>
                <h2>Partenerii nostri</h2>
                <p>Distribuim urmatoarele branduri care au cucerit piata internationala:</p>
            </div>
            <div className="partners">
                <div className="partners-list">
                    <div>
                        <img src={nmc} alt="nmc logo" />
                    </div>
                    <div>
                        <img src={mida} alt="mida logo" />
                    </div>
                    <div>
                        <img src={acm} alt="acm italy logo" />
                    </div>
                    <div>
                        <img src={emiliana} alt="emiliana logo" />
                    </div>
                    <div>
                        <img src={soudal} alt="soudal logo" />
                    </div>
                    <div>
                        <img src={wallfix} alt="wallfix logo" />
                    </div>
                    <div>
                        <img src={grandeco} alt="grandeco logo" />
                    </div>
                    <div>
                        <img src={roberto} alt="roberto logo" />
                    </div>
                    <div>
                        <img src={bluemarine} alt="bluemarine logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;