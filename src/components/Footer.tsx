import { useLanguage } from '../i18n/useLanguage'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>Kevin Herrera Oropeza</p>
        <span>{t.footer.role}</span>
      </div>
    </footer>
  )
}
