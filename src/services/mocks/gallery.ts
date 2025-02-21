import { generateRandomNumber, getRandomInt } from "@/utils/utils";

const images = [
  {
    id: 1,
    name: "Image 01",
    image:
      "https://s3-alpha-sig.figma.com/img/1c4e/1c02/b0af67aa08a12b7d461ea2fdf2ab793f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JiJn1DEAC24LhzDOIgGDpQXW3ztHH9gsHu~hRHSkxv40bEQjLEVjEiv57XyjHcVMZAVRYSRktZQht9pRGHQZTk1sj8v7Bv8nPWhRbmenikGVJJfNEHwGNknZoMEPRuGNhRPtkxroCURatJdLLmtwctyKcEebV4-3MsSBH39TXZD1j4~XcxhbFH8ogb9himssXC--I2CZHqrn1XfWXLVQUL9e29q2PFwbUC4ohmezzgqnz-XE7Z2sE9f3nqcQCGvsxCgYS7PDkUZ6G3QOUflsDJGKxUn2Yd8wxWUBDtBAPhQXX3~WDY~ZbYIEozDVZDIosPJZPvW4nM25yhch9L-71g__",
  },
  {
    id: 2,
    name: "Image 02",
    image:
      "https://s3-alpha-sig.figma.com/img/153d/98fa/67fa061650f6108e17da68bf7800fd0c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YJ5cuv0fZEdB9v3NysEivA4DVGMKv4YPZguGzk~uGmqir59RA~8ZrZ2LZVRfuHSFJc9phzkA06~Uvy2lEyO-Q9oLM84uAmSlpe0Y4WSrx-QE9ulIoVITZEdJrfVAMs2S1PHyxi45muzCr41ep0rwJEDlhiVND0IXciiBnedMR0pUp7TR9pR2o5bdhBV6nKTvOw60rwgzv2YFOAR6lqYxSESYkIk5zohhZdE8d1QjAQO1ehuMGTory~Spn2IRPHT-PNix9y1oxRTPtNid~lcJUoCYN37YIKx4wlP7LxchpC0ZiW~4mUJsv26yuKHZhEKxEJQiVnco22xGcAkH-ehu2w__",
  },
  {
    id: 3,
    name: "Image 03",
    image:
      "https://s3-alpha-sig.figma.com/img/20bc/27d0/35d101c6756d80cf037aee269c5cd53c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R5SW6UPM4kyHfhOLrF4RtPnIJoMv6vCPa5kCrmdXy~Zmb4JZu9gJGfVsvmJpaN4BpduYh99QTbAJPCCAfIuk496Yh8Ao-DQJj4GPZfCikSC0QbqrcINhFHR97AWuBJUsgKPtKGyYfOGfkhiSZPhaMlYrwkxJl8m-kg6TOfxcNFmiM~F8H8kg2NirKqpidF12ydaSd2BgElFiMPlfuyfHD03Zcu8jvEjugkPYUaw4ehjs1BsyIaSte6Ges73tda2hlhHvhCLdUW37eqNd0~YKwnZTj8G66vmcITEf3FcdIVWuiq~r5U7Rul6y6zI13bWHlHEhtaNkJx1ErZ52qjRMKg__",
  },
  {
    id: 4,
    name: "Image 04",
    image:
      "https://s3-alpha-sig.figma.com/img/5e67/cea7/6a57eb0f7194cbb21aaf86182f531bb2?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D26kOhHcXZ3S37Az2c6eIDu4thuAsbyFNfW-l3ywy9Jli4SQpvCpAb6YqqUCl2D0P8iPh9D72rL9VFD7PSF1~Eka6T~NssEYcpTde8LdNd0-XSqfmYCcGdHLhP5JdcWjmn9fiaEDBBe5RJaKUa4KK8nb3PxCp7gszBPCDN-dFcwiQjXYnmqTsE6kUfSNeX0lOYhYnl8Spzh771zTxHTymMU0j0ZpI0b5wUdWZ8yRlpBh28qwEQ~ROcIoU3-679-mcfGbs1dkXTroZSUQ2Q2rakJsyLThnyFE0HrlKJw~lGquRVL7r3~sGxdq3K267mnXKAFredJKZO8nJT0Ia7-t9g__",
  },
  {
    id: 5,
    name: "Image 05",
    image:
      "https://s3-alpha-sig.figma.com/img/4f8f/2a94/c9a68f51b5321c396d11e56b9b21ef6b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J-PtLCL37uQwWAmjjZ79sqTCO5qFOBMSewr5RlYaUXklFatnuPKwT~1~k1cmOY7KOis~HL2nOGezn7811DpkoP17d8NT9AqDY6gtuNZSm8kTiA4eWJCKKfJuWkSryrrjdWQwtNroVOAsgnjH0dD8VewMS3eYTPyz9d~ezfEKO89VMJoJ-74LcFU~-r22cLe7rbikIg6ie0csy2X9eVGtCyYaN2tfh0oF9bZ7esefgWqC9V0~~DZqOTu5rT34CqLuCan~u~BRZPAG1YA8TolTyifJVc~J46nLiSWTHYIISMaHaxylBe-zuXO3foZK9ED06mkvIZgGSY-lqdTvb2ePog__",
  },
  {
    id: 6,
    name: "Image 06",
    image:
      "https://s3-alpha-sig.figma.com/img/7a9d/c1d3/6c5b3f4cf05cfbb9b86a578fa3c78047?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FumWlKqWWCXU9XPdDuMkxqZGL-EcDZiEo8hOquFGiGTBAizxRK1Bv2LM8KwecEGEiTr5CfeXPuM6o7LysiZ32CCLYX~oG6RK839odIHHYhgW-GHPDUT9dsCo7hI543IfxScPgw6~FgRoIWdSKrCQakJDL11r8u3RDVr9ea1p6ityXOZt4A77Fc4JuN9CNJ2sQZ8qhG6PNrwxBME3aVlZIumWxWVRgC0k-QPnq~scH9Bgb7QSJVErfe7E2TPtEU6k0hjojLvKyk4IGcuTwI~od8X80AK83VAvYlUUbNkmFYImMK6KKljpjYpCX6M~3A-FG3V9oS~EsbkjZ8gAuxV0FQ__",
  },
];

const videos = [
  {
    id: 1,
    name: "Image 01",
    image:
      "https://s3-alpha-sig.figma.com/img/bced/b686/8815388a7408c3a6b530e9e982700da6?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F84Z91tj51w0U5YZZFjdVsZnp-vMzuPtjvXB-9j1jSyaE4QovtN-wGLezAvghb7cSGX4HvtwH~RZs8D428SOzbAny5b49QHxyC25eDTVhjmx7oOuTSb3-WZtKv0xPh9tJv7tywVOSAw9GWm6OaK9p69wCnyLP2-R46qVOn6I76F0lVw2cu559b2rxFUzbmN-QAcBJmf8~858LzW5vYlcHBSmKTHDAhfs4BRp4tl6rY~HwPU-4e5n-ncnmh8lIL95ZMPc5sYWAq5h2adxdaDvcAXiHDF~-PHvoYKgtHh50dNTEy5jPaORE42oUNk5fMne~AvSJ37gZjlrtn06to82dg__",
  },
  {
    id: 2,
    name: "Image 02",
    image:
      "https://s3-alpha-sig.figma.com/img/c06b/6d64/d7eed7cf020d9a1d58e72641ff0b13dc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Lo0ufyjzPXNOzUJpTJq8CMDx7I~oPwHqHR3G6jhT54G5iy-zBkH-zCmcQawJTrsMNp7qYiGJzRd~2NkbvxGlbWVc-2aQJqutvk6tJPzgmUcEdMZi5Z-99e~j9E-bsx9Rfhf4m6cD5FgJPHNNKHwzWsA1Od3lig4Jh4r5DMG~NfrXn-75nBO2vYp-3OGIkWMK36fj0oFjogBaw4I1kInPWvVPcjFoG0vXhfMCpPGBe4szxbpa1YTwJUY9ZidrQXg1rnzn19LyOUIDDfi-d4NkzbhFoDlp7UcGxI5HsiAqFoGwDum9TFH4-xHAx9TOdWU0vpy4DsfXUjQ1cNkv50m9xw__",
  },
  {
    id: 3,
    name: "Image 03",
    image:
      "https://s3-alpha-sig.figma.com/img/2809/5d64/9730738e1b4a69ae1c3bc3c4908f3936?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fPOvFIpfsmjB41e4~EjRf79I1YOEazcrMbj1IvXM734eOyvCX23SLnP0Spsxl1OGSEgER4unNUaaVLuPDuRv6JSJ6N4fhOkipj-FsY8nPeuoGHhENJfMSc4NXcu2Kt5QsYov7JT0gInvrBPkb5xfX2G04bJFsACeX-e1D9gr~iT5ztRRn6nPzpeArTFXtwr4c9oG6XeLhj1qyQ3eU1z9hlf7z8PGYXtVxLbnC1LXyA7y5F5z~Tk1aIFFXHgj8cPbPODEAsUYTUjyHb-1zYiQmTRycySPhQeOLFftDEo2JINVANz~ITupy34U~O8481fpPDVllo6N9iVf-h9Ihc8WcQ__",
  },
  {
    id: 4,
    name: "Image 04",
    image:
      "https://s3-alpha-sig.figma.com/img/6e8c/014b/0db172b23b29f47fdb6dceff7dd01b36?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=asiLKD7aCDWODTpkXLPARbdu1~NRXhxWpBcNAgHINZ19M2kbxJ~13MBeZI~BQ782-SBua35fEGUu678xTGsSEfT-0MgHDBvmehQ7v9EzAxhCnPgT~dqY7fCtM~fgX-WtvHQo6BAZoWee7uD4RVUSukJBmeUCa5ENax0BwzN5gyb4w2bqONN49m8-bcgj1o2cB8sCvzHoRVrfTfHxEXggFHf95iLG8XbZLzOGV1UKvm2ph99uTyI2nRjRvhv4Xr2euY-DBwoJsbLYtqf0rmkh6dA6vM3cyF2LjkTr8kSXT~B437iU~tyFG2bb~yJzv6VWXO0m8dDzJpggfCjraf9KUg__",
  },
  {
    id: 5,
    name: "Image 05",
    image:
      "https://s3-alpha-sig.figma.com/img/dc3b/905c/d9e451f1b72b95b36234a3d20dca9268?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m2p0FRx56NjXeQDPxEaeNQwzRZ3xd2nFvSvJk3YbZRg-gRC-z8ZMqAvboqcuj9M01DCwmGFzZWcXHtNwNVZFd4MZ20-u8-I0mEHd57NkzybMMtzkb-b~CeLLmXy5SaJ~ebIzGnO9Bb2DlI4GZxbTppoZebt2DJtH5C2sOCCh46Mi18~bAvh-i8ZrFonBIP5Sg22uaYlPq~cklrHLODciJubvVxSOUduSAMuWMpzj5i5fa6lOWv2ItUTQKEQHqqnFtM-3cvlDweSK7q6KuqaFsGOeWXxTHps7TDRq1cHxp-saplFBwh~8Fp4pPND765FY5AYQLdNKM3IejBOPoKPaVA__",
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
