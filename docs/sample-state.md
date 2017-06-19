```js
{
  session: {
    currentUser: {
      id: 1,
      username: "amanda",
      image_url: "/assets/amanda.png",
      description: "App-Academy Student"
    },
    errors: []
  },

  pins: {
    3: {
      title: "Bath Bombs",
      url: "http://www.popsci.com/how-to-make-your-own-bath-bombs",
      image_url: "http://www.popsci.com/how-to-make-your-own-bath-bombs",
      description: "How to make your own bath bombs. Cool!",
      user_id: 4
    },
    6: {
      ...
    },
    errors: []
  },

  boards: {
    2: {
      name: "Home Improvement",
      description: "Landscape",
      pins: [
        2: {
          title: "IKEA Hacks",
          url: "http://www.ikeahackers.net/",
          image_url: "http://www.ikeahackers.net/",
          description: "Modify and repurpose IKEA products.",
          user_id: 5
        },
        7: {
          ...
        }
      ]
    },
    errors: []
  },

  follows: {
    followers: [5],
    following: [5, 10]
  }
}
```
