import { mockMedia } from "../shared/media";

export const siteSettings = {
  data: {
    id: 1,
    documentId: "site-settings-1",
    attributes: {
      siteName: "Dayananda Sagar University",
      tagline: "Live the Dream",
      logo: mockMedia("/assets/dsu-logo.png", "DSU Logo"),
      favicon: mockMedia("/favicon.ico", "Favicon"),
      socialLinks: [
        { id: 1, platform: "Facebook", url: "https://facebook.com/dsu" },
        { id: 2, platform: "Twitter", url: "https://twitter.com/dsu" },
        { id: 3, platform: "LinkedIn", url: "https://linkedin.com/school/dsu" },
        { id: 4, platform: "Instagram", url: "https://instagram.com/dsu" }
      ],
      contactInfo: {
        id: 1,
        email: "admissions@dsu.edu.in",
        phone: "+91 80 4646 1800",
        address: "Devarakaggalahalli, Harohalli, Kanakapura Road, Ramanagara Dt., Bengaluru – 562 112"
      }
    }
  }
};
