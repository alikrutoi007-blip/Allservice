export const siteConfig = {
  name: "Бәрі Жөн",
  shortName: "Бәрі Жөн",
  description:
    "Ремонт бытовой техники, сантехника, электрика и кондиционеров с выездом по Алматы.",
  phoneDisplay: "+7 708 181 9728",
  phoneHref: "tel:+77081819728",
  phoneDigits: "77081819728",
  city: "Алматы",
  serviceArea: "Алматы и ближайшие районы",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://barijon.kz",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  defaultWhatsappText:
    "Здравствуйте! Хочу вызвать мастера в Алматы. Подскажите, пожалуйста, по стоимости и времени выезда.",
} as const;

export function getWhatsappUrl(message: string = siteConfig.defaultWhatsappText) {
  return `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(message)}`;
}
