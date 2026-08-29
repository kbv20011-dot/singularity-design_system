export interface CookieConsentProps {
  visible?: boolean;
  title?: string;
  body?: string;
  privacyLabel?: string;
  privacyHref?: string;
  acceptLabel?: string;
  declineLabel?: string;
  onAccept?: () => void;
  onDecline?: () => void;
  style?: React.CSSProperties;
}
export function CookieConsent(props: CookieConsentProps): JSX.Element;
