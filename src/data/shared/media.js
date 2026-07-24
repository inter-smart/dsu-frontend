export const mockMedia = (url, altText = "Media image", width = 1920, height = 1080) => ({
  data: {
    id: Math.floor(Math.random() * 1000),
    documentId: `media-${Math.random().toString(36).substr(2, 9)}`,
    attributes: {
      url,
      alternativeText: altText,
      width,
      height,
      caption: null,
      formats: {
        thumbnail: { url: `${url}?size=thumb`, width: 156, height: 156 },
        small: { url: `${url}?size=small`, width: 500, height: 500 },
      }
    }
  }
});
