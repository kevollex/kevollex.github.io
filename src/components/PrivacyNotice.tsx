type PrivacyNoticeProps = {
  children: string
}

export default function PrivacyNotice({ children }: PrivacyNoticeProps) {
  return (
    <aside className="privacy-notice">
      <strong>Nota de privacidad</strong>
      <p>{children}</p>
    </aside>
  )
}
