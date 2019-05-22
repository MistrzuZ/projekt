import React from 'react';
import './Home.css';
import link from './Screens/link.png';
import logowanie from './Screens/logowanie.png';
import przypuszczenia from './Screens/przypuszczenia.png';
import rejestracja from './Screens/rejestracja.png';
import frontCommits from './Screens/front-commits.png';
import backCommits from './Screens/back-commits.png';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="flex-column w-80 center">
                <div className="glowna pa5">
                    <p className="f2 b">Opis założeń projektu</p>
                    <ul className="list">
                        <li>Stworzenie aplikacji we frameworku React (język JSX), komunikującej się z serverem node.js (język JavaScript), a następnie z bazą danych Postgresql</li>
                        <li>Udostępnianie <span onClick={() => (this.props.isLogin) ? this.props.changeRoute('users') : this.props.changeRoute('login')} className="dim blue pointer">bazy danych użytkowników</span> za pomocą API w formacie JSON</li>
                        <li>System <span onClick={() => {this.props.changeLogin(false); this.props.changeRoute('login')}} className="dim blue pointer">logowania</span> oraz <span onClick={() => {this.props.changeLogin(false); this.props.changeRoute('register')}} className="dim blue pointer">rejestracji</span></li>
                        <li><span onClick={() => (this.props.isLogin) ? this.props.changeRoute('predictGeneral') : this.props.changeRoute('login')} className="dim blue pointer">Rozpozanie zawartośći</span> obrazka przy użyciu <a className="dim blue pointer" href="https://clarifai.com">Clarifai</a></li>
                        <li><span onClick={() => (this.props.isLogin) ? this.props.changeRoute('predictFace') : this.props.changeRoute('login')} className="dim blue pointer">Rozpozanie twarzy</span> na obrazku przy użyciu <a className="dim blue pointer" href="https://clarifai.com">Clarifai</a></li>
                    </ul>
                </div>
                <div className="glowna pa5 mt7">
                    <p className="f2 b">Opis techniczny projektu</p>
                    <p className="f4">Projekt został wykonany za pomocą</p>
                    <ul className="list">
                        <li>Frameworka <a className="dim blue pointer" href="https://reactjs.org/">React</a></li>
                        <li>Środowiska <a className="dim blue pointer" href="https://nodejs.org/">Node.js</a> a w nim Web Application Framework <a href="https://expressjs.com/">Express</a></li>
                        <li>API <a className="dim blue pointer" href="https://clarifai.com/">Clarifai</a> (<a className="dim blue pointer" href="https://clarifai.com/developer/guide/">dokumentacja</a>)</li>
                        <li>Relacyjna baza danych <a className="dim blue pointer" href="https://www.postgresql.org/">Postgresql</a></li>
                    </ul>
                    <p className="f4 pt2">Komponenty użyte do wykonania projektu (front)</p>
                    <ul className="list">
                        <li>Animacja <a className="dim blue pointer" href="https://www.npmjs.com/package/react-spinners">react-spinners</a>, służy mi w czasie oczekiwania na odpowiedź od mojego servera lub strony <a className="dim blue pointer" href="https://clarifai.com">clarifai</a></li>
                        <li>Do szybkiego budowania strony posłyżył mi <a className="dim blue pointer" href="http://tachyons.io/">tachyons</a>, komponent dzięki któremu bez tworzenia pliku css mogłem dowolnie edytować styl każdego znacznika (z małą pomocą ich <a className="dim blue pointer" href="https://tachyons.io/docs/">dokumentacji</a>)</li>
                        <li>Animacja <a className="dim blue pointer" href="https://www.npmjs.com/package/react-particles-js">react-particles-js</a> która wyświetla się jako tło projektu</li>
                        <li>Do walidacji danych logowania i rejestracji użyłem <a href="https://www.npmjs.com/package/simple-react-validator" className="dim blue pointer">simple-react-validator</a></li>
                        <li>Jako tabelki w bazie danych użyłem <a href="https://material-ui.com/" className="dim blue pointer">material-ui</a></li>
                    </ul>
                    <p className="f4 pt2">Komponenty użyte do wykonania projektu (back)</p>
                    <ul className="list">
                        <li><a className="dim blue pointer" href="https://knexjs.org/" >Knexjs</a> użyłem to tworzenia prostych zapytań</li>
                        <li>Pakiet <a href="https://www.npmjs.com/package/cors" className="dim blue pointer">cors</a> potrzebny w przypadku użycia zdalnych hostów</li>
                        <li>Komponent <a href="https://www.npmjs.com/package/body-parser" className="dim blue pointer">body-parser</a> do parsowania treści</li>
                        <li>Do automatycznego przeładowania strony komponent <a href="https://nodemon.io/" className="dim blue pointer">nodemon</a></li>
                        <li>Hashowanie haseł komponentem <a href="https://www.npmjs.com/package/bcrypt-nodejs" className="dim blue pointer">bcrypt-nodejs</a> w celu bezpiecznego gromadzenia haseł użytkowników</li>
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
                        <div className="pa3">Rezpozytorium Github projektu <a href="https://github.com/MistrzuZ/projekt" className="dim blue pointer">(front)</a></div>
                        <div className="pa3">
                            <img src={frontCommits} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap-reverse items-center center">
                        <div className="pa3">
                            <img src={backCommits} alt="" />
                        </div>
                        <div className="pa3">Rezpozytorium Github projektu <a href="https://github.com/MistrzuZ/projekt-back" className="dim blue pointer">(back)</a></div>
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