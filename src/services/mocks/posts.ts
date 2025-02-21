import { genericCommets } from "./comments";

export const posts = [
  {
    id: 1,
    user: {
      id: 1,
      name: "Paityn Franci",
      avatar:
        "https://s3-alpha-sig.figma.com/img/6e16/a6a6/b363bacf9fe14ac5fff9a8441dc0309d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=baQTHQ44dGp1ffmfxWqrDv01Lw-zdcg50fjiBCov~XXjfBSDtY4dWaoTFZH8GWs5VDiXa3fiu0ONx5WiG~DbEmC4Km4PZ~pVDMkz7NY~XNOTag4JdM-jCGhZuDTQdxZBLm-CFk2BNBmUT-pwzK~uf75LqOWzBSmnb1iMdCxrQ00w5nw9WzSQANjQSioMhwpVCmzrajK9hLA6T~9Xaf1fjQO2LHHyHy8e6Zrfmy5i8V4gGzRPX2ytsWzT26OSrXzzv9yW9Q1p~pKhoyqQ0bzAc8LD0GFynsD13O6sCkIjjD8vPXmtt5i7A8t2GzKQ-gu9px6PssCjWOqRQ2VXfGdl8w__",
    },
    likes: 5,
    comments: genericCommets,
    last_comment: {
      name: "Zain Torff",
      avatar:
        "https://s3-alpha-sig.figma.com/img/a485/4f2e/33e04a9df4ff362347aca2b1acc09fa9?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FChb1lVOfyET5NeljadPqE3NIivgP2t1FBipZfMIdpctGxAynAwxFsowQlJv0zY6glqS50FngMQyvcU5nPspitXHlve8KeXwkr5FNRX87HTquh997Uy-E9ldeiw-Chi0oxpvodie7-6IBZ8eXQQsnrHMM6MiGyNcbAGSjptH~WinPRxManuzk-V1EsNdunO9fNe8gia0vGimTuBjLPIrfToCfg6x5Tlnot8LX5ZU~Dp8sh0KYxjvghheiaTVTHu9QwOFyjxn9UyLHt~81ySAhSgGMbnaWg9ARvezjCztHi5V~MWxMstAFdQfWWuK4Ic1srkqOtOcOTfjraAPt-whFA__",
      description: "Hooow! Nice Kayan",
    },
    listAvatarStack: [
      {
        name: "Anastacia Mesquita",
        avatar:
          "https://s3-alpha-sig.figma.com/img/0e99/b9e5/5399b54f6cdaefcee088195e1200bc20?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ajgn4JHq2XF2CNeKHaIZqxs7gGqFnBB9mS7iuu1Ul8WQ5Jo0yCnNXhKT5uvTOeEJkpCbHrcwAswqIOPRDx17Wx6xX0~SByXb5CYewBBa9rM9aBHj-moCXbDHJDpduX6khPhzrSqNbuKLWvgHLRW-xSTT7u6ELIBlZZpvX-EHFW6tOlYuPvjJe-Gq~XGd5FoD4QrCmimBFQ6Vam7khz9vudXxvf7NFRctUZu5lumk0gHbKaQhKD9BEGVq5WBagGnNyNd0a5WV4adD~jA~gpo7sSAtQ71edakUkzW4OjhT8Jgfjihtn-UOV3FVXaSKC98AaHK~T~SMLB0M6Z2~5azjSA__",
      },
      {
        name: "Angelo Silva",
        avatar:
          "https://s3-alpha-sig.figma.com/img/3b01/e647/c947dcc7c3814be035fc810d18483ca2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DV3M7CWS2XFShX2-FMGV0dbxCN-pk6G8Oxfk9JgMQAH6NxoIaqVKCdG6XGSfnjDi8RUZxJr2et8m5CN88Da7ZH-c5aJFyHfxfV1PCC82hpo6g2A3JxF4sfYq4rsl7eIxmia-91gFBubIVcx7N-x4uqy2MQ7NvqfxWdGpSzSNp8KruGCY~Ej3~qbvwEUHI577RdoTCgKJUy2go-8hyf3sC0Dlsj0B6IfUOe2ZCl8eP80jrYW6KwkQAeCd0Lq2KHMYlb1u4~oaH51IahTF9UhIzNCIxvNMhUQKS9lcFYrSD8dVj-aWgqLFUUU7fhdful7iGnKBhldA5900H0b5pEWZ8A__",
      },
      {
        name: "Camila Rodrigues",
        avatar:
          "https://s3-alpha-sig.figma.com/img/bf28/3f8f/9a6f7d9ab2bb44cb9a6e8eccd4fda7b0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KWeqHFl-ouEMk4eDR3~y~ZMM5FRQ3qeI3G~MFo3Spye41a4m1T4UUJ30KnSUfEQgcsBN4S-Kr8OBxPCYxp-dRyMbQ~Nq4FAgHUtzaTisxhvskDnXgpGfvDDa5pAsqOtVzGy4gxqyosmNKIxEmp1lxinh8tEPwAUoPB60lJnYB51aEL9TAxZADkRiW0n3o1ur4G4zMZdLWETw7iKsabLQy8E1BSCFL~o-Ab9YXNUTyTkc5~q53s2dB10T5MbMmJ9m0IT3kN702JkN~t2pEjfFx2AMWwxiF13c7QYyYfx4SdtVMTK~3E-963C7UoMcuT3BsQA6Ld4tvvN5vXaoiqsSoA__",
      },
    ],
    location: "Massachusetts I Boston",
    timestamp: "Posted 24 minutes ago.",
    description: "I never tire of admiring this view before going to work.",
    image:
      "https://s3-alpha-sig.figma.com/img/fb0d/2197/3d8800dd0e0361a4f48a42783d1136e1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gjG2nGwjv8Nn05OUEmPoR4GD0qW3gdr~Cdu6urRn35JlyWVxbWOhVaxw1RuLriTgL21c2gy6y0uFPzte-fl-UUGqyjq5H5aJJV56hv7BmX-97x7bjOiGpQkjnoF6~C~5tr9Pd2~R5ce2Yvpz2501FvCpwzFVKEPbpEGGqtBi26udzBOYIaxSviQZoJc4mv~bFjWeZU55MlN-YtN30vAYNRukYQXQ~yt5OD4iYgHz0GWXjthqsSB6q2ydsA5PSP370nfpygW6-wvVhwvAjUVrMu3F9tngMd~-alLo-OWaBgdSMyJB1P8p-QJtYnUe4gittd6Q5YAbVeExupTgAsvSGA__",
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
          "https://s3-alpha-sig.figma.com/img/9163/a5e9/81c82013e55cd2482140dec79732781f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bt6U9Xnd5odefNlICpdUPNajY3W4HaTMY7snSnsGZxzYtCUL2pg2Teh5NkpAA7ZZfVl-4~Z~9nfMsRYudy1oKBrg24jFLUYxZMsSHzn1DXLsRkvZEB42JZtXwuKIGI8LrW8qznT54GfvJm7pA~7c8nA8~fQEXEsxMh0ykNzG5a4yClkhjgBboX1Y-GAs-Y~6xNtOdKtp13CRtso5-gXTRdXFAbm3ac0uXKOaYJe7FBqz3p~z7aoz1lD51FhET9Eo1kBmYnF35d8bXzVUyLlHyCU70V65mDOiTMGVULGMipgWpfonOy7rP7jbMFG2xGG~w9PDkC5cfsQnUHrVV97BCA__",
      },
      likes: 5,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      description:
        "Spent the day volunteering at the shelter and I’m ngl, it was lowkey exhausting BUT seeing those little doggos wag their tails made it 1000% worth it 🐶😭. BRB, adopting like... all of them.",
      image: [
        "https://s3-alpha-sig.figma.com/img/4371/65a2/ed734415a16b8c872affd12056ebae4b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uC07bt0e50P466~AdYu1VHECe~eUwOaBa6H5XISkIykWJILTb2Qc1niRmHP~2CWHP4E3yLEpmOtuqMybFXPc4WZFzc4OmRq7owfwkpJ713YPWCEpbCmkhKVVatlbReW9r4zc0nEbtYs0zbKyiMPxlirdozwMRSVPlbw0ncq2M3DDdYyuW6MWBqdaAv~o5bjvc9Bj89TSuI65IuBEJS1O~nqxzYasAdXFLvO8it-d7OaDOkxNifLkL5qE6J21x3wUumiALTPoZ1n~Fllu5UL2RcUpMjFR1mAWo68S7ubTE-pFX0yLf3x6us8ky7ohvbuol-JA20sj33u4~4OeezfyMw__",

        "https://s3-alpha-sig.figma.com/img/6e8c/014b/0db172b23b29f47fdb6dceff7dd01b36?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Veru3548B7L2mhRrCjb6vOwvWcqUccfWw-KRNl~667zUM94Aca9gKSSqpp3sjet88lYZTwbasYNkyJ~OwEtT0nRcUeMHTQOT00ql16hHePyUGCeMsFNfJjFXxWfF6TvN9838f4EVp74skckRv1IyB6jQGZQ0TBJK~Zc8dHbckLfHvHdDSlG4NAJQjjt9id6SkSudOsZJiAh9ys9SeJJdJ7ecS8~EkFjdGELNU1VkONnbXNRzeUA3MXssinvDYek0N-Ob0IUxJBtCDFeviNpiZEZ8OQU0oEIpjxxCCxrCpWeS7Ppj6KP6kmN6cIoeIEQXT1hvO1B8WCBEcYX5aXfatg__",

        "https://s3-alpha-sig.figma.com/img/dc3b/905c/d9e451f1b72b95b36234a3d20dca9268?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lBzDS2t3Y~IX8nTyLzbxG05q9oMzDZkZmd~A~mX-kdxLE6~4Vn3gyz3eQJsxyylatWRah3av2OxAD8wqnSi7iolFo0RUgpd-NySRuCryITp65rHCa8DcJeMXNpGaCXT~Fq1jh2WrKlG306oGie7RzPLab0QaBP1ug6159l7QSTEUiE0O1eS~NpQMJUTi8t6sgwV9-RGcnflZY2XmWn3hVf2z9vvYm0FZIHUlA0xvox9CwnDtjhRHJD1B76mgexdGYI4hkMdFXP3IJ-bgA2t2Jq4L9FoZYqtkOrVzWipm-s-gifYF4TAJxxth99oIalsf-n5b0JwnbedmvqWHmxV4bA__",
      ],
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Liam Johnson",
        userTag: "@liam_in_action",
        avatar:
          "https://s3-alpha-sig.figma.com/img/d0ed/52f3/082e64502d0ff05db75e9ed6c53f4465?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NZp~GtAkEC6MzKZwKdB217fIuGb~UxfihkAjcoc43nOmhbOl91I-ggzbBE6Kf7W9GMqY9rUQZlhs3hYNJPAnTHb3TnE43v5~7TJZyl11NNynRzNlS5F-Bh3~FFwEl7IB56TwYRGNwMDau7G89ii9z94RgY831PQr~Juy0yYOMmisWw9aNY9-GJvijUknkiv44bSLtXB9XKEIWwEqbBRgQuavrTo~5PviUgxr-pqYE7Odj3TsUIsq5wY7rXAJUCORtZ7zn-~qsT9Z94qBUZ~vpJTOlu54cGWbEJsnRigZ5u~7eAGNd1VF-d0td7Fp13nf0HkguDTl9k5AaA1Ay4Qieg__",
      },
      likes: 97,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      description:
        "Shoveled snow for my neighbor after the storm. Instant hot cocoa reward for me!",
      image: [
        "https://s3-alpha-sig.figma.com/img/1c7f/5618/58c0b5c05f689cd3e1d34abd4622f4a0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jf42q0r-XCTioRv~KrjQeHnHZOH~jskBFkD~WlsD-PsKvIASSkkSeC40770Lxbzj7sciaWjHOS~spWmauVK-HXkb7Oz12d3ChSHNk2cFkeb8DAJjRRR3YuDOjtRlwID7wwtje47KRkpxVkteNmoMCCnrky655~DAza0IZK7FWiFEXvyEdBlhBNsC~3fmkflPnbSd6ovqC8hqMiQP4F1owub62AePAYAK7Nmv51NjMaxINR5L1qmu8No356cFp-RKF8oYYXjWGyFddrY4z~0Sr8JSDxeyUWZqAmm-ccUQe5O-pY4upeH~6Z2OrjXPcv9zxg9sX6--02RTNAcqZWscpA__",
      ],
    },
    {
      id: 3,
      user: {
        id: 3,
        name: "Sophia Carter",
        userTag: "@sophiakindvibes",
        avatar:
          "https://s3-alpha-sig.figma.com/img/a6aa/9d30/dbcf7e2bf12699387be3b928f19d99ef?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bq8LWtLHJ0eZG7KC9CDCGPoAe~~jxECquROVJsCnt-jTb-2TLe0cI2i1qBHKEeeXozl0DEJJ7-m37kmq0em8MP3wN3-YEKv1EHuVHMS9C8Vtxud3Fb5UzY0R~iC4W-YqV~QfD3L6b2MCy7enu3cK1PObYZ7kiSrHWrULC8KFcSpiZXhEYwmQx5oxRnm~Ouriia8zQIm7j~diwYe0uvq2UaPN6ea5LQBk~5inkyujZLL5sxm2lL~NF0XZ2oyOSzSDyGAe9CR3GgnLzcXtlqhFM1MtLczVvqrM0fZ9MKL1Hi-AW4sa8zji9-EE8jJneCyCJcoHm6XCk0O9VPTROouHVA__",
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
        "https://s3-alpha-sig.figma.com/img/89e4/d61c/a31a533439bfda1c649949b38d690e4e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pTmZxvQdser9b6w97x9EWQTPTVCOiEGLw-OQOuWJG1hIOFdxfk57kLKWJVThq4aiolr3U2PO2hWxEiYW0IAl1DLhAKz9YKdTjCvqruGlSbVCN29HI1qTZ6O98pITykTjuqYvEOsvK5UD3imI8~jO9-MV0IwIjeUBVyVwem~Pu-IWDUdhdngVhHm~XGLn--TGyeJD1jKJvgOKdVHHnVTRrCfAx6AtTvBNhy-ztPHtspyZkefRL4u90X9wm2-JJZrDGZDDv4xzJSKbK1aH4z5wvq0XNaPA3Qqk14vcmdSTFilHF68yx4SFt6BrqFO2mToU7wQSeXqHSSVm-s8gmW-Tow__",
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
