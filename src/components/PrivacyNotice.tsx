type PrivacyNoticeProps = {
  label: string
  children: string
}

export default function PrivacyNotice({ label, children }: PrivacyNoticeProps) {
  return (
    <aside className="privacy-notice">
      <strong>{label}</strong>
      <p>{children}</p>
    </aside>
  )
}
