export const API_WHATSAPP_URL = "https://api.whatsapp.com/send/";

export const WHATSAPP_CONTACT_NUMBER = "62315480500";

export function openWhatsapp(text: string) {
  window.open(
    `${API_WHATSAPP_URL}?phone=${WHATSAPP_CONTACT_NUMBER}&text=${text}`,
    "_blank"
  );
}

export function openMail(email: string, subject?: string, message?: string) {
  window.location.href = `mailto:${email}?subject=${subject ?? ""}&body=${message ?? ""}`;
}

export function applyEllipsis() {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
}
