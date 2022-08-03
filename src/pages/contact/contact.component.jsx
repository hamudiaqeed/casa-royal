import React, {useState, useRef} from "react";
import './contact.styles.scss';
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../../components/forms/Button/button.component";
import {Link} from 'react-router-dom';
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

const Contact = () => {

    const [recaptcha, setRecaptcha] = useState();
    const captchaRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefon, setTelefon] = useState('');
    const [subiect, setSubiect] = useState('');
    const [mesaj, setMesaj] = useState('');
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let mess = {
            titlu: 'Contact',
            nume: name,
            email,
            telefon,
            subiect,
            mesaj
        }
        const token = captchaRef?.current?.getValue();
        // if(token && checked) {
        //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        // }
        captchaRef.current.reset();
    }

    return (
        <div className="contact">
            <div className="locations">
                <div className="location">
                    <div>
                        <h3>BUCURESTI - SHOWROOM NICOLAE TITULESCU</h3>
                        <p><span className="bold">Adresa:</span> Sos. Nicolae Titulescu nr.121</p>
                        <p><span className="bold">Persoana contact:</span> Cezar Maracine</p>
                        <p><span className="bold">Telefon:</span> 0734 802 222</p>
                        <p><span className="bold">Persoana contact:</span> Slabu Catalin</p>
                        <p><span className="bold">Telefon:</span> 0736 948 334</p>
                        <p><span className="bold">Email:</span> catalin.slabu@casaroyal.ro</p>
                        <a href="https://goo.gl/maps/1uEw31M3Sgq9RxiP8">Vezi locatia pe harta</a>
                    </div>
                    <div className="location-img loc-1"></div>
                </div>
                <div className="location">
                    <div>
                        <h3>BUCURESTI - SHOWROOM EXPO TOP CONSTRUCT</h3>
                        <p><span className="bold">Adresa:</span> Valea Cascadelor nr. 23, sector 6 , stand A7O7</p>
                        <p><span className="bold">Persoana contact:</span> Cezar Maracine</p>
                        <p><span className="bold">Telefon:</span> 0734 802 222</p>
                        <p><span className="bold">Persoana contact:</span> Mihai Neacsu</p>
                        <p><span className="bold">Telefon:</span> 0730 103 333</p>
                        <p><span className="bold">Email:</span> mihai.neacsu@casaroyal.ro</p>
                        <a href="https://goo.gl/maps/PNSUR9zkYqEw2MnH9">Vezi locatia pe harta</a>
                    </div>
                    <div className="location-img loc-24"></div>
                </div>
                <div className="location">
                    <div>
                        <h3>BUCURESTI - SHOWROOM HOME&DESIGN MALL</h3>
                        <p><span className="bold">Adresa:</span> Bulevardul Ghencea nr.126-132, sector 6</p>
                        <p><span className="bold">Persoana contact:</span> George Stanciu</p>
                        <p><span className="bold">Telefon:</span> 0735 092 222</p>
                        <p><span className="bold">Email:</span> george.stanciu@casaroyal.ro</p>
                        <a href="https://goo.gl/maps/aBRQvF6npSYFCReJ8">Vezi locatia pe harta</a>
                    </div>
                    <div className="location-img loc-3"></div>
                </div>
                <div className="location">
                    <div>
                        <h3>BUCURESTI - SHOWROOM EXPO TOP CONSTRUCT</h3>
                        <p><span className="bold">Adresa:</span> Valea Cascadelor nr. 23, sector 6 , stand B14C14</p>
                        <p><span className="bold">Persoana contact:</span> Cezar Maracine</p>
                        <p><span className="bold">Telefon:</span> 0734 802 222</p>
                        <p><span className="bold">Persoana contact:</span> Claudiu Turcu</p>
                        <p><span className="bold">Telefon:</span> 0735 898 888</p>
                        <p><span className="bold">Email:</span> claudiu.turcu@casaroyal.ro</p>
                        <a href="https://goo.gl/maps/PNSUR9zkYqEw2MnH9">Vezi locatia pe harta</a>
                    </div>
                    <div className="location-img loc-24"></div>
                </div>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <h2>Formular de contact</h2>                    
                    <div className='txtb'>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            value={name} 
                            required 
                            onChange={(e) => setName(e.target.value)}
                        />
                        <span data-placeholder='Nume'></span>
                    </div>
                    <div className='txtb'>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={email} 
                            required 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span data-placeholder='Email'></span>
                    </div>
                    <div className='txtb'>
                        <input 
                            type="text" 
                            name="telefon" 
                            id="telefon" 
                            value={telefon} 
                            required 
                            onChange={(e) => setTelefon(e.target.value)}
                        />
                        <span data-placeholder='Telefon'></span>
                    </div>
                    <div className='txtb'>
                        <input 
                            type="text" 
                            name="subiect" 
                            id="subiect" 
                            value={subiect} 
                            required 
                            onChange={(e) => setSubiect(e.target.value)}
                        />
                        <span data-placeholder='Subiect'></span>
                    </div>
                    <textarea 
                        type="text" 
                        name="mesaj" 
                        id="mesaj" 
                        rows="7" 
                        value={mesaj} 
                        placeholder="Mesaj" 
                        required 
                        onChange={(e) => setMesaj(e.target.value)}
                    />
                    <div className="check">
                        <input 
                            type="checkbox" 
                            name="tc" 
                            id="tc" 
                            required 
                            onChange={(e) => setChecked(e.target.checked)}
                        />
                        <label htmlFor="tc">Sunt de acord si accept <Link to='/confidentialitate' className="underline">Politica de Confidentialitate</Link></label>
                    </div>
                    <ReCAPTCHA
                        sitekey="6LdKDzwhAAAAAIJj-YozmvqpOmaFJ66HfsLu4_Ar"
                        ref={captchaRef}
                        style={{transform: "scale(0.77)", transformOrigin: "0 0"}}
                    />
                    <Button type="submit">Trimite</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact;