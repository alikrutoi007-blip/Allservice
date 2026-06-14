export const siteConfig = {
  name: "Allservice",
  shortName: "Allservice",
  description:
    "Ремонт и установка бытовой и коммерческой техники в Алматы для квартир, частных домов, ресторанов, кафе и профессиональных кухонь.",
  phoneDisplay: "+7 708 181 9728",
  phoneHref: "tel:+77081819728",
  phoneDigits: "77081819728",
  city: "Алматы",
  serviceArea: "Алматы и ближайшие районы",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://allservice-almaty.kz",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  defaultWhatsappText:
    "Здравствуйте! Нужен ремонт или установка техники в Алматы. Подскажите, пожалуйста, ближайшее время выезда.",
} as const;

export function getWhatsappUrl(message: string = siteConfig.defaultWhatsappText) {
  return `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(message)}`;
}
