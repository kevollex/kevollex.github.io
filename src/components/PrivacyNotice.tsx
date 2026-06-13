type PrivacyNoticeProps = {
  children: string
}

export default function PrivacyNotice({ children }: PrivacyNoticeProps) {
  return (
    <aside className="privacy-notice">
      <strong>Privacy notice</strong>
      <p>{children}</p>
    </aside>
  )
}
