import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Les p'tits sont mûrs, la vie c'est dur Suffit pas de l'dire, assis
            sur un mur Vois l'avenir bloqué dans l'obscur Euro dans la mire,
            j'suis pas là, pédé voilà A l'instar des autres j'suis sur le toit
            T'es en quête du love j'suis en guerre J'appuie paye bitch crame,
            chacune son coup Deux putes dans le même lit, le M, on a les mêmes
            goûts J'sors du hood, un bon siège cuir baquet Un fer couleur nacré
            khey, là oui, là oui L'appart' sur les champs j'lai pas loué
          </p>
          <p>
            J'suis plus sur tes côtes Pas méchante, elle veut m'amadouer En
            suçant tous mes potes Y'a pas d'méthode, mon son partout est J'suis
            sur écoute, scélérats followers, on est en vie Rassurez-vous, bonne
            drogue Vrais hommes pas stoppés par l'épuisement On a de l'argent et
            mes potos sont plus stoppés par leurs pigments Hein fuck le monde
            des mondains On reviens d'loin, si loin Aujourd'hui on rôde en...
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>Autheur du site http://www.applecentresav.ch</p>
          <p>
            Le but prinicipal de ce site étant la visualisation de nos clients
            en direct de l'avencement de leur réparation. De plus, nos
            partenaires peuvent, directement, grâce à ce site créer non
            seulement de nouvelles interventions. Mais aussi, gérer les devis,
            répondre à leur clients respectifs l'état de l'interventions.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Informaticien de 22 ans
          </p>
          {close}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/0x73764C"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/sylvain.schaufelberger"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sylvain_s/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/XpliSyL" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
