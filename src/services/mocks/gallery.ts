import { generateRandomNumber, getRandomInt } from "@/utils/utils";

const images = [
  {
    id: 1,
    name: "Image 01",
    image:
      "https://picsum.photos/seed/108/200/300",
  },
  {
    id: 2,
    name: "Image 02",
    image:
       "https://picsum.photos/seed/109/200/300",
  },
  {
    id: 3,
    name: "Image 03",
    image:
       "https://picsum.photos/seed/110/200/300",
  },
  {
    id: 4,
    name: "Image 04",
    image:
     "https://picsum.photos/seed/111/200/300",
  },
  {
    id: 5,
    name: "Image 05",
    image:
    "https://picsum.photos/seed/112/200/300",
  },
  {
    id: 6,
    name: "Image 06",
    image:
     "https://picsum.photos/seed/113/200/300",
  },
];

const videos = [
  {
    id: 1,
    name: "Video 01",
    image: "https://picsum.photos/seed/114/200/300",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    name: "Video 02",
    image: "https://picsum.photos/seed/115/200/300",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    name: "Video 03",
    image: "https://picsum.photos/seed/116/200/300",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    name: "Video 04",
    image: "https://picsum.photos/seed/117/200/300",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 5,
    name: "Video 05",
    image: "https://picsum.photos/seed/118/200/300",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
];

export const favoritesRandom = Array.from(
  { length: generateRandomNumber(30) },
  () => ({
    ...images[getRandomInt(generateRandomNumber(2), images.length)],
    ...videos[getRandomInt(generateRandomNumber(1), videos.length)],
  })
);

export const gallery = {
  photos: images,
  videos: videos,
  favorites: favoritesRandom,
};
