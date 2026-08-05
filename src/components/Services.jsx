import { useContext } from 'react'
import { AppContext } from '../App'

const FEATURES = [
  'srv.feature.duration',
  'srv.feature.weekly',
  'srv.feature.plan',
  'srv.feature.challenges',
  'srv.feature.flex',
]

export default function Services() {
  const { t } = useContext(AppContext)

  return (
    <section id="services">
      <div className="s-inner">
        <div className="s-head">
          <p className="s-eyebrow">{t['srv.eyebrow']}</p>
          <h2 className="s-title">{t['srv.title']}</h2>
        </div>
        <p className="srv-intro">{t['srv.intro']}</p>

        <div className="services-grid">
          <div className="srv-card srv-card--corp">
            <div className="srv-card-head">
              <span className="srv-icon">◆</span>
              <h3 className="srv-card-title">{t['srv.qa.title']}</h3>
            </div>
            <p className="srv-card-desc">{t['srv.qa.desc']}</p>
            <ul className="srv-features">
              <li>{t['srv.qa.feature1']}</li>
              <li>{t['srv.qa.feature2']}</li>
              <li>{t['srv.qa.feature3']}</li>
            </ul>
            <a
              className="btn btn-gold srv-cta"
              href="mailto:aliciadepaula@gmail.com?subject=Proposta%20de%20QA%20Engineering"
            >
              {t['srv.qa.cta']}
            </a>
          </div>

          <div className="srv-card">
            <div className="srv-card-head">
              <span className="srv-icon">◆</span>
              <h3 className="srv-card-title">{t['srv.mentoring.title']}</h3>
            </div>
            <p className="srv-card-desc">{t['srv.mentoring.desc']}</p>
            <ul className="srv-features">
              {FEATURES.map(key => <li key={key}>{t[key]}</li>)}
            </ul>
            <a className="btn btn-ghost srv-cta" href="#contact">{t['srv.cta']}</a>
          </div>

          <div className="srv-card srv-card--corp">
            <div className="srv-card-head">
              <span className="srv-icon">◆</span>
              <h3 className="srv-card-title">{t['srv.corp.title']}</h3>
            </div>
            <p className="srv-card-desc">{t['srv.corp.desc']}</p>
            <ul className="srv-features">
              <li>{t['srv.corp.feature1']}</li>
              <li>{t['srv.corp.feature2']}</li>
            </ul>
            <a
              className="btn btn-gold srv-cta"
              href="mailto:aliciadepaula@gmail.com?subject=Palestra%20ou%20treinamento"
            >
              {t['srv.corp.cta']}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
