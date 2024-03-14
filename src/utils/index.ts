export function openMail(email: string, subject?: string, message?: string) {
  window.location.href = `mailto:${email}?subject=${subject ?? ""}&body=${message ?? ""}`;
}
