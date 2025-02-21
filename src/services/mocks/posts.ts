import { genericCommets } from "./comments";

export const posts = [
  {
    id: 1,
    user: {
      id: 1,
      name: "Paityn Franci",
      avatar:
        "https://s3-alpha-sig.figma.com/img/6e16/a6a6/b363bacf9fe14ac5fff9a8441dc0309d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=toZKC8r7ZrZ9irTQfa2Y7jyvPHtIgJNKu824rH6BEiEcSD~dKWsMWvRpAsKT7gcW9ykWnQ60lDSbqwqdZvGkKu0337VSOHu4-18ZG0kKO9~R0Q9biEw-hmovO7xTJAu5y521U8KguFHRqquMF-pP2zOj9ErXFZpRYlu8PwNcF7JjQV2PTeikhfkkeQ9xMFTnben4G0VFU5SO2WMEC7CEaAYGrMTEJk-S7robBQ44gRBw0z-GQnLG~abfqtnDETF6Jw0P3WJxgbltIcYaWOjDYQY-m6pEVQ7ZpZW82QuPjkBDzcajU-PYRC19BzGTUrYo7cHV8mdfDmWSTcoSBuAOkg__",
    },
    likes: 5,
    comments: genericCommets,
    last_comment: {
      name: "Zain Torff",
      avatar:
        "https://s3-alpha-sig.figma.com/img/a485/4f2e/33e04a9df4ff362347aca2b1acc09fa9?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bEJG3cGgwo~XcMj-DelvQjF6CONcyJo3Cv4DYK-CFjbNBUb5TB5V2WL-EgnSEw9EPz6EQm6SfIlmEbetEJrIyibH5LMbpBXnLOWVofxi0gnH4t7sI42A1Ndy9I6D-GOJb3L~yLomWEPO1FTBlbdoTvaMlexR6bGy0BbLLuj9vHDenX6ggKKBxMl2H2XMTSMxKuGNi4cT1CYpE2zQTOAO~yqsMB6og~3EwNLhbEv9aX6GhPBtQpK5CwhoBi5pIf8kdfgNHoczW7v~F9Ah~xVzLXd40uD-yrL5jOZYK6Ol7KO7RZr4OZQ02stq3O4NPoJSA0nTX7F5dEctM6D34T~TDQ__",
      description: "Hooow! Nice Kayan",
    },
    listAvatarStack: [
      {
        name: "Anastacia Mesquita",
        avatar:
          "https://s3-alpha-sig.figma.com/img/0e99/b9e5/5399b54f6cdaefcee088195e1200bc20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S4BrRUXvVVPFhf4ElESRNED64nBt28casrZxSm-EeLZ8WkSYOpCaETv4yFuIuhJjR09-psRb6g6aAvh-zDxwHKZmDN-uNNWIL9guLTsQ-UnO9cHZoaHcaHMnQv2Y-jKXuGnSyudacJ18vDJHzVfbWTWbhBmTIaLF9oDlWwe01TEQjh8QkQpNVOnx-WLY6TNIqV0eg~GfzVIoIZljzy5MNRzP7EFPjHSyEoWSYwjd7~09BBrzFIllJbrffz8aT-RBd3ytKzL78jNNIL2~tcqrGoFaD0OEfpYrlCx5njLDe7sUnqNLL3Bn~tE5dakQzNSzE~qYs57UzLIJF~ttfqfQow__",
      },
      {
        name: "Angelo Silva",
        avatar:
          "https://s3-alpha-sig.figma.com/img/3b01/e647/c947dcc7c3814be035fc810d18483ca2?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H2FTE733sgOr58rlYSk0J~n73XgtCuIZX1MYCbBwpL5HiUCoOXTHZ3AzyOCB1~8bkUxXScNX3FlAQirTvN~3A3goBsxeRjGjwTNYjEn4l1~N6aIwJ5zaFGuEKifBfuBMYH76BLLBp87BNDH9~6IqpiqeYLXAd4tnVfJpfcUEnx7-1Xd5col2PNDgrg~6Q6JqtE8u5a7sFvUKcSU97Qc81OBZLmdqbkdrZHpjKBzVBDmWLWKu3pikfXjYWkVDegftrJvNgby2cuyXGu~X7t9fKm2X333CUVFUyejVb8igGDiO3VpH8dq58JIZSeE2I66Qfrv8Pw7SK7krK24wMEwVKg__",
      },
      {
        name: "Camila Rodrigues",
        avatar:
          "https://s3-alpha-sig.figma.com/img/bf28/3f8f/9a6f7d9ab2bb44cb9a6e8eccd4fda7b0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OBbFyqCUOhfC7JCTdybD3FxloNXpuE6e1KG5v7hK1sGm4TVdC~cOEskEpj~TMDThz7Z8S50z8d~hOslKiTaz0gFGnm68f92gwAR6~SCVhBxGahlRkTjic~9nbxemnQS6BCaDEyhLG8n8NzNyyS3LeMv-iqN21s55~Sow-U-e9LQs8GKqcKIptlcN4A1sbjZ~Fm15V67MPz67yIdVZ43euJW0iPPGrCO83SGHhf5QYjW03dbm40hRaJGGy0OgOAgbW3i53q~iOt4CVpNRep5Q~9SKlC9Kk0bsjn5XijtEKQD03QUoWH4779RtSodnq4rArTs4QrqCRUqkRq8YJ50BQw__",
      },
    ],
    location: "Massachusetts I Boston",
    timestamp: "Posted 24 minutes ago.",
    description: "I never tire of admiring this view before going to work.",
    image:
      "https://s3-alpha-sig.figma.com/img/fb0d/2197/3d8800dd0e0361a4f48a42783d1136e1?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=POYY7Vv1S~AvEn71WCDU6uOnrdPuOJiuOn1gHHal8taXwZw~qdBP4yxmzDWN4efllXXn1IJDVYLktq3~S5cHwzBkgbf8wBSQ7WFc7lssw6CtZqb8zIi9~opjppNoOK4DTER0u~cfqiG2HQo00Y-TPA2t~YsnFUBmUxL7T5c6BS~JWMLxvav9~~KcY2AfTcYuCU8bLzkIAPsZ7fcXwEmzrsjDj8PPSOal-STIRPdNFxcNQZtjwQapVwhCnzwSsNd6RWFkTnytjM1PxoSk2ZX-EIXwQWl1P27EA3caLRnqGXiXYiPgJ1Vajg9LXc5lSv9FVYNj9pVfmU8YpkFIH1NJQg__",
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "Bruno Lipe",
      avatar:
        "https://s3-alpha-sig.figma.com/img/1711/8d51/d22a22752beaac6d603ffa8392286385?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ld1V7grCk-0EFw9DU8ml2OSsCdzjHuYpezQdsUNktm7V6WPyMLKKEvVOxiEXMBjGCt9oi5gqlvhtV7dtaaX25J5-7G-2mwD~J4Lqf2GHLdUGmzigjKvd5rf7Q82bgQbL1LlETm1ENb9oBoRd5kj8QJlMcJibC6C~LqBl3V7OeNSfRs175jepxK7Xmx1DYgkdYXx~T8mrimAJBEhwTyDoKc7qCu0qA4VBnrbwWKxCILMyToLXIGg~uXtzoVNyF34BvWko~APKzXCyqSWm9RK1uZvjfXdnftF-~tI2u~metPTs5gKiPzTm5zQcv3A~uuZO-9UD4g8aO6wjprvQcHpISQ__",
    },
    likes: 5,
    comments: genericCommets,
    location: "Massachusetts I Boston",
    timestamp: "Posted 14 minutes ago.",
    description: "I never tire of admiring this view before going to work.",
    image:
      "https://s3-alpha-sig.figma.com/img/1a01/ac70/5f6fb9c81ef82fbeb7699ca51568c536?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QoH~33HfyhCJ9QXWPHAz-fgfZAdOed279gFCIxUGYWAvTgnZTQaKbV8KbQTpgoKUlH3WY8TwxFPrwd6j-uN6hqPzTjPhjRcAr-0MiPho4WLysF7tD2kcvwJcJOXS~w3xzSZewm0shG-cMXsdk5zwWrGPvdzct~rBDXTQHl38RIKeuwJ9VqseQIgPmI2PcRd1fOftsnRJzq-wA8Er5Jos7h0nngBRFjgi9y8p~1BUtAE~Fs2~NRjXBVU1CHQebTP8eapjGh~y6fOkkdV-kQopDuKG~M~AoyQkyt73iZijbDY6L9sIHaTtMdyhPt6i9dKjTDUrfZJMWRi84Le1OUpyLA__",
  },
  {
    id: 3,
    user: {
      id: 3,
      name: "Samantha Montgomery",
      avatar:
        "https://s3-alpha-sig.figma.com/img/e598/91de/fda096791f79004a074192968e064836?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxXA0jdQ8F84hBlvmKGnSIaPdNEKPQ0gzTyoIZUYswV-HrFYGVghM1fAD5YO-MByJboViXfyg2skCdvjBgmX-iRIYTQXPmYBBWHOKEaCOVGfeO0of-AEuHkMSDsPd0JZ76oF30hj8mH93IzZpQA6lkj1ktFlDJ4b4edgP~MKyghsGK5r8aiqdvbgvMZHxVpncRRuv~MOJ6i3nM1ksdGdghv9L1xRh5~vz6u6zsLaV~S4VaM0ytdZmEqMvuxyKG9sFqrV1FjvsM9BF4XXjnCggRL6F6y91KK2NX6eqvS1XQSbzKJBeYQQyhWijGGKJsZyrDsNJvSOUKOnxNPsQgeSfQ__",
    },
    likes: 5,
    comments: genericCommets,
    last_comment: {
      name: "Emily Johnson",
      avatar:
        "https://s3-alpha-sig.figma.com/img/5117/3680/3f08515e050bbda6e271200628f3579a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GsMDqDxfHMwv98egqquaxy9D-Cx7h8HKwTvN4bLYoO2EUy3-aTAQX~3RYxRwVKdKNymARPl5pcW4A8LhjLXSt82S9GyMWeaipAF7hnwJSsBJ8tCJsGw8l0Xt3lir05OM3-BGUXs-986QiTyXyj~GlVdb8nrv8mNnZQ2x85HQ6QLuSY07O-WnA7Ag8A5j5924ELYf3mg0QSzQ8NexsJYHuRjnPyZykbdKbyO5ZmH9-WyWy3uPkglIMbDjlH9-SBbeJeX9e3LLJEUpHkjf8V9qnlRpe93qdWxdQ7-SgiQ6Ddi6cs5X2ZmFDEAYR7GHH3wbLntNmv5a9pS7QW7OqCe02w__",
      description:
        "This captivating photo displays a mesmerizing panorama that is truly remarkable.",
    },
    listAvatarStack: [
      {
        name: "Anastacia Mesquita",
        avatar:
          "https://s3-alpha-sig.figma.com/img/0e99/b9e5/5399b54f6cdaefcee088195e1200bc20?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gX6EQEYBvptTBd6WcYKdj1C7LCQ0TdThg5egwLHHNfGwhxvLoSTBZZoAp0aFko6ZWMcd2Gf3L-hLyQQ8WqmRikGTWKZY1RrPTMhQt-9vsllPK1mptnSwcgzCHDMvr9pbUOkyjIHI-T4Rt2coJYC1W~nUVADzE-ojc0A0x-3M6ZgY3-hLmPsA-jQ0f82fMqEpOIzpurc-tH95sbdDSDroXOvl36nHSvNATdM2gDRonzCeGXr2mtjI1q5LCMcxHthHLdLj706g7J5N3UbmUpMiLaIomqGzGSOu8~dDuLf72reMH1orFWPpzlFkkRqKADd8qX0EzbU1b4Sh0MggJctx5Q__",
      },
      {
        name: "Angelo Silva",
        avatar:
          "https://s3-alpha-sig.figma.com/img/3b01/e647/c947dcc7c3814be035fc810d18483ca2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=na69DsAXjULPjupKew8CKNzBjO33CGLqeHQob7iqahViXcbzC~ARsuaLDkz~omAF4XgAf~1QlLQciYwPKJfupP1XVfiBAetPhlP2Ligx9484Gk1NsaaJQvLh38a4purHPAFNvCxhV5yCx~UUNocUCyNJ8WuieSzoy6chCVuP-Z8dbeRHOJMjgjhFF5ImuIEXz43xXYVwtBKQ7PV1wEugGdOYsNeCyyeBBXCtWu07utVbABokHPI7e2Dgr58L0njavSkW3jb0Gx~OpWrOx93JjntJpeZ~GaY943AXFCctB7PDf4LsYkrtZ5UCJGp4oNtd9QSykN3~z9~elHOxGDyC4g__",
      },
      {
        name: "Camila Rodrigues",
        avatar:
          "https://s3-alpha-sig.figma.com/img/bf28/3f8f/9a6f7d9ab2bb44cb9a6e8eccd4fda7b0?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FiOBiyKcqhJOm4Y56crfWccWvzzrVeRF~pw-wOBBMGy~xUc~THocAIAegA~bZtYF~UMMvNum71w3wIxyFYONjhxDEKyslOLxzySyE4gMu59m2npIGP6~x-~e01zGLO9IU6LyrDyE7MqGF4uq-rXDhPYq3QbcmruYY1elMYQdV4VOpgMimj4H5JYrO5dVUFlIt76VZpK4~25~x8dLrAF~QdGjQ3kOi-a6TXpVkS-5aZRPyEWG2aueQ1CtGGN2pD-R5GcrSBaSg-UTVscX--OBXidGz~JTaJR2ByxcsTBifwCDJWxBfwv8D4kyWH6nMobVY1FSWeH~QuqFUD9aoD2ZPA__",
      },
    ],
    location: "Massachusetts I Boston",
    timestamp: "Posted 52 minutes ago.",
    description: "I never tire of admiring this view before going to work.",
    image:
      "https://s3-alpha-sig.figma.com/img/27f2/5b13/0b3cc76484a5ff8327020153df6b21ce?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DTivFM6MHvbSjoIYFVev186MY~sr74Q6N76PLLz6Apfsdcl5JJibzXQn2N5yYbVykCYXuChe39OQ3Wh45Jg4hRFzlW0spm~wvxgPbu6j-jT4LT9tqVZqVdSwVtnHJn3k7R00tE3V0vkF9pGKH7jhqLrysyhgpnEVTaYlD3PZsJKaZzKLJGPBMZL3ruMoyZzHBaKP8x-mUYsROpJ25wVDm2uhZ7KtHHHsUDZTycNPz5iEnZql9PG1P9qZTwp6qXgzZMK2MyAJAit5AY6mELSH3CgWlnQnwa2DkFY72Zf0ZhB36cANE0xf0ANrkqSNJFnV6UBLtrdQ~OjptpVQOxO7dg__",
  },
];

export const postsCommunity = {
  community: [
    {
      id: 1,
      user: {
        id: 1,
        name: "Jackson Lee",
        userTag: "@jackson4change",
        avatar:
          "https://s3-alpha-sig.figma.com/img/9163/a5e9/81c82013e55cd2482140dec79732781f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YwFJwGGPp-2yUVcA2zGucOFqIPq7RTTLMORU5HYUNgcUxlLtHnEvJaoV0UiqNcJBnEWnS6u518lIwNrmWYnwVarcKv623RCawszl9B6YhaLngasxJENz2ktGyevR-5AVZx6pWEdI7gD9t65HVpv2p1WDtFI5aq9RJ7tdQyo-i6~NjFQKA-V8IX7HRz9xdCJrnj2J8Jlp7W33YZUhEjU4cZlPmXOgZx5ymD8JDllidv0AIBLPdI7SWAeGUS4BxEJS0WKZZLI0gfl5Ni6ZZsla7rw2Ir8DgSOJ3HIcnE0w6QcEAw17O3UAV2M50CV2kJofow4I1-AJSHQFmBWs~XIwqw__",
      },
      likes: 5,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      description:
        "Spent the day volunteering at the shelter and I’m ngl, it was lowkey exhausting BUT seeing those little doggos wag their tails made it 1000% worth it 🐶😭. BRB, adopting like... all of them.",
      image: [
        "https://s3-alpha-sig.figma.com/img/4371/65a2/ed734415a16b8c872affd12056ebae4b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ko66s3PrLoLBQy~opnbZaR99lFvcambpxd50krNrF87gKclbstOmzKO8k2U0bg-4b9tsI6B5JNWOnMi0BOD9snbVYUMlcHVYQBpNwbV6n4YbZP7dWYJLaFUBWQHjbYHnJk8-yv5xCRzgDOPO512zKS30SYnPL~AGbwGCAxVDwje4PipJqKXlvE-T1MbxG6IufKww84-227jUtbuDchIVaNuHRtEjL5f8D5uvgyMF5HOepVx~DP7saXi9UGZ05TzYi92aThejGTJiXJ1VkR0aNNH8lqavopqcmsrwdnipz3M~lHhMWtOM-nGYWQ8bi0o1n7ODvjd~yQUn-scufueIfA__",

        "https://s3-alpha-sig.figma.com/img/6e8c/014b/0db172b23b29f47fdb6dceff7dd01b36?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=asiLKD7aCDWODTpkXLPARbdu1~NRXhxWpBcNAgHINZ19M2kbxJ~13MBeZI~BQ782-SBua35fEGUu678xTGsSEfT-0MgHDBvmehQ7v9EzAxhCnPgT~dqY7fCtM~fgX-WtvHQo6BAZoWee7uD4RVUSukJBmeUCa5ENax0BwzN5gyb4w2bqONN49m8-bcgj1o2cB8sCvzHoRVrfTfHxEXggFHf95iLG8XbZLzOGV1UKvm2ph99uTyI2nRjRvhv4Xr2euY-DBwoJsbLYtqf0rmkh6dA6vM3cyF2LjkTr8kSXT~B437iU~tyFG2bb~yJzv6VWXO0m8dDzJpggfCjraf9KUg__",

        "https://s3-alpha-sig.figma.com/img/dc3b/905c/d9e451f1b72b95b36234a3d20dca9268?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m2p0FRx56NjXeQDPxEaeNQwzRZ3xd2nFvSvJk3YbZRg-gRC-z8ZMqAvboqcuj9M01DCwmGFzZWcXHtNwNVZFd4MZ20-u8-I0mEHd57NkzybMMtzkb-b~CeLLmXy5SaJ~ebIzGnO9Bb2DlI4GZxbTppoZebt2DJtH5C2sOCCh46Mi18~bAvh-i8ZrFonBIP5Sg22uaYlPq~cklrHLODciJubvVxSOUduSAMuWMpzj5i5fa6lOWv2ItUTQKEQHqqnFtM-3cvlDweSK7q6KuqaFsGOeWXxTHps7TDRq1cHxp-saplFBwh~8Fp4pPND765FY5AYQLdNKM3IejBOPoKPaVA__",
      ],
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Liam Johnson",
        userTag: "@liam_in_action",
        avatar:
          "https://s3-alpha-sig.figma.com/img/d0ed/52f3/082e64502d0ff05db75e9ed6c53f4465?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jg2E4rEwIDG-E33EdjJnuqFfynjHnRym9NaI~zdtqDfyX0xLfIG~UMKzDf6rlX696NsWccm-OeE67XvaLObWINiwaF32Mp4eaNrnaUqrWWSiQBo-d4BpM58CO9gR5g40gUp3gPtj-YZ0VTk4KaCLMC-MZk-1xXqn~d~N-Ul1eOx9srxFxwDTOCW6-p2Ec7MglVTJdweePoXzYloK-eEau91vQZ6BZZWRQggZU8~FeNcZCHlf4qWxoMrNJ1l48IzZFDQIOOvxbetVP9WOimuQ4Wcwn3-ocL66INggp27vtJzd6wU~TIz5AHSoLtaawCmDfdh~uy-TRoDfjbOAphrPYw__",
      },
      likes: 97,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      description:
        "Shoveled snow for my neighbor after the storm. Instant hot cocoa reward for me!",
      image: [
        "https://s3-alpha-sig.figma.com/img/1c7f/5618/58c0b5c05f689cd3e1d34abd4622f4a0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i2YoUyzb5UQsFGnQgt-IgF8GN-pwSc3ZszaJbKKb9wA2Z7mdc0gkGnRrw6YuSzMs6QDkAy~OH635~5Pxb5EyRm-~3Bq3dXrcZpCM57i9NO~1zKPhqhNMhXBeN~~uwvtD2muM5iDWIveqEqa8S8oc~wFE7ZJyiehj5yIYm5T0380axVrTqnKWC~odytWm9CCakkumgt9ARuo~91CiuhEhilxrRu~9~fJPqrkDj~p3CiHg-hfTzESMntMi256v8RZKF-Qyvll62YcX5m2bpVQmZ49dPAZyq9B8knfTXh0RXw6NEiH2ckfSwnKeC2zKNheKb97ji0mamjnq1S1NFK6PbA__",
      ],
    },
    {
      id: 3,
      user: {
        id: 3,
        name: "Sophia Carter",
        userTag: "@sophiakindvibes",
        avatar:
          "https://s3-alpha-sig.figma.com/img/a6aa/9d30/dbcf7e2bf12699387be3b928f19d99ef?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bgEV7gxiUUIr1gxjDqcMcgQdsEpmEkZYfoij8dJOFaTABECzytvUN6NCjOPozBU86gwQPKx7u2vVBo0Gcj5BuoYJAXdlDp1Q4TI0SiqcnqnPerzoFq-dFtlzUkaN-onqrluYuVerhedYGrX2uLYtF-690IZu4ejexMUpLgQBycycAgRJ2nbd0M4YlUK0nceqid~jAmCjFt1lCgWyfyVjuyOIkzJLn4OfSd4g7UhRE8vRq7Cf5znUoF-pSDhd7CqyDe8J0TLf6H2RW6unrtLYFGCq0MKguSiawXN8dCQlrggIiFdJJctP~49F9oBuiZC1Zb49yJsFHBPMIqQC6tixkw__",
      },
      likes: 14,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      last_comment: {
        name: "Emily Johnson",
        avatar:
          "https://s3-alpha-sig.figma.com/img/5117/3680/3f08515e050bbda6e271200628f3579a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GsMDqDxfHMwv98egqquaxy9D-Cx7h8HKwTvN4bLYoO2EUy3-aTAQX~3RYxRwVKdKNymARPl5pcW4A8LhjLXSt82S9GyMWeaipAF7hnwJSsBJ8tCJsGw8l0Xt3lir05OM3-BGUXs-986QiTyXyj~GlVdb8nrv8mNnZQ2x85HQ6QLuSY07O-WnA7Ag8A5j5924ELYf3mg0QSzQ8NexsJYHuRjnPyZykbdKbyO5ZmH9-WyWy3uPkglIMbDjlH9-SBbeJeX9e3LLJEUpHkjf8V9qnlRpe93qdWxdQ7-SgiQ6Ddi6cs5X2ZmFDEAYR7GHH3wbLntNmv5a9pS7QW7OqCe02w__",
        description:
          "This captivating photo displays a mesmerizing panorama that is truly remarkable.",
      },
      listAvatarStack: [
        {
          name: "Anastacia Mesquita",
          avatar:
            "https://s3-alpha-sig.figma.com/img/0e99/b9e5/5399b54f6cdaefcee088195e1200bc20?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gX6EQEYBvptTBd6WcYKdj1C7LCQ0TdThg5egwLHHNfGwhxvLoSTBZZoAp0aFko6ZWMcd2Gf3L-hLyQQ8WqmRikGTWKZY1RrPTMhQt-9vsllPK1mptnSwcgzCHDMvr9pbUOkyjIHI-T4Rt2coJYC1W~nUVADzE-ojc0A0x-3M6ZgY3-hLmPsA-jQ0f82fMqEpOIzpurc-tH95sbdDSDroXOvl36nHSvNATdM2gDRonzCeGXr2mtjI1q5LCMcxHthHLdLj706g7J5N3UbmUpMiLaIomqGzGSOu8~dDuLf72reMH1orFWPpzlFkkRqKADd8qX0EzbU1b4Sh0MggJctx5Q__",
        },
        {
          name: "Angelo Silva",
          avatar:
            "https://s3-alpha-sig.figma.com/img/3b01/e647/c947dcc7c3814be035fc810d18483ca2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=na69DsAXjULPjupKew8CKNzBjO33CGLqeHQob7iqahViXcbzC~ARsuaLDkz~omAF4XgAf~1QlLQciYwPKJfupP1XVfiBAetPhlP2Ligx9484Gk1NsaaJQvLh38a4purHPAFNvCxhV5yCx~UUNocUCyNJ8WuieSzoy6chCVuP-Z8dbeRHOJMjgjhFF5ImuIEXz43xXYVwtBKQ7PV1wEugGdOYsNeCyyeBBXCtWu07utVbABokHPI7e2Dgr58L0njavSkW3jb0Gx~OpWrOx93JjntJpeZ~GaY943AXFCctB7PDf4LsYkrtZ5UCJGp4oNtd9QSykN3~z9~elHOxGDyC4g__",
        },
        {
          name: "Camila Rodrigues",
          avatar:
            "https://s3-alpha-sig.figma.com/img/bf28/3f8f/9a6f7d9ab2bb44cb9a6e8eccd4fda7b0?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FiOBiyKcqhJOm4Y56crfWccWvzzrVeRF~pw-wOBBMGy~xUc~THocAIAegA~bZtYF~UMMvNum71w3wIxyFYONjhxDEKyslOLxzySyE4gMu59m2npIGP6~x-~e01zGLO9IU6LyrDyE7MqGF4uq-rXDhPYq3QbcmruYY1elMYQdV4VOpgMimj4H5JYrO5dVUFlIt76VZpK4~25~x8dLrAF~QdGjQ3kOi-a6TXpVkS-5aZRPyEWG2aueQ1CtGGN2pD-R5GcrSBaSg-UTVscX--OBXidGz~JTaJR2ByxcsTBifwCDJWxBfwv8D4kyWH6nMobVY1FSWeH~QuqFUD9aoD2ZPA__",
        },
      ],
      location: "Massachusetts I Boston",
      description:
        "Tell me why I went out for snacks and ended up carrying groceries for this sweet old lady? She called me her ‘little angel,’ and y’all, I almost CRIED 😭",
      image: [
        "https://s3-alpha-sig.figma.com/img/89e4/d61c/a31a533439bfda1c649949b38d690e4e?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bONdK6~LO9uxFd6G1EJ2zaYgleljAEjd6n2JA8Dcq06xr5Jj0SDwzLweSALiZXIjETg9IKUnOcat6XIGdhyxlpHBTYchNf6EyNaU1zqNNEg3~1AnhxnX7~G8MN6dlfBsJrCIzk~vGm7vtyR~ywH-VyB4zu4-4h7UVrpHrI597airmr-DqXvWbSTUZ-Fefkibx1LTVpr8C8zUw6WN2kik2mzP6mVH4MzY1iYEPNQcieC1TH1xfuJQ8ACiYY5whpgmmuZ92M8ri4ggaM5tL~71f2Lehdo1XXKjeuuQxT5z8jz2~iei-e6djffYh6FjZSGZCnRH3GhSfbNiPPbmG5m~0w__",
      ],
    },
  ],
  trending: [
    {
      id: 1,
      posts: 702000,
      title: "#RideShareAngel",
    },
    {
      id: 2,
      posts: 673000,
      title: "#PayItForward",
    },
    {
      id: 3,
      posts: 600000,
      title: "#FoodForAll",
    },
    {
      id: 4,
      posts: 598000,
      title: "#StreetHelper",
    },
    {
      id: 5,
      posts: 589000,
      title: "#GoodDeedsInAction",
    },
    {
      id: 6,
      posts: 402000,
      title: "#BrightenedADay",
    },
    {
      id: 7,
      posts: 301000,
      title: "#HelpedOutToday",
    },
    {
      id: 8,
      posts: 109000,
      title: "#OneSmallAct",
    },
  ],
  yourfriends: [
    {
      id: 1,
      user: {
        id: 1,
        name: "Zach Miller",
        userTag: "@zach_is_great",
        avatar:
          "https://s3-alpha-sig.figma.com/img/9163/a5e9/81c82013e55cd2482140dec79732781f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bt6U9Xnd5odefNlICpdUPNajY3W4HaTMY7snSnsGZxzYtCUL2pg2Teh5NkpAA7ZZfVl-4~Z~9nfMsRYudy1oKBrg24jFLUYxZMsSHzn1DXLsRkvZEB42JZtXwuKIGI8LrW8qznT54GfvJm7pA~7c8nA8~fQEXEsxMh0ykNzG5a4yClkhjgBboX1Y-GAs-Y~6xNtOdKtp13CRtso5-gXTRdXFAbm3ac0uXKOaYJe7FBqz3p~z7aoz1lD51FhET9Eo1kBmYnF35d8bXzVUyLlHyCU70V65mDOiTMGVULGMipgWpfonOy7rP7jbMFG2xGG~w9PDkC5cfsQnUHrVV97BCA__",
      },
      likes: 1000,
      liked: false,
      isFollow: false,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      description:
        "So a kid at the bus stop dropped their snack and looked sooo sad, so I gave them my granola bar. Now I’m starving but it’s fine 😭. The way they smiled at me though, like 1000/10 worth it.",
      image: [],
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Mia Wilson",
        userTag: "@mia_loves2help",
        avatar:
          "https://s3-alpha-sig.figma.com/img/e00d/e85b/2de83df46cc379e1aa0e4f12a681ca57?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l4xIjSUjVcQb~DL1XZbiuwSA3oU1LF6dTcCeL~Z1q0iThsZQGAe5YtgUhCH6t0Y7Z9shacNFGnA~uAgqjAuzl46eJ3vWLRF2DSwiWCywqq5tVB7L3ippNdDcHXpIqt8AqYrMpX0mW7tZVPWiyvFb0pddo6fTwWZf8Y4Q2LReN3gCv~hPw0eho2cEJcarXzd7mOZzH3jrzgtGlpF4u2-JHw2TRA4ONOu8ykrlR0ImT8w9X5WlqyV1JR3cTSX3wLyDKfEND3ZJ0-pQrdvoSDasHC9LNm1pMJC4h~yYKwMKDrJgThonUDnNpuYkz6S47QUhzdFIJrhKZW~hr7OSZEMwvQ__",
      },
      likes: 1000,
      liked: false,
      isFollow: false,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      description:
        "I went thrifting yesterday and found a ton of cute sweaters that don’t fit me, so I dropped them off at the shelter today. The lady there was so sweet and said they’ll keep people warm this winter 🥹. Now I feel like Santa Claus or something.",
      image: [
        "https://s3-alpha-sig.figma.com/img/3825/320c/d571dd98e7e2957c85d517dec8ff8a00?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o9-E8FiPZClURlxhdN2h4UCkdYn1w2CTPrC9FxwJBc8q3tmVJAxkcRFfh~aKWwASaL9uNG9P4cbmpw4WLUi7kzJc3E8nCYqKeW7DX0VqXHEwdZr1TRWamJbm7Oyipam55EDuMqan-ZJ5ly~IDOqpAU1GQ058J3cZFQFQMxJu-~xc6YsArqnF078KpoOjPzsBOP6kEU8n9zTakuvrfaK4jLho~qZ0yzJrs~NxIKcKnr73zvajMAbWp1aabhYaNNnj4Vqndd~6g3l0uAHYiY~SCydndQ7UjnFZpuTDyL~BkGmOUXBZhF5nAJsbbbyOuVb8uilbpuRn7~wVOIvo58HVyQ__",

        "https://s3-alpha-sig.figma.com/img/2629/4e15/d3a60c326d651d9fa44521ac507b4a47?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KSr9QQTRxZWySw476pgp~gfzwijD4YaBwqCZYiWJKszyBk1Qp89TwOlu1C3m9tJPUnbpeF8Or1rq~Ml~oD4QIi8OboEAEdh3k1Su7MG~ZTG3xGkjUIdQYSIpHT8UnXdoIu~qQ8XQXiXccO~px5fMJ4eC9kMEvowugzsNnaKeuD5PZkiPbv93ugzkBp-eQgHLXZpe6YMGw6lqT6kcIj2bR3on9TLOQyd2ugoa8S-7AuB6UD88c-rC8uvKZZIUaAbJ99vmKLXnKL8t0jDCO9h~cPZZWmDzklqo0nsEcQejLSV~WkFSCfyj9Tbo4pQeJfQU1p3FPzCnqppVXbvSIAiGWA__",
      ],
    },
  ],
};
