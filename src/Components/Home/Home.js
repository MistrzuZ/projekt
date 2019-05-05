import React from 'react';
import './Home.css';
import link from './Screens/link.png';
import logowanie from './Screens/logowanie.png';
import przypuszczenia from './Screens/przypuszczenia.png';
import rejestracja from './Screens/rejestracja.png';
import frontCommits from './Screens/front-commits.png';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    openLink = (v) => {
        if (v === 'react') {
            window.open('https://reactjs.org/', '_blank');
        }
        if (v === 'node') {
            window.open('https://nodejs.org/', '_blank');
        }
        if (v === 'clarifai') {
            window.open('https://clarifai.com/', '_blank');
        }
        if (v === 'tachyons') {
            window.open('http://tachyons.io/', '_blank');
        }
        if (v === 'tachyons-doc') {
            window.open('https://tachyons.io/docs/', '_blank');
        }
        if (v === 'react-spinners') {
            window.open('https://www.npmjs.com/package/react-spinners', '_blank');
        }
        if (v === 'react-particles-js') {
            window.open('https://www.npmjs.com/package/react-particles-js', '_blank');
        }
        if (v === 'clarifai-doc') {
            window.open('https://clarifai.com/developer/guide/', '_blank');
        }
        if (v === 'postgresql') {
            window.open('https://www.postgresql.org/', '_blank');
        }
        if (v === 'knexjs') {
            window.open('https://knexjs.org/', '_blank');
        }
        if (v === 'expressjs') {
            window.open('https://expressjs.com/', '_blank');
        }
        if (v === 'cors') {
            window.open('https://www.npmjs.com/package/cors', '_blank');
        }
        if (v === 'nodemon') {
            window.open('https://nodemon.io/', '_blank');
        }
        if (v === 'body-parser') {
            window.open('https://www.npmjs.com/package/body-parser', '_blank');
        }
        if (v === 'bcrypt-nodejs') {
            window.open('https://www.npmjs.com/package/bcrypt-nodejs', '_blank');
        }
        if (v === 'github-front') {
            window.open('https://github.com/MistrzuZ/projekt', '_blank');
        }
        if (v === 'github-back') {
            window.open('https://github.com/MistrzuZ/projekt-back', '_blank');
        }
        if (v === '') {
            window.open('', '_blank');
        }
        if (v === '') {
            window.open('', '_blank');
        }
    }

    render() {
        return (
            <div className="flex-column">
                <div className="glowna pa5">
                    <p className="f2 b">Opis założeń projektu</p>
                    <ul className="list">
                        <li>Stworzenie aplikacji we frameworku React (język JSX), komunikującej się z serverem node.js (język JavaScript), a następnie z bazą danych Postgresql</li>
                        <li>Udostępnianie bazy danych użytkowników za pomocą API w formacie JSON</li>
                        <li>System <span onClick={() => {this.props.changeLogin(false); this.props.changeRoute('login')}} className="dim blue pointer">logowania</span> oraz <span onClick={() => {this.props.changeLogin(false); this.props.changeRoute('register')}} className="dim blue pointer">rejestracji</span></li>
                        <li><span onClick={() => (this.props.isLogin) ? this.props.changeRoute('predictGeneral') : this.props.changeRoute('login')} className="dim blue pointer">Rozpozanie zawartośći</span> obrazka przy użyciu <span className="dim blue pointer" onClick={() => this.openLink('clarifai')}>Clarifai</span></li>
                        <li><span onClick={() => (this.props.isLogin) ? this.props.changeRoute('predictFace') : this.props.changeRoute('login')} className="dim blue pointer">Rozpozanie twarzy</span> na obrazku przy użyciu <span className="dim blue pointer" onClick={() => this.openLink('clarifai')}>Clarifai</span></li>
                    </ul>
                </div>
                <div className="glowna pa5 mt7">
                    <p className="f2 b">Opis techniczny projektu</p>
                    <p className="f4">Projekt został wykonany za pomocą</p>
                    <ul className="list">
                        <li>Frameworka <span className="dim blue pointer" onClick={() => this.openLink('react')}>React</span></li>
                        <li>Środowiska <span className="dim blue pointer" onClick={() => this.openLink('node')}>Node.js</span> a w nim Web Application Framework <span className="dim blue pointer" onClick={() => this.openLink('expressjs')}>Express</span></li>
                        <li>API <span className="dim blue pointer" onClick={() => this.openLink('clarifai')}>Clarifai</span> (<span className="dim blue pointer" onClick={() => this.openLink('clarifai-doc')}>dokumentacja</span>)</li>
                        <li>Relacyjna baza danych <span className="dim blue pointer" onClick={() => this.openLink('postgresql')}>Postgresql</span></li>
                    </ul>
                    <p className="f4 pt2">Komponenty użyte do wykonania projektu (front)</p>
                    <ul className="list">
                        <li>Animacja <span className="dim blue pointer" onClick={() => this.openLink('react-spinners')}>react-spinners</span>, służy mi w czasie oczekiwania na odpowiedź od mojego servera lub strony <span className="dim blue pointer" onClick={() => this.openLink('clarifai')}>clarifai</span></li>
                        <li>Do szybkiego budowania strony posłyżył mi <span className="dim blue pointer" onClick={() => this.openLink('tachyons')}>tachyons</span>, komponent dzięki któremu bez tworzenia pliku css mogłem dowolnie edytować styl każdego znacznika (z małą pomocą ich <span className="dim blue pointer" onClick={() => this.openLink('tachyons-doc')}>dokumentacji</span>)</li>
                        <li>Animacja <span className="dim blue pointer" onClick={() => this.openLink('react-particles-js')}>react-particles-js</span> która wyświetla się jako tło projektu</li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p className="f4 pt2">Komponenty użyte do wykonania projektu (back)</p>
                    <ul className="list">
                        <li><span onClick={() => this.openLink('knexjs')} className="dim blue pointer">Knexjs</span> użyłem to tworzenia prostych zapytań</li>
                        <li>Pakiet <span onClick={() => this.openLink('cors')} className="dim blue pointer">cors</span> potrzebny w przypadku użycia zdalnych hostów</li>
                        <li>Komponent <span onClick={() => this.openLink('body-parser')} className="dim blue pointer">body-parser</span> do parsowania treści</li>
                        <li>Do automatycznego przeładowania strony komponent <span onClick={() => this.openLink('nodemon')} className="dim blue pointer">nodemon</span></li>
                        <li>Hashowanie haseł komponentem <span onClick={() => this.openLink('bcrypt-nodejs')} className="dim blue pointer">bcrypt-nodejs</span> w celu bezpiecznego gromadzenia haseł użytkowników</li>
                        <li></li>
                    </ul>
                </div>
                <div className="glowna pa5 mt7">
                    <p className="f2 b">Prezentacja warstwy użytkowej projektu</p>
                    <div className="flex flex items-center center">
                        <div className="pa3">Standardowo wpisujemy dane do logowania</div>
                        <div className="pa3">
                            <img src={logowanie} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap-wrap-reverse items-center center">
                        <div className="pa3">
                            <img src={rejestracja} alt="" />
                        </div>
                        <div className="pa3">Standardowo wpisujemy dane do rejestracji</div>
                    </div>
                    <div className="flex flex-wrap items-center center">
                        <div className="pa3">Tutaj wklejamy link do zdjęcia które chcemy przetestować</div>
                        <div className="pa3">
                            <img src={link} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap-reverse items-center center">
                        <div className="pa3">
                            <img src={przypuszczenia} alt="" />
                        </div>
                        <div className="pa3">Tutaj jest odpowiedź ze storny Clarifai</div>
                    </div>
                </div>
                <div className="glowna pa5 mt7">
                    <p className="f2 b">System kontroli wersji</p>
                    <div className="flex flex-wrap items-center center">
                        <div className="pa3">Rezpozytorium Github projektu <span onClick={() => this.openLink('github-front')} className="dim blue pointer">(front)</span></div>
                        <div className="pa3">
                            <img src={frontCommits} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap-reverse items-center center">
                        <div className="pa3">image xd</div>
                        <div className="pa3">Rezpozytorium Github projektu <span onClick={() => this.openLink('github-back')} className="dim blue pointer">(back)</span></div>
                    </div>
                </div>
                <div className="glowna pa5 mt7">
                <p className="f2 b">Materiały źródłowe</p>
                <ul className="list">
                    <li><span className="i">Learning React: Functional Web Development with React and Redux</span> - Alex Banks</li>
                    <li><span className="i">You Don't Know JS</span> - Kyle Simpson</li>
                </ul>
                </div>
            </div>
        )
    }
}

export default Home;