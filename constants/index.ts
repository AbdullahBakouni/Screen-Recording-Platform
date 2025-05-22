export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};
export const DummyVideos = [
  {
    id: "1",
    title: "Snap Chat Message - 30 June 2025",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-05-01"),
    userImg: "/assets/images/jason.png",
    username: "Abdullah",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "2",
    title: "Snap Chat Message - 01 July 2025",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-05-02"),
    userImg: "/assets/images/jason.png",
    username: "Abdullah",
    views: 22,
    visibility: "public",
    duration: 180,
  },
  {
    id: "3",
    title: "Snap Chat Message - 02 July 2025",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-05-03"),
    userImg: "/assets/images/jason.png",
    username: "Abdullah",
    views: 35,
    visibility: "public",
    duration: 142,
  },
  {
    id: "4",
    title: "Snap Chat Message - 03 July 2025",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-05-04"),
    userImg: "/assets/images/jason.png",
    username: "Abdullah",
    views: 47,
    visibility: "public",
    duration: 190,
  },
  {
    id: "5",
    title: "Snap Chat Message - 04 July 2025",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-05-05"),
    userImg: "/assets/images/jason.png",
    username: "Abdullah",
    views: 51,
    visibility: "public",
    duration: 205,
  },
  {
    id: "6",
    title: "Snap Chat Message - 05 July 2025",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-05-06"),
    userImg: "/assets/images/jason.png",
    username: "Abdullah",
    views: 60,
    visibility: "public",
    duration: 132,
  },
  {
    id: "7",
    title: "Snap Chat Message - 06 July 2025",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-05-07"),
    userImg: "/assets/images/jason.png",
    username: "Abdullah",
    views: 75,
    visibility: "public",
    duration: 178,
  },
  {
    id: "8",
    title: "Snap Chat Message - 06 July 2025",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-05-07"),
    userImg: "/assets/images/jason.png",
    username: "Abdullah",
    views: 75,
    visibility: "public",
    duration: 178,
  },
];