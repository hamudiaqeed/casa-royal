import React from "react";
import './about.styles.scss';

const About = () => {
    return (
        <div className="about">
            <div className="about-1">
                <h2>Despre noi</h2>
                <p>Inca de la infiintarea sa, in 2007, Casa Royal este furnizorul preferat de decoratiuni interioare si exterioare, tapet, mocheta si corpuri de iluminat de lux atat pentru persoane fizice, cat si pentru designeri si arhitecti.</p>
                <p>An de an, Casa Royal aduce in casele si cladirile comerciale romanesti colectii de top ale designerilor si producatorilor internationali. Cu ajutorul produselor noastre se pot crea interioare si exterioare unice in tara – totul la preturi accesibile.</p>
            </div>
            <div className="about-2">
                <h2>Portofoliul nostru</h2>
                <p>Lasa-te inspirat de cateva dintre lucrarile de care suntem mandri. Apoi contacteaza-ne pentru a te ajuta sa-ti desavarsesti propriul proiect.</p>
                ADAUGA AICI
            </div>
            <div>
                <div className="partners-header">
                    <h2>Partenerii nostri</h2>
                    <p>Distribuim urmatoarele branduri care au cucerit piata internationala:</p>
                </div>
                <div className="partners-list">
                    <div>
                        <h4>Limonta</h4>
                    </div>
                    <div>
                        <h4>Tekko</h4>
                    </div>
                    <div>
                        <h4>Portofino</h4>
                    </div>
                    <div>
                        <h4>Industrie Emiiana Parati</h4>
                    </div>
                    <div>
                        <h4>Graham & Brown</h4>
                    </div>
                    <div>
                        <h4>Zambaiti</h4>
                    </div>
                    <div>
                        <h4>Grandeco</h4>
                    </div>
                    <div>
                        <h4>Roberto Cavalli Home</h4>
                    </div>
                    <div>
                        <h4>Blumarine Home</h4>
                    </div>
                </div>
            </div>
            <p className="about-p">Cream standarde si trenduri din 2007. Nu-i urma pe altii. Defineste-ti propriul stil impreuna cu Casa Royal!</p>
        </div>
    )
}

export default About;