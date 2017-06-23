```js
{
  session: {
    currentUser: {
      id: 1,
      username: "amanda"
    },
    errors: []
  },

  users: {
    1: {
      id: 1,
      username: "amanda",
      image_url: "/assets/amanda.png",
      description: "App-Academy Student",
      pins: [3, 5, 6, 7],
      boards: [1, 2],
      follows: {
        followers: [2, 3, 4],
        following: [2, 3]
      }
    },
    2: {
      id: 2,
      username: "matthew",
      ...
    }
  },

  pins: {
    pins: {
      2: {
        id: 2,
        title: "IKEA Hacks",
        url: "http://www.ikeahackers.net/",
        image_url: "http://www.ikeahackers.net/",
        description: "Modify and repurpose IKEA products.",
        user_id: 5
      },
      3: {
        id 3:,
        title: "Bath Bombs",
        url: "http://www.popsci.com/how-to-make-your-own-bath-bombs",
        image_url: "http://www.popsci.com/how-to-make-your-own-bath-bombs",
        description: "How to make your own bath bombs. Cool!",
        user_id: 4
      },
      6: {
        ...
      }
    },
    errors: []
  },

  boards: {
    1: {
      id: 1,
      name: "Home Improvement",
      description: "DIYs to make your home look awesome!",
      pins: [6, 7],
      user_id: 1
    },
    2: {
      ...
    },
    errors: []
  }
}
```
