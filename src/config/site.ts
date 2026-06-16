export const siteConfig = {
  name: "MasterTut",
  shortName: "MasterTut",
  description:
    "Ремонт и установка бытовой и коммерческой техники в Алматы и Алматинской области для квартир, частных домов, ресторанов, кафе и профессиональных кухонь.",
  phoneDisplay: "+7 777 342 6900",
  phoneHref: "tel:+77773426900",
  phoneDigits: "77773426900",
  city: "Алматы",
  serviceArea: "Алматы и Алматинская область",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mastertut.kz",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  defaultWhatsappText:
    "Здравствуйте! Нужен ремонт или установка техники в Алматы или Алматинской области. Подскажите, пожалуйста, ближайшее время выезда.",
} as const;

export function getWhatsappUrl(message: string = siteConfig.defaultWhatsappText) {
  return `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(message)}`;
}
