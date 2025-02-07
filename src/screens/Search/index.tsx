import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { Layout } from "@/components/organism";
import { ScrollView } from "react-native-gesture-handler";

const images = [
  {
    id: "1",
    uri: "https://images-ext-1.discordapp.net/external/FGBBGsWbeRPJ83QEBXdsvN7ocLj4iqXETqxr9ae4-Ug/%3FExpires%3D1739750400%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3DqZ6kxbzTgE4opffseb0kQzcLcFDJj7AXY3x9W3EQilMgNjKXs7t53F0BmM6g5mm7FCPfSZYMCHbSN24j7HX58m0rswZqsPJ8V50UttbBerTxNX68pQ9DFNo4aQEfzi28LIrbUCnvwb-QtC3bIP2haJNo26DgkJ-fqUlt8VhbxkSBeLF4AG1Lv-mdvCCAgZZtzqAqu4pRQdUP8kHxmxBC6UMBLnXB1Vwy2RraOpv55B~LiqUbexj2dHYNj9taXF~KfFcscbGiAASEinOtDZqVyuBb31t8Pu6RXqfpaf4deLlkFw6k0v2~YDMSgEbHVgXlJp~PJqOpk-ZOkwf6nNJ5pQ__/https/s3-alpha-sig.figma.com/img/5e67/cea7/6a57eb0f7194cbb21aaf86182f531bb2?format=webp&width=1052&height=701",
  },
  {
    id: "2",
    uri: "https://images-ext-1.discordapp.net/external/IXUiSgqOyikAmwqbzufcQ5Pjf1lZ1Exr85clO1pvrEc/%3FExpires%3D1739750400%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3DA6VarRPrrAFdDDm2HfVekdOYRMc5ywsElDJjnfCC52o3p4fr2fh6h1K3CWDQiC5~39WwfIgzVuNP9F1cxwn7hkFDEy7xletJ3ez2c0GxpzLaP~4~36swcfJF86hmy~oE49YAKJFEQMV~hRo~SeFYJYCOYvcnScr6PSjj9hKQuOUyiY-23om8gJtRE2r8r3lR3vdrOJ050YsdEV0gyrm82QifihN98jGWM9EIuz2lSNGV3CxTboDla7BF-ZhBTCA9eW-V9KhR8hd-AcQMYGZkny7E4DF3JUpWTRAjLZaAUJzaJv2n-OlDRmiCYuj-jC8FBTYIylQ~Z1WH07cEu34uyQ__/https/s3-alpha-sig.figma.com/img/7a9d/c1d3/6c5b3f4cf05cfbb9b86a578fa3c78047?format=webp&width=1052&height=701",
  },

  { id: "3", uri: "https://images-ext-1.discordapp.net/external/SPgAedolC9oQa3cI9MxorHBdMf0xubY_EfTiT9hy5-A/%3FExpires%3D1739750400%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3Dj5qMcOHz~1ujdhN~gqQJD5uK-fa9Qu3Uj2vc34nlUNMbXMaUvWtRtNwLxVp0nalnIHwCiWyoEk8LakK0ExkeqPAmul0o~FN6H-sIswy2aw09j9S1DrlFHPB-c9jC8iVwBiaaV0tysrdkr5mcgeAaa-6UbvUtTCFY~8J8lPMaH8YNg3rsguIx4mXhP9uzoF9rB5L2c4yQ-RODtTAbuBsRbBcNqcOZEoIdBkvqQ0lnq72EnZRRJ-V5hsLW0WCIspUWaSbBaZf8qzGM8up-shy6a01gsEjyoN3txdQ01oH3~DcTMtQR8D2A8Tko1b11ZprPwL7DLh80cOfUmqiFzoBHjA__/https/s3-alpha-sig.figma.com/img/c06b/6d64/d7eed7cf020d9a1d58e72641ff0b13dc?format=webp" },
  { id: "4", uri: "https://images-ext-1.discordapp.net/external/xCGVFe4iDciqgO1pA5gMybOtjSSVB56CzGubh8Ypc5A/%3FExpires%3D1739750400%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3Ddgi3SWXhOKk8BY1adUpIGGhxardqXsKXgf1S4~aKTQ2ltyt3OC4Nyfhmim085E-1OUTnKdTAles-rISf~xr7Fb6mQZ4ryMneVICsBDeWvU2WFldrzhq6FE1MsxyTmApgvrvCM9vGeEJY16wGHlRjbXpKyjTQQOHW~qJVEP2B0n1IJ8GJ1en1NIBHWetnos4SuJ0u5gXQb-cLm0HaFVmiLDhGjhdwiyNyB-4s6UzuXrJl19Bz3d71FWvnVHFU~840Cm4MRT7wC542sSMnUSVO1lz~EP0j8Nc5H9Ka0e0I9XqGcdkJKXJRYbsFq5Jgemq~IC5uAW6mhh6KK-cLuUbm0Q__/https/s3-alpha-sig.figma.com/img/bced/b686/8815388a7408c3a6b530e9e982700da6?format=webp" },
  { id: "5", uri: "https://images-ext-1.discordapp.net/external/XxS55S3y76xd0_9pWPjaIFa_dhSs9iiFtYRtbjF_Wkw/%3FExpires%3D1739750400%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3DAOieZMgJSRCTRgXhYcNrtjJB9qiN6UAC-tE3TzdDMiB4bonWO5BrpPpxKjCpwSPM0eE-5mLcRja8z3GjrNPo5g-dfcgr5e8aOv~UOtUs4nFTC6PzdcKtLniVthj2A~mqPXues4JVOWeDSjQIfHL9N1NKmexlhl~iseyhGXIUFdz1YREzOSARN5duEW~IxNi1lTUGM6~jw99pZRULUj~bJKqyW7Ck6KwiEVcz6qhAZAdhPny0fhUi5i76oWg97P7ng8E5GhuSQC0DvYRnAsGMd19QGbuGXd5rA3ick184Sszzj1yfWd9wKZbeBlWQKgnjFIHaGE8ZLaEvj1lCUr4BhQ__/https/s3-alpha-sig.figma.com/img/4f8f/2a94/c9a68f51b5321c396d11e56b9b21ef6b?quality=lossless&format=webp&width=526&height=701" },
  {
    id: "6",
    uri: "https://images-ext-1.discordapp.net/external/FGBBGsWbeRPJ83QEBXdsvN7ocLj4iqXETqxr9ae4-Ug/%3FExpires%3D1739750400%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3DqZ6kxbzTgE4opffseb0kQzcLcFDJj7AXY3x9W3EQilMgNjKXs7t53F0BmM6g5mm7FCPfSZYMCHbSN24j7HX58m0rswZqsPJ8V50UttbBerTxNX68pQ9DFNo4aQEfzi28LIrbUCnvwb-QtC3bIP2haJNo26DgkJ-fqUlt8VhbxkSBeLF4AG1Lv-mdvCCAgZZtzqAqu4pRQdUP8kHxmxBC6UMBLnXB1Vwy2RraOpv55B~LiqUbexj2dHYNj9taXF~KfFcscbGiAASEinOtDZqVyuBb31t8Pu6RXqfpaf4deLlkFw6k0v2~YDMSgEbHVgXlJp~PJqOpk-ZOkwf6nNJ5pQ__/https/s3-alpha-sig.figma.com/img/5e67/cea7/6a57eb0f7194cbb21aaf86182f531bb2?format=webp&width=1052&height=701"
  },
  { id: "7",   uri: "https://images-ext-1.discordapp.net/external/IXUiSgqOyikAmwqbzufcQ5Pjf1lZ1Exr85clO1pvrEc/%3FExpires%3D1739750400%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3DA6VarRPrrAFdDDm2HfVekdOYRMc5ywsElDJjnfCC52o3p4fr2fh6h1K3CWDQiC5~39WwfIgzVuNP9F1cxwn7hkFDEy7xletJ3ez2c0GxpzLaP~4~36swcfJF86hmy~oE49YAKJFEQMV~hRo~SeFYJYCOYvcnScr6PSjj9hKQuOUyiY-23om8gJtRE2r8r3lR3vdrOJ050YsdEV0gyrm82QifihN98jGWM9EIuz2lSNGV3CxTboDla7BF-ZhBTCA9eW-V9KhR8hd-AcQMYGZkny7E4DF3JUpWTRAjLZaAUJzaJv2n-OlDRmiCYuj-jC8FBTYIylQ~Z1WH07cEu34uyQ__/https/s3-alpha-sig.figma.com/img/7a9d/c1d3/6c5b3f4cf05cfbb9b86a578fa3c78047?format=webp&width=1052&height=701" },
  { id: "8", uri: "https://images-ext-1.discordapp.net/external/SPgAedolC9oQa3cI9MxorHBdMf0xubY_EfTiT9hy5-A/%3FExpires%3D1739750400%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3Dj5qMcOHz~1ujdhN~gqQJD5uK-fa9Qu3Uj2vc34nlUNMbXMaUvWtRtNwLxVp0nalnIHwCiWyoEk8LakK0ExkeqPAmul0o~FN6H-sIswy2aw09j9S1DrlFHPB-c9jC8iVwBiaaV0tysrdkr5mcgeAaa-6UbvUtTCFY~8J8lPMaH8YNg3rsguIx4mXhP9uzoF9rB5L2c4yQ-RODtTAbuBsRbBcNqcOZEoIdBkvqQ0lnq72EnZRRJ-V5hsLW0WCIspUWaSbBaZf8qzGM8up-shy6a01gsEjyoN3txdQ01oH3~DcTMtQR8D2A8Tko1b11ZprPwL7DLh80cOfUmqiFzoBHjA__/https/s3-alpha-sig.figma.com/img/c06b/6d64/d7eed7cf020d9a1d58e72641ff0b13dc?format=webp"},
  { id: "9", uri: "https://images-ext-1.discordapp.net/external/xCGVFe4iDciqgO1pA5gMybOtjSSVB56CzGubh8Ypc5A/%3FExpires%3D1739750400%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3Ddgi3SWXhOKk8BY1adUpIGGhxardqXsKXgf1S4~aKTQ2ltyt3OC4Nyfhmim085E-1OUTnKdTAles-rISf~xr7Fb6mQZ4ryMneVICsBDeWvU2WFldrzhq6FE1MsxyTmApgvrvCM9vGeEJY16wGHlRjbXpKyjTQQOHW~qJVEP2B0n1IJ8GJ1en1NIBHWetnos4SuJ0u5gXQb-cLm0HaFVmiLDhGjhdwiyNyB-4s6UzuXrJl19Bz3d71FWvnVHFU~840Cm4MRT7wC542sSMnUSVO1lz~EP0j8Nc5H9Ka0e0I9XqGcdkJKXJRYbsFq5Jgemq~IC5uAW6mhh6KK-cLuUbm0Q__/https/s3-alpha-sig.figma.com/img/bced/b686/8815388a7408c3a6b530e9e982700da6?format=webp"},
  { id: "10", uri: "https://images-ext-1.discordapp.net/external/XxS55S3y76xd0_9pWPjaIFa_dhSs9iiFtYRtbjF_Wkw/%3FExpires%3D1739750400%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3DAOieZMgJSRCTRgXhYcNrtjJB9qiN6UAC-tE3TzdDMiB4bonWO5BrpPpxKjCpwSPM0eE-5mLcRja8z3GjrNPo5g-dfcgr5e8aOv~UOtUs4nFTC6PzdcKtLniVthj2A~mqPXues4JVOWeDSjQIfHL9N1NKmexlhl~iseyhGXIUFdz1YREzOSARN5duEW~IxNi1lTUGM6~jw99pZRULUj~bJKqyW7Ck6KwiEVcz6qhAZAdhPny0fhUi5i76oWg97P7ng8E5GhuSQC0DvYRnAsGMd19QGbuGXd5rA3ick184Sszzj1yfWd9wKZbeBlWQKgnjFIHaGE8ZLaEvj1lCUr4BhQ__/https/s3-alpha-sig.figma.com/img/4f8f/2a94/c9a68f51b5321c396d11e56b9b21ef6b?quality=lossless&format=webp&width=526&height=701"  },
];

export const Search = () => {
  const [text, setText] = useState("");

  return (
    <Layout titleHeader="yankee">
     
        <S.ContainerInput>
          <S.SearchIcon name="search" size={20} color="#777" />
          <S.StyledInput placeholder="Search" value={text} onChangeText={setText} />
        </S.ContainerInput>
        <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <S.ContainerList>
          <S.MasonryContainer>
            {images.map((item) => (
              <TouchableOpacity key={item.id} activeOpacity={0.6}>
                <S.MasonryItem >
                  <Image
                    source={{ uri: item.uri }}
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    resizeMode="cover"
                  />
                </S.MasonryItem>
              </TouchableOpacity>
            ))}
          </S.MasonryContainer>
        </S.ContainerList>
      </ScrollView>
    </Layout>
  );
};
