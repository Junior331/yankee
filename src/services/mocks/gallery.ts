import { generateRandomNumber, getRandomInt } from "@/utils/utils";

const images = [
  {
    id: 1,
    name: "Image 01",
    image:
      "https://s3-alpha-sig.figma.com/img/1c4e/1c02/b0af67aa08a12b7d461ea2fdf2ab793f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rl73lkFWhl~p9C-HEVXbmF9A0mf2z11DwSMK93KfWotoQ4aCLB1cB-utHKtr6ULXZ0i6QA4NtdPVHOhLmz2KcrDHuhWOvm82jQDS4fqZGCslH8HHrN9LxVyqteXXg45HlVKDWDfg5Tjn8u~35NTWwH3kvBBU8JTdK58fGoBLXOaFnbJCckFLXLQDL9rdapsY9nsFY9KDLDH19kRtjl3YFv~ueV9CwA2CPasD~-GHJXqKdwzjd3VK~LLc0gWKhp5ZSOHFABQbFKOhc3f9WBP26mXyolRPN0hjfHXEujB~d2gsAFSzr8q45ImPH2qqbVvstxI~fpE575QVCgy1Nrc81w__",
  },
  {
    id: 2,
    name: "Image 02",
    image:
      "https://s3-alpha-sig.figma.com/img/153d/98fa/67fa061650f6108e17da68bf7800fd0c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLWENiyfIAJoVQbJoBsiFLBVOMEHwLcEkxFXB-kbF-sBsVFr6s0SwPwjO5NYWJHr3VPJIPZu4tQe42QZEDXLUM5yg7SSSftrO2gmycCmpF1xLeizVOqasC5DvmCiCtfasAaeNvQ~Gh4plcZb1S5uhk4uStRUrpE8jhRmRMu4GzOb7qvYZkNFRQ~cTJoSZtoCq4PqKsCfqro6Sp~LMQtQPLfgo05LTz1Htp5ahFUU1m-T3QJpqTwGVyxYx8SopygHeKd5opC5m-3hwaledXTTO8LUynURsfrgJ~SNsFyQBxJPxp9mAwrlHg9kpeHDEw9xOtk3WJK0YgXEWzqSYszYIA__",
  },
  {
    id: 3,
    name: "Image 03",
    image:
      "https://s3-alpha-sig.figma.com/img/20bc/27d0/35d101c6756d80cf037aee269c5cd53c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QR9gvzIjua5qaIr9u07CBHf8S6ypaE~Hh1CCfiUVaewV2YrftEeiOUzd3h3Q8tDktjE71gyTpEWsLl4TtlHz16CpQbED1P2SfCJQ2Wpf71OvuLSoFaHU4xiLD9gjOOyb--qQwZTos07htcY3IUaGybzeDL3lv-T7Ak7A4kYniTOg8BxbQO31s6YDLAvWR43ZRpsy1fhlQe8olXrGw88AvnbNn6a5mlxHdkbL5G~Cr3Tj9rr6XMQmhWJgIBlpjVzZ3GkJikv59c-HXA0pTHTVP6GI5RJ3xy3~1J90k5nHCjnX93S-MlUE1ykDpmQHXpR~NSMzqUnk0G9glbHxiqL0Kw__",
  },
  {
    id: 4,
    name: "Image 04",
    image:
      "https://s3-alpha-sig.figma.com/img/27f2/5b13/0b3cc76484a5ff8327020153df6b21ce?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfitgAA~e-tXN1lscbGHP1S6Jh9XIs1X~1HTu66c-4Sv8Vx-mirmMF7~TLcbLLK2~xjgcSyJS-dt30WyCePp3~QRV~JpSFDylC6AYOZyDRZeSIBX7kgu~iaF3Muiti2Dg4Kfj6AfiGC9qAvoyIWSLhx6LGcimDQBSieGXj9p~Mz2laWiDzCFLvpDBafnV1mqT7cpRiWVdqwFWycc4phtiyNm5L1VCr6VoRugCOXCodBufzrhuTzjk27JriZigLDI71hC3ZKyK-MMNi7zwXHNbnxRwF3RrA-jZzfnd6bsFSssB9mz6M4w8nRFfrbjDDNchDdjG4vZxKPosVUIlav1-g__",
  },
  {
    id: 5,
    name: "Image 05",
    image:
      "https://s3-alpha-sig.figma.com/img/496f/d317/b91a888c6173bdc5661b8ea5bcf9d6ee?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zefd2v~9fNEBqnfA88m0eMGV4aAht256rkZshCTnlgsG7wTUoca5h0DWZ1IXgdOmqeJ~b0pqLXWHYEIHH6CTVYQX1ZKT1eewojFd4aMfVNPpWQM673hWxY6C7ppVQdo7-THHcbybB-ZuYqW2Cq0wH1nmOBy~JBBY-RDvIl3WtaFTh72x0HVjWAJX5Z9BErnd0Lr9bdznUHlk7AlDb7fHh9-O79sbw5BOeGKz66iuUFxl8rsfdF7s04BM6bBLWXVr0-0o6y8fQN4gsFzRbKyRA5xcFebqA0-mHv4zrQMDfVBiNwPYSjcEIjxlZ-6IMk-HwHuF3zIyqtWep2ozvOqBfA__",
  },
  {
    id: 6,
    name: "Image 06",
    image:
      "https://s3-alpha-sig.figma.com/img/2809/5d64/9730738e1b4a69ae1c3bc3c4908f3936?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Azir30ppofndyJ8qcp8p9Mp-kdi0Jjpx8gGUZMA4pVbcCbHF~QLNCsKIAgzuJK9GuPImYlWUMmJILNvgvuXfPxnTxLKivLaVco-vc9HZtjh7sI7GyfyeAXDRjeReuJBXQoRXoMgbmWQsMQwt00ROUi5YtFzwLRbcH8vv0W4UYhQTqRZx8-LzPjFZAlNWZ0M-Tw~yM-li4M86Z3vCEyS3bLJ~RCuxdujzvLXUH1SEUcT39vQO3TnyYSEEWWicV0B6kYHskMY-y87~OEmLbu0tOQiBeJa8aWFTRM7ZVVyIXf9-vbvBe~e62Q3ttBje~vrGPE7x0qHTuYIlAW-nyQSf1w__",
  },
];

const videos = [
  {
    id: 1,
    name: "Image 01",
    image:
      "https://s3-alpha-sig.figma.com/img/5e67/cea7/6a57eb0f7194cbb21aaf86182f531bb2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GlxY0Xwm3wLHI-BU5~v7f0CAuFQ~4VuCYfTHVyakMp71Gl16wVLzzk35IuZ99cF-shucuKe0Vu1-edDCDsC06oheM~SjYzNInAgZisNHzatkYK9rZFJjPM-ERgFN0YuMUvxGLQYWxaKXiajUOaDTcwuqgk6H2HNzXgJYXGwx~5RJsKqy3J5DqheWbdNUkQeWRyBLrQTUrbs9btBa5QOBKEuOI5aYvHgDR-rSI37E6eMFS9l5K7JYW9YkuN30JjG8ZuVYXJwAeC-UL6GC-E1983yIhzoTm5LZ7v75ND3bS1n~us0e1jBXNCo-N4eL-3zw8ObZwTOoe~nsUf-gUa9RPw__",
  },
  {
    id: 2,
    name: "Image 02",
    image:
      "https://s3-alpha-sig.figma.com/img/7a9d/c1d3/6c5b3f4cf05cfbb9b86a578fa3c78047?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NiZCoSwEr~Qh29zvHW-kWc8DIyuykz6FOCP2lsnbtNTvyCaCZBGE5zRygK4OSA5KSGF-hjzj1tGvgorQzXfg9DazolMPzBotoit0c0e68vAX7b2-D~Hp-BTK5W7rCOY3kUYRLGNX0nL5BZt6i-n~6JtzLcCzpTd0GXZ8GwodJ4FZvz1ZnT3ZEuU4In6Vx318uCR~VtU2-3SmRdn8GIYce008Ctj1nsLEgJq0q3qlHnCEgggtkbXw~N2wacc9OipwhdSWHrVBtfyetzIaqXACRxZBSuEUsMUFrnaR1QnNadGWTXmjItSF5UzJn9nZm2DzLaH0Mzp6d6Ev8ygrd9VfuA__",
  },
  {
    id: 3,
    name: "Image 03",
    image:
      "https://s3-alpha-sig.figma.com/img/c06b/6d64/d7eed7cf020d9a1d58e72641ff0b13dc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YsMZkkSt0IjJ3eqhoCod7lthWYBC1QbhfZOWCNeYXjnxOw6xhPvb1vAo~gtXc-Exugk290NkX4e1qf~7J22AusvDeXC76EpqHTAD~hz1tr4YWAzpykQwZH8tAl4GrGWDVl0IFPFEVz7usDZ5tTfUhokSSmO-fpvSAz~HilubZxtKCKEyTSDNJlvwZ0H0ZR-xwcCpz0ThZl7a1AzpQpP7p93e6OFNFaSRlbBjld8pz8GRFo56wp8PBQ6fztJ3CEhuzTLRy~BeV2a519TowOb7jJv~SCb8jpTg0Ds1bG~tOFLeFE8PabCwp58C25zMRSebOnQ88jsnMbK24I0kSX6A7w__",
  },
  {
    id: 4,
    name: "Image 04",
    image:
      "https://s3-alpha-sig.figma.com/img/4f8f/2a94/c9a68f51b5321c396d11e56b9b21ef6b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c3HPVVCzvDr4SQavc974zcQJuzDfWRTVV1JPw3w5236KT88w95kt0e42UIHyZ7c5l03z5DIpaoDuIOLjRg83euEF~5ecFwBtHz9VWqxPkkSKFEXA1wqBFUomI9VgAMfcnwRdQIsXPNd6zJxS5S1XnAb5s2yTTcyfb~JspEee0Dr4aSiN6veX4kXBC2dReqyAGBtfY1PVxe1CYeM6ccpapMVUtcIjaxpJe0rmj4Cq8f-WwIPhA-RsR0lONNZpC~iLGhjPQDKfLuQnmxz-Y2pJ~Krzo75KiYsBYiaO5UMzYTOzHPCKBcVNdlTohjwuVaX5I1Xaj7yPeFr2qoh7o66ubA__",
  },
  {
    id: 5,
    name: "Image 05",
    image:
      "https://s3-alpha-sig.figma.com/img/bced/b686/8815388a7408c3a6b530e9e982700da6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tp0fQ59NdF3B9bEkMAGfIW1DefEKV25Yn~UO-eMETOi2wDLACg42YOro7Ve-O2kvp8dLJ9Zxcm3JWgBBtX7I2cPshcxltvfU64pgMAJpM4CV8GLRWzJoMdPJ30MqcHLsw9iM4yvItDk3ChTARUzJE~G9SmhwhGctVuymYzGI9WovrI~UmmywzYQms8HmCctSYetcHlyLpz6USkgo2owNjuHZyuGVni8gT~CuMD2fBnS2WFus97M4Gi2vpTFOUOQcxQiQXGZ048thZOMntl6PdEcHiL3O--UDCKfEAZtMxBAYjIeReXKyuBNpvKr97wzjE3twueb-iG5eL0AZ1LBl9w__",
  },
];

// export const photosRandom = Array.from(
//   { length: generateRandomNumber(120) },
//   () => ({
//     ...images[getRandomInt(generateRandomNumber(images.length), images.length)],
//   })
// );

// export const videosRandom = Array.from(
//   { length: generateRandomNumber(30) },
//   () => ({
//     ...videos[getRandomInt(generateRandomNumber(0), videos.length)],
//   })
// );

export const favoritesRandom = Array.from(
  { length: generateRandomNumber(30) },
  () => ({
    ...images[getRandomInt(generateRandomNumber(images.length), images.length)],
    ...videos[getRandomInt(generateRandomNumber(videos.length), videos.length)],
  })
);

export const gallery = {
  photos: images,
  videos: videos,
  favorites: favoritesRandom,
};
