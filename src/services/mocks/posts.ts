import { genericCommets } from "./comments";

export const posts = [
  {
    id: 1,
    type: "post",
    user: {
      id: 1,
      name: "Paityn Franci",
      avatar:
        "https://picsum.photos/seed/1/200/300",
    },
    likes: 5000,
    comments: genericCommets,
    last_comment: {
      name: "Zain Torff",
      avatar:
        "https://picsum.photos/seed/2/200/300",
      description: "Hooow! Nice Kayan",
    },
    listAvatarStack: [
      {
        name: "Anastacia Mesquita",
        avatar:
          "https://picsum.photos/seed/3/200/300",
      },
      {
        name: "Angelo Silva",
        avatar:
          "https://picsum.photos/seed/4/200/300",
      },
      {
        name: "Camila Rodrigues",
        avatar:
          "https://picsum.photos/seed/5/200/300",
      },
    ],
    location: "Massachusetts I Boston",
    timestamp: "Posted 24 minutes ago.",
    description: "I never tire of admiring this view before going to work.",
    image:
      "https://picsum.photos/seed/6/200/300",
  },
  {
    id: 2,
    type: "live",
    user: {
      id: 2,
      name: "Lorem ipsum sit",
      avatar:
        "https://picsum.photos/seed/7/200/300",
    },
    likes: 908,
    viewers: 908,
    isLive: true,
    liveTitle: "TITULO DA LIVE",
    comments: genericCommets,
    last_comment: {
      name: "Zoe Martinez",
      avatar:
        "https://picsum.photos/seed/8/200/300",
      description:
        "This captivating photo displays a mesmerizing panorama that is truly remarkable.",
    },
    listAvatarStack: [
      {
        name: "Jake Miller",
        avatar:
          "https://picsum.photos/seed/9/200/300",
      },
      {
        name: "Mia Taylor",
        avatar:
          "https://picsum.photos/seed/10/200/300",
      },
      {
        name: "Jackson Lee",
        avatar:
          "https://picsum.photos/seed/11/200/300",
      },
    ],
    location: "Massachusetts I Boston",
    timestamp: "AO VIVO",
    description: "I never tire of admiring this view before going to work.",
    image:
      "https://picsum.photos/seed/12/200/300",
  },
  {
    id: 3,
    type: "post",
    user: {
      id: 3,
      name: "Samantha Montgomery",
      avatar:
        "https://picsum.photos/seed/13/200/300",
    },
    likes: 8000,
    comments: genericCommets,
    last_comment: {
      name: "Ava Nguyen",
      avatar:
        "https://picsum.photos/seed/14/200/300",
      description:
        "This captivating photo displays a mesmerizing panorama that is truly remarkable.",
    },
    listAvatarStack: [
      {
        name: "Ryan Brooks",
        avatar:
          "https://picsum.photos/seed/15/200/300",
      },
      {
        name: "Ethan Carter",
        avatar:
          "https://picsum.photos/seed/16/200/300",
      },
      {
        name: "Bella Rodriguez",
        avatar:
          "https://picsum.photos/seed/17/200/300",
      },
    ],
    location: "Massachusetts I Boston",
    timestamp: "Posted 52 minutes ago.",
    description: "I never tire of admiring this view before going to work.",
    image:
      "https://picsum.photos/seed/18/200/300",
  },
  {
    id: 4,
    type: "live",
    user: {
      id: 4,
      name: "Carlos Martinez",
      avatar:
        "https://picsum.photos/seed/19/200/300",
    },
    likes: 1200,
    viewers: 1200,
    isLive: true,
    liveTitle: "Beautiful sunset live",
    comments: genericCommets,
    last_comment: {
      name: "Ana Silva",
      avatar:
        "https://picsum.photos/seed/20/200/300",
      description:
        "Amazing view!",
    },
    listAvatarStack: [
      {
        name: "Pedro Santos",
        avatar:
          "https://picsum.photos/seed/21/200/300",
      },
      {
        name: "Laura Costa",
        avatar:
          "https://picsum.photos/seed/22/200/300",
      },
      {
        name: "Rafael Lima",
        avatar:
          "https://picsum.photos/seed/23/200/300",
      },
    ],
    location: "California I Los Angeles",
    timestamp: "AO VIVO",
    description: "Sharing this beautiful moment with you all!",
    image:
      "https://picsum.photos/seed/24/200/300",
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
          "https://picsum.photos/seed/19/200/300",
      },
      likes: 5,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      description:
        "Spent the day volunteering at the shelter and I’m ngl, it was lowkey exhausting BUT seeing those little doggos wag their tails made it 1000% worth it 🐶😭. BRB, adopting like... all of them.",
      image: [
        "https://picsum.photos/seed/20/200/300",

        "https://picsum.photos/seed/21/200/300",

        "https://picsum.photos/seed/22/200/300",
      ],
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Liam Johnson",
        userTag: "@liam_in_action",
        avatar:
          "https://picsum.photos/seed/23/200/300",
      },
      likes: 97,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      description:
        "Shoveled snow for my neighbor after the storm. Instant hot cocoa reward for me!",
      image: [
        "https://picsum.photos/seed/24/200/300",
      ],
    },
    {
      id: 3,
      user: {
        id: 3,
        name: "Sophia Carter",
        userTag: "@sophiakindvibes",
        avatar:
          "https://picsum.photos/seed/25/200/300",
      },
      likes: 14,
      liked: false,
      isFollow: true,
      comments: genericCommets,
      last_comment: {
        name: "Emily Johnson",
        avatar:
          "https://picsum.photos/seed/26/200/300",
        description:
          "This captivating photo displays a mesmerizing panorama that is truly remarkable.",
      },
      listAvatarStack: [
        {
          name: "Anastacia Mesquita",
          avatar:
            "https://picsum.photos/seed/27/200/300",
        },
        {
          name: "Angelo Silva",
          avatar:
            "https://picsum.photos/seed/28/200/300",
        },
        {
          name: "Camila Rodrigues",
          avatar:
            "https://picsum.photos/seed/29/200/300",
        },
      ],
      location: "Massachusetts I Boston",
      description:
        "Tell me why I went out for snacks and ended up carrying groceries for this sweet old lady? She called me her ‘little angel,’ and y’all, I almost CRIED 😭",
      image: [
        "https://picsum.photos/seed/30/200/300",
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
          "https://picsum.photos/seed/31/200/300",
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
          "https://picsum.photos/seed/32/200/300",
      },
      likes: 1000,
      liked: false,
      isFollow: false,
      comments: genericCommets,
      location: "Massachusetts I Boston",
      description:
        "I went thrifting yesterday and found a ton of cute sweaters that don’t fit me, so I dropped them off at the shelter today. The lady there was so sweet and said they’ll keep people warm this winter 🥹. Now I feel like Santa Claus or something.",
      image: [
        "https://picsum.photos/seed/33/200/300",

        "https://picsum.photos/seed/34/200/300",
      ],
    },
  ],
};
