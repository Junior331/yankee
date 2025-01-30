import { genericCommets } from "./comments";

export const posts = [
  {
    id: 1,
    user: {
      id: 1,
      name: "Paityn Franci",
      avatar:
        "https://s3-alpha-sig.figma.com/img/6e16/a6a6/b363bacf9fe14ac5fff9a8441dc0309d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nSX1ckYbdkPkfpgkY46tCmXOB4urCttW3h0m42dNsTXkULhQMOGaNqm1pyN9MsluaI6piFLi~GYy6jQF4NB4p7nd~12DvETZCUfD4BZJCh7NcNuvSPtxcBgLxjyZ0W7LGFyCfbX068s0eyB4VLVmGtN3dx6LOa8Ez~bvY4iiVQK39slUnFEvnqEhlaaVACVkEvVQSYYTzJuj8L3KnhJ~suaVspaYVL0MpE0tJnxKZGc8fZcFC19koCsxYsaF68EbgYZ5sO1ojtzJv3PImoPPNO-hrJa-aEjFDKnLL8fMpFZtLTI2YWtAAWl4oFtY0uVhU1iqLnQAfRLakoOTuLrBww__",
    },
    likes: 5,
    comments: genericCommets,
    last_comments: {
      name: "Zain Torff",
      avatar:
        "https://s3-alpha-sig.figma.com/img/a485/4f2e/33e04a9df4ff362347aca2b1acc09fa9?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gN8~eNIUTFpAGtPEc7JSHlOdVEe4rVpc-Bb8PzsqJhcX8crELrb09gRTs2pqSHCXJ5I~cwCOVq03ofeQDtBTetg3PMawKvnVXrhcbYvmAnfJuXXwu5JMiB3MuZrD2BcfN8ADjMfn5ZcMXY3PP2aBqpEpPplCH0fn-GGYjgObs8ymId~IpkTbBayQ2kXV8TIUtP-NebVAbSyIIeL0WGnvCJgJap8v6fUMA8s5Vu0C1DSyqrUoA9W9frFKF5HhA4E8aWx6GSBR4~uYg0hBsAwI79lZgrPytvoQzd5j6j5s8P8hRBff6mFLzFv1rvLE0IhwfhmwcM0pxxdazL2Ei5gL8g__",
      description: "Hooow! Nice Kayan",
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
    timestamp: "Posted 24 minutes ago.",
    description: "I never tire of admiring this view before going to work.",
    image:
      "https://s3-alpha-sig.figma.com/img/fb0d/2197/3d8800dd0e0361a4f48a42783d1136e1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IFq93om40aZZ2ljDwRtsTXgaXQUdzrhpzUCOEk6Nv2h3QYTZiTTDoNw6th0NTHoZ6wH~gInBaBO-kUBmiIFJmdn8G28SAh3jdFL55QlfyeaIPZjzCimD8M8uSDliSq4-pDjWl2QQ6P1EEHtf9PgMzSuo70B3xr7380VZoozJ-7nuZE~WkyjWJvWGzAU9INt8Vq-7fUp8pjJ4IRXFHQ9WiEI6ZTmdQYQa4XHq62IQO5niDbGEnnzzQz2xIx1ALdTiu8lwyA-6fbdyhyMisA5PtWiP9HuC~XtL3g~MT30LiyLaVZ~IveNJCys-bNG~vpUcxKfHx3DSe35glhBJlSgM9g__",
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
      "https://s3-alpha-sig.figma.com/img/1a01/ac70/5f6fb9c81ef82fbeb7699ca51568c536?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMW6Oh9UCg4LtIISc0EAeks5alpZ~DJf1Ck5GDzh0T--YpqFxABMFvF~fzuL~UQCl7zPrPHN~e--0A-5hl9OF34YtQtEnlGHVNH6lIvIN-P-q0Z0edm9nFeHxAZue8OCIbU-4h8qRvMEn3t5TNbRqsccbBrMC-c~Q-jNkx2vhe7Gd~SqZGEfrcONlrkktTmamjT8GqHAd24Mfd3JT2z92-FN1rXjZCLxMHSLomrZYjyTmeOY25KGi1yuICHqJ-zdUq~7Al4mAM3sSfNXjqLLEilopvhxM8E1Z7H~npMYl-PDivxoTQH1gdaUgsiT4OWkSsc8LdejLSFLT-H9HjQQyA__",
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
    last_comments: {
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
        name: "Paityn Franci",
        avatar:
          "https://s3-alpha-sig.figma.com/img/6e16/a6a6/b363bacf9fe14ac5fff9a8441dc0309d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nSX1ckYbdkPkfpgkY46tCmXOB4urCttW3h0m42dNsTXkULhQMOGaNqm1pyN9MsluaI6piFLi~GYy6jQF4NB4p7nd~12DvETZCUfD4BZJCh7NcNuvSPtxcBgLxjyZ0W7LGFyCfbX068s0eyB4VLVmGtN3dx6LOa8Ez~bvY4iiVQK39slUnFEvnqEhlaaVACVkEvVQSYYTzJuj8L3KnhJ~suaVspaYVL0MpE0tJnxKZGc8fZcFC19koCsxYsaF68EbgYZ5sO1ojtzJv3PImoPPNO-hrJa-aEjFDKnLL8fMpFZtLTI2YWtAAWl4oFtY0uVhU1iqLnQAfRLakoOTuLrBww__",
      },
      likes: 5,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      timestamp: "Posted 24 minutes ago.",
      description: "I never tire of admiring this view before going to work.",
      image:
        "https://s3-alpha-sig.figma.com/img/fb0d/2197/3d8800dd0e0361a4f48a42783d1136e1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IFq93om40aZZ2ljDwRtsTXgaXQUdzrhpzUCOEk6Nv2h3QYTZiTTDoNw6th0NTHoZ6wH~gInBaBO-kUBmiIFJmdn8G28SAh3jdFL55QlfyeaIPZjzCimD8M8uSDliSq4-pDjWl2QQ6P1EEHtf9PgMzSuo70B3xr7380VZoozJ-7nuZE~WkyjWJvWGzAU9INt8Vq-7fUp8pjJ4IRXFHQ9WiEI6ZTmdQYQa4XHq62IQO5niDbGEnnzzQz2xIx1ALdTiu8lwyA-6fbdyhyMisA5PtWiP9HuC~XtL3g~MT30LiyLaVZ~IveNJCys-bNG~vpUcxKfHx3DSe35glhBJlSgM9g__",
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Bruno Lipe",
        avatar:
          "https://s3-alpha-sig.figma.com/img/1711/8d51/d22a22752beaac6d603ffa8392286385?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ld1V7grCk-0EFw9DU8ml2OSsCdzjHuYpezQdsUNktm7V6WPyMLKKEvVOxiEXMBjGCt9oi5gqlvhtV7dtaaX25J5-7G-2mwD~J4Lqf2GHLdUGmzigjKvd5rf7Q82bgQbL1LlETm1ENb9oBoRd5kj8QJlMcJibC6C~LqBl3V7OeNSfRs175jepxK7Xmx1DYgkdYXx~T8mrimAJBEhwTyDoKc7qCu0qA4VBnrbwWKxCILMyToLXIGg~uXtzoVNyF34BvWko~APKzXCyqSWm9RK1uZvjfXdnftF-~tI2u~metPTs5gKiPzTm5zQcv3A~uuZO-9UD4g8aO6wjprvQcHpISQ__",
      },
      likes: 97,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      timestamp: "Posted 14 minutes ago.",
      description: "I never tire of admiring this view before going to work.",
      image:
        "https://s3-alpha-sig.figma.com/img/1a01/ac70/5f6fb9c81ef82fbeb7699ca51568c536?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMW6Oh9UCg4LtIISc0EAeks5alpZ~DJf1Ck5GDzh0T--YpqFxABMFvF~fzuL~UQCl7zPrPHN~e--0A-5hl9OF34YtQtEnlGHVNH6lIvIN-P-q0Z0edm9nFeHxAZue8OCIbU-4h8qRvMEn3t5TNbRqsccbBrMC-c~Q-jNkx2vhe7Gd~SqZGEfrcONlrkktTmamjT8GqHAd24Mfd3JT2z92-FN1rXjZCLxMHSLomrZYjyTmeOY25KGi1yuICHqJ-zdUq~7Al4mAM3sSfNXjqLLEilopvhxM8E1Z7H~npMYl-PDivxoTQH1gdaUgsiT4OWkSsc8LdejLSFLT-H9HjQQyA__",
    },
    {
      id: 3,
      user: {
        id: 3,
        name: "Samantha Montgomery",
        avatar:
          "https://s3-alpha-sig.figma.com/img/e598/91de/fda096791f79004a074192968e064836?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxXA0jdQ8F84hBlvmKGnSIaPdNEKPQ0gzTyoIZUYswV-HrFYGVghM1fAD5YO-MByJboViXfyg2skCdvjBgmX-iRIYTQXPmYBBWHOKEaCOVGfeO0of-AEuHkMSDsPd0JZ76oF30hj8mH93IzZpQA6lkj1ktFlDJ4b4edgP~MKyghsGK5r8aiqdvbgvMZHxVpncRRuv~MOJ6i3nM1ksdGdghv9L1xRh5~vz6u6zsLaV~S4VaM0ytdZmEqMvuxyKG9sFqrV1FjvsM9BF4XXjnCggRL6F6y91KK2NX6eqvS1XQSbzKJBeYQQyhWijGGKJsZyrDsNJvSOUKOnxNPsQgeSfQ__",
      },
      likes: 14,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      last_comments: {
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
  ],
  trending: [
    {
      id: 1,
      user: {
        id: 1,
        name: "Bruno Lipe",
        avatar:
          "https://s3-alpha-sig.figma.com/img/1711/8d51/d22a22752beaac6d603ffa8392286385?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ld1V7grCk-0EFw9DU8ml2OSsCdzjHuYpezQdsUNktm7V6WPyMLKKEvVOxiEXMBjGCt9oi5gqlvhtV7dtaaX25J5-7G-2mwD~J4Lqf2GHLdUGmzigjKvd5rf7Q82bgQbL1LlETm1ENb9oBoRd5kj8QJlMcJibC6C~LqBl3V7OeNSfRs175jepxK7Xmx1DYgkdYXx~T8mrimAJBEhwTyDoKc7qCu0qA4VBnrbwWKxCILMyToLXIGg~uXtzoVNyF34BvWko~APKzXCyqSWm9RK1uZvjfXdnftF-~tI2u~metPTs5gKiPzTm5zQcv3A~uuZO-9UD4g8aO6wjprvQcHpISQ__",
      },
      likes: 130,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      timestamp: "Posted 14 minutes ago.",
      description: "I never tire of admiring this view before going to work.",
      image:
        "https://s3-alpha-sig.figma.com/img/1a01/ac70/5f6fb9c81ef82fbeb7699ca51568c536?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMW6Oh9UCg4LtIISc0EAeks5alpZ~DJf1Ck5GDzh0T--YpqFxABMFvF~fzuL~UQCl7zPrPHN~e--0A-5hl9OF34YtQtEnlGHVNH6lIvIN-P-q0Z0edm9nFeHxAZue8OCIbU-4h8qRvMEn3t5TNbRqsccbBrMC-c~Q-jNkx2vhe7Gd~SqZGEfrcONlrkktTmamjT8GqHAd24Mfd3JT2z92-FN1rXjZCLxMHSLomrZYjyTmeOY25KGi1yuICHqJ-zdUq~7Al4mAM3sSfNXjqLLEilopvhxM8E1Z7H~npMYl-PDivxoTQH1gdaUgsiT4OWkSsc8LdejLSFLT-H9HjQQyA__",
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Samantha Montgomery",
        avatar:
          "https://s3-alpha-sig.figma.com/img/e598/91de/fda096791f79004a074192968e064836?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxXA0jdQ8F84hBlvmKGnSIaPdNEKPQ0gzTyoIZUYswV-HrFYGVghM1fAD5YO-MByJboViXfyg2skCdvjBgmX-iRIYTQXPmYBBWHOKEaCOVGfeO0of-AEuHkMSDsPd0JZ76oF30hj8mH93IzZpQA6lkj1ktFlDJ4b4edgP~MKyghsGK5r8aiqdvbgvMZHxVpncRRuv~MOJ6i3nM1ksdGdghv9L1xRh5~vz6u6zsLaV~S4VaM0ytdZmEqMvuxyKG9sFqrV1FjvsM9BF4XXjnCggRL6F6y91KK2NX6eqvS1XQSbzKJBeYQQyhWijGGKJsZyrDsNJvSOUKOnxNPsQgeSfQ__",
      },
      likes: 78,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      last_comments: {
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
  ],
  yourfriends: [
    {
      id: 1,
      user: {
        id: 1,
        name: "Samantha Montgomery",
        avatar:
          "https://s3-alpha-sig.figma.com/img/e598/91de/fda096791f79004a074192968e064836?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxXA0jdQ8F84hBlvmKGnSIaPdNEKPQ0gzTyoIZUYswV-HrFYGVghM1fAD5YO-MByJboViXfyg2skCdvjBgmX-iRIYTQXPmYBBWHOKEaCOVGfeO0of-AEuHkMSDsPd0JZ76oF30hj8mH93IzZpQA6lkj1ktFlDJ4b4edgP~MKyghsGK5r8aiqdvbgvMZHxVpncRRuv~MOJ6i3nM1ksdGdghv9L1xRh5~vz6u6zsLaV~S4VaM0ytdZmEqMvuxyKG9sFqrV1FjvsM9BF4XXjnCggRL6F6y91KK2NX6eqvS1XQSbzKJBeYQQyhWijGGKJsZyrDsNJvSOUKOnxNPsQgeSfQ__",
      },
      likes: 26,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      last_comments: {
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
  ],
};
