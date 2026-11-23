/**
 * Single source of truth for facts about the organization.
 *
 * Anything set to `null` / `[]` below is something the site cannot state
 * until you supply it. Sections that depend on a value stay hidden until it
 * is filled in, so the site never shows a claim nobody has confirmed.
 */
export const ORG = {
  name: "Zero Crumbs Initiative",
  email: "zerocrumbsiniative@gmail.com",
  phone: "(562) 235-5520",
  phoneHref: "tel:5622355520",
  instagram: {
    handle: "@zerocrumbinitiative",
    href: "https://instagram.com/zerocrumbinitiative",
  },

  // ---- CONFIRMED FROM YOUR DOCUMENTS ------------------------------------
  /** Articles of Incorporation, filed 4/18/2026 (CA file no. B20260185918). */
  incorporation: "California nonprofit public benefit corporation",
  /** IRS Notice CP 575, May 16, 2026. */
  ein: "42-2596733",
  /** City only. The principal office is a residence, so no street address. */
  location: "Cerritos, California",
  /** Publicly shared on Drive. */
  chapterAgreementUrl: "https://drive.google.com/file/d/1vWrDPlaj-oOeAeAU4-UboXgizgcE8hWd/view",

  // ---- TO FILL IN -------------------------------------------------------
  /**
   * e.g. "501(c)(3) public charity". Leave null until the IRS determination
   * letter exists. A Form 1023-EZ was filed 6/7/2026, but an EIN alone is not
   * tax-exempt status. While null, no page claims 501(c)(3) or deductibility.
   */
  taxExempt: null as string | null,
  /** e.g. "November 2026". Dates the stats on Home and Impact. */
  statsAsOf: null as string | null,
  /** One or two sentences on how the stats are counted. Shown on Impact. */
  countingNote: null as string | null,
  /** Stripe/PayPal/etc. link. Until set, donate buttons open an email instead. */
  donateUrl: null as string | null,
  /** Link to a playbook PDF/preview for chapter applicants. */
  playbookUrl: null as string | null,
  /** Documents linked from the footer. */
  transparency: [
    {
      label: "Bylaws & conflict of interest policy",
      href: "https://drive.google.com/file/d/102XmBjibHy9kfqtj8CFdm_iaoMoxxkO-/view",
    },
  ] as { label: string; href: string }[],
  /** Active chapters, shown on Impact. */
  chapters: [] as { name: string; location: string }[],
  /** Quotes from partners, shown on Impact. */
  partnerQuotes: [] as { quote: string; name: string; role: string }[],
  /** e.g. [{ label: "Pickups & transport", percent: 40 }]. Shown on Donate. */
  fundsBreakdown: [] as { label: string; percent: number }[],
};

export const STATS = {
  donuts: "25,000+",
  pounds: "5,400",
  bakeries: "86",
  communityPartners: "38",
};

export const BAKERIES = [
  { name: "Goody's Donuts", address: "13301 Artesia Blvd, Cerritos, CA 90703" },
  { name: "K&T Donuts", address: "15747 Imperial Hwy., La Mirada, CA 90638" },
  { name: "Yum Yum Donuts", address: "5454 Orangethorpe Ave, La Palma, CA 90623" },
  { name: "Fresh Bagel and Cafe", address: "6011 Lincoln Ave, Buena Park, CA 90620" },
  { name: "DK's Donuts", address: "12549 Alondra Blvd, Norwalk, CA 90650" },
];
export const MORE_BAKERIES = 82;

export const COMMUNITY_PARTNERS = [
  "Hawaiian Gardens Food Bank",
  "New Life Community Church",
  "Project Coffee Cup",
];
export const MORE_COMMUNITY_PARTNERS = 35;

/** mailto link used until a real payment processor is configured. */
export function giveHref(amount?: number) {
  if (ORG.donateUrl) return ORG.donateUrl;
  const subject = `I want to donate to ${ORG.name}${amount ? ` - $${amount}` : ""}`;
  return `mailto:${ORG.email}?subject=${encodeURIComponent(subject)}`;
}
