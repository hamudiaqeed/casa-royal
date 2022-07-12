import React from "react";
import './contact.styles.scss';
import adresa1 from '../../assets/adresa1.PNG';
import adresa24 from '../../assets/adresa24.PNG';
import adresa3 from '../../assets/adresa3.PNG';
import adresa5 from '../../assets/adresa5.PNG';

const Contact = () => {
    return (
        <div className="contact">
            <div className="locations">
                <div>
                    <div>
                        <h2>BUCURESTI - SHOWROOM NICOLAE TITULESCU</h2>
                        <p>Adresa: Sos. Nicolae Titulescu nr.121</p>
                        <p>Telefon: 0736 948 334</p>
                        <p>Email: catalin.slabu@casaroyal.ro</p>
                    </div>
                    <img src={adresa1} alt="casa royal locatie" />
                </div>
                <div>
                    <div>
                        <h2>BUCURESTI - SHOWROOM EXPO TOP CONSTRUCT</h2>
                        <p>Adresa: Valea Cascadelor nr. 23, sector 6 , stand A7O7</p>
                        <p>Persoana contact: Mihai Neacsu</p>
                        <p>Telefon: 0730 103 333</p>
                        <p>Email: mihai.neacsu@casaroyal.ro</p>
                    </div>
                    <img src={adresa24} alt="casa royal locatie" />
                </div>
                <div>
                    <div>
                        <h2>BUCURESTI - SHOWROOM HOME&DESIGN MALL</h2>
                        <p>Adresa: Bulevardul Ghencea nr.126-132, sector 6</p>
                        <p>Persoana contact: George Stanciu</p>
                        <p>Telefon: 0735 092 222</p>
                        <p>Email: george.stanciu@casaroyal.ro</p>
                    </div>
                    <img src={adresa3} alt="casa royal locatie" />
                </div>
                <div>
                    <div>
                        <h2>BUCURESTI - SHOWROOM EXPO TOP CONSTRUCT</h2>
                        <p>Adresa: Valea Cascadelor nr. 23, sector 6 , stand B14C14</p>
                        <p>Persoana contact: Claudiu Turcu</p>
                        <p>Telefon: 0735 898 888</p>
                        <p>Email: claudiu.turcu@casaroyal.ro</p>
                    </div>
                    <img src={adresa24} alt="casa royal locatie" />
                </div>
                <div>
                    <div>
                        <h2>CONSTANTA - SHOWROOM AUREL VLAICU</h2>
                        <p>Adresa: Str. Aurel Vlaicu nr 163A in incinta complex MYC/Hiastria</p>
                        <p>Persoana contact: Alberto Palombi</p>
                        <p>Telefon: 0725 888 896</p>
                        <p>Email: alberto.palombi@casaroyal.ro</p>
                    </div>
                    <img src={adresa5} alt="casa royal locatie" />
                </div>
            </div>
            <div className="form-container">
                <form action="">
                    <label htmlFor="name">Nume</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="email" required />
                    <label htmlFor="telefon">Telefon</label>
                    <input type="text" name="telefon" id="telefon" required />
                    <label htmlFor="subiect">Subiect</label>
                    <input type="text" name="subiect" id="subiect" required />
                    <label htmlFor="mesaj">Mesaj</label>
                    <textarea type="text" name="mesaj" id="mesaj" rows="10" required />
                    <div>
                        <input type="checkbox" name="tc" id="tc" required />
                        <label htmlFor="tc">Sunt de acord si accept Politica de Confidentialitate</label>
                    </div>
                    <button type="submit">Trimite</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;