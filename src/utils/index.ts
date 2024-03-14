export const API_WHATSAPP_URL = "https://api.whatsapp.com/send/";

export const WHATSAPP_CONTACT_NUMBER = "62315480500";

export function openWhatsapp(text: string): void {
  window.open(
    `${API_WHATSAPP_URL}?phone=${WHATSAPP_CONTACT_NUMBER}&text=${text}`,
    "_blank"
  );
}

export function openMail(
  email: string,
  subject?: string,
  message?: string
): void {
  window.location.href = `mailto:${email}?subject=${subject ?? ""}&body=${message ?? ""}`;
}

export function applyEllipsis() {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
}

export function getInitial(fullName?: string): string {
  if (!fullName) return "";

  const stringArr = fullName.split(" ");

  if (stringArr.length === 1) {
    return stringArr[0].slice(0, 2);
  }

  const firstLetter = stringArr[0][0].toUpperCase();
  const secondLetter = stringArr[1][0].toUpperCase();

  return firstLetter + secondLetter;
}
