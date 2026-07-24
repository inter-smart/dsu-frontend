import { mockMedia } from "./media";

export const mockSEO = (title, description, image = "/assets/default-og.jpg") => ({
  metaTitle: title,
  metaDescription: description,
  keywords: "DSU, Dayananda Sagar University, Bangalore, Education",
  canonicalURL: "https://dsu.edu.in",
  metaRobots: "index, follow",
  ogImage: mockMedia(image, "Open Graph Image")
});
