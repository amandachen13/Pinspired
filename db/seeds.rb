# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Board.destroy_all
Pin.destroy_all

User.create({username: "pindiesel", password: "pindiesel"})
User.create({username: "pinelopecruz", password: "pinelopecruz"})
User.create({username: "pablopincasso", password: "pablopincasso"})
User.create({username: "jeremypin", password: "jeremypin"})
User.create({username: "pinderella", password: "pinderella"})
User.create({username: "pinniethepooh", password: "pinniethepooh"})

Board.create({name: "Cars",
  description: "So fast!",
  user_id: User.find_by_username("pindiesel").id})
Board.create({name: "Food",
  description: "Yum",
  user_id: User.find_by_username("pinniethepooh").id})
Board.create({name: "Shoes",
  user_id: User.find_by_username("jeremypin").id})
Board.create({name: "Art",
  description: "Cool art",
  user_id: User.find_by_username("pablopincasso").id})
Board.create({name: "Sad",
  description: "Art is a lie that makes us realize truth.",
  user_id: User.find_by_username("pablopincasso").id})
Board.create({name: "Vacation",
  user_id: User.find_by_username("pinelopecruz").id})
Board.create({name: "Fashion",
  description: "I love fashion",
  user_id: User.find_by_username("pinelopecruz").id})
Board.create({name: "Tiny Animals",
  description: "Soooo cute",
  user_id: User.find_by_username("pindiesel").id})
Board.create({name: "Wedding",
  user_id: User.find_by_username("pinderella").id})



Pin.create({title: "Photo",
  url: "https://www.theknot.com/marketplace/wedding-reception-venues-new-york-ny",
  description: "Lovely",
  image: File.open("app/assets/images/pinwedding1.jpg"),
  user_id: User.find_by_username("pinderella").id,
  board_id: Board.find_by_name("Wedding").id})


Pin.create({title: "Green Car",
  url: "https://www.cars.com/",
  image: File.open("app/assets/images/pincar1.jpg"),
  user_id: User.find_by_username("pindiesel").id,
  board_id: Board.find_by_name("Cars").id})
Pin.create({title: "Thunderbird",
  url: "https://classiccars.com/listings/find/all-years/ford/thunderbird",
  description: "Classic",
  image: File.open("app/assets/images/pincar2.jpg"),
  user_id: User.find_by_username("pindiesel").id,
  board_id: Board.find_by_name("Cars").id})
  Pin.create({title: "Flowers",
    url: "http://www.brides.com/wedding-ideas/wedding-flowers",
    description: "Pretty",
    image: File.open("app/assets/images/pinwedding2.jpg"),
    user_id: User.find_by_username("pinderella").id,
    board_id: Board.find_by_name("Wedding").id})

Pin.create({title: "Summer",
  url: "http://www.visitnj.org/nj/beaches",
  description: "Can't wait to go to the beach!",
  image: File.open("app/assets/images/pinvacation1.jpg"),
  user_id: User.find_by_username("pinelopecruz").id,
  board_id: Board.find_by_name("Vacation").id})


Pin.create({title: "Hot Chocolate",
  url: "http://www.epicurious.com/recipes/food/views/simple-hot-cocoa-for-one-369469",
  description: "hungry",
  image: File.open("app/assets/images/pinfood3.jpg"),
  user_id: User.find_by_username("pinniethepooh").id,
  board_id: Board.find_by_name("Food").id})

  Pin.create({title: "Lace",
    url: "https://www.kleinfeldbridal.com/index.cfm?pid=51&category=1027&clearpreviouscriteria=true",
    image: File.open("app/assets/images/pinwedding3.jpg"),
    user_id: User.find_by_username("pinderella").id,
    board_id: Board.find_by_name("Wedding").id})
    Pin.create({title: "Mercedes",
      url: "https://www.mbusa.com/mercedes/index",
      image: File.open("app/assets/images/pincar6.jpg"),
      user_id: User.find_by_username("pindiesel").id,
      board_id: Board.find_by_name("Cars").id})
  Pin.create({title: "Tiny Mouse",
    url: "http://imgur.com/gallery/xc4Ej",
    image: File.open("app/assets/images/pintiny1.jpg"),
    user_id: User.find_by_username("pindiesel").id,
    board_id: Board.find_by_name("Tiny Animals").id})
    Pin.create({title: "Tiny Snake",
      url: "http://imgur.com/gallery/xc4Ej",
      image: File.open("app/assets/images/pintiny2.jpg"),
      user_id: User.find_by_username("pindiesel").id,
      board_id: Board.find_by_name("Tiny Animals").id})
Pin.create({title: "Fruit Smoothie",
  url: "https://www.juicegeneration.com/",
  description: "hungry",
  image: File.open("app/assets/images/pinfood4.jpg"),
  user_id: User.find_by_username("pinniethepooh").id,
  board_id: Board.find_by_name("Food").id})
Pin.create({title: "Dip",
  url: "http://www.epicurious.com/recipes/food/views/hummus-237832",
  description: "hungry",
  image: File.open("app/assets/images/pinfood5.jpg"),
  user_id: User.find_by_username("pinniethepooh").id,
  board_id: Board.find_by_name("Food").id})

  Pin.create({title: "Old Car",
    url: "https://classics.autotrader.com/",
    description: "Rusty",
    image: File.open("app/assets/images/pincar3.jpg"),
    user_id: User.find_by_username("pindiesel").id,
    board_id: Board.find_by_name("Cars").id})
    Pin.create({title: "Helicopter",
      url: "https://www.avbuyer.com/aircraft/helicopter",
      description: "Not a car.",
      image: File.open("app/assets/images/pincar4.jpg"),
      user_id: User.find_by_username("pindiesel").id,
      board_id: Board.find_by_name("Cars").id})
      Pin.create({title: "VW",
        url: "http://www.vw.com/models/beetle/",
        description: "Punch buggy no punch backs",
        image: File.open("app/assets/images/pincar5.jpg"),
        user_id: User.find_by_username("pindiesel").id,
        board_id: Board.find_by_name("Cars").id})

Pin.create({title: "Fruits",
  url: "http://www.wholefoodsmarket.com/",
  description: "hungry",
  image: File.open("app/assets/images/pinfood6.jpg"),
  user_id: User.find_by_username("pinniethepooh").id,
  board_id: Board.find_by_name("Food").id})

Pin.create({title: "Not sure, but looks good",
  url: "https://www.pinterest.com/pin/158963061826473269/",
  description: "hungry",
  image: File.open("app/assets/images/pinfood7.jpg"),
  user_id: User.find_by_username("pinniethepooh").id,
  board_id: Board.find_by_name("Food").id})
#
Pin.create({title: "Acai",
  url: "https://www.juicegeneration.com/menu/acai-bowls",
  description: "hungry",
  image: File.open("app/assets/images/pinfood8.jpg"),
  user_id: User.find_by_username("pinniethepooh").id,
  board_id: Board.find_by_name("Food").id})
  Pin.create({title: "Long Hair",
    url: "https://www.muralswallpaper.com/",
    image: File.open("app/assets/images/pinart2.jpg"),
    user_id: User.find_by_username("pablopincasso").id,
    board_id: Board.find_by_name("Art").id})
Pin.create({title: "Salad",
  url: "http://www.wholefoodsmarket.com/",
  description: "hungry",
  image: File.open("app/assets/images/pinfood9.jpg"),
  user_id: User.find_by_username("pinniethepooh").id,
  board_id: Board.find_by_name("Food").id})



Pin.create({title: "Mural",
  url: "https://www.muralswallpaper.com/",
  image: File.open("app/assets/images/pinart1.jpg"),
  user_id: User.find_by_username("pablopincasso").id,
  board_id: Board.find_by_name("Art").id})
  Pin.create({title: "Tiny Turtle",
    url: "http://imgur.com/gallery/xc4Ej",
    image: File.open("app/assets/images/pintiny3.jpg"),
    user_id: User.find_by_username("pindiesel").id,
    board_id: Board.find_by_name("Tiny Animals").id})


    Pin.create({title: "Fried Chicken",
      url: "https://www.timeout.com/newyork/restaurants/the-best-fried-chicken-in-nyc",
      description: "hungry",
      image: File.open("app/assets/images/pinfood1.jpg"),
      user_id: User.find_by_username("pinniethepooh").id,
      board_id: Board.find_by_name("Food").id})
      Pin.create({title: "Fries",
        url: "https://ny.eater.com/maps/best-fries-nyc",
        description: "hungry",
        image: File.open("app/assets/images/pinfood2.jpg"),
        user_id: User.find_by_username("pinniethepooh").id,
        board_id: Board.find_by_name("Food").id})
    Pin.create({title: "Tiny Giraffe",
      url: "http://imgur.com/gallery/xc4Ej",
      image: File.open("app/assets/images/pintiny4.jpg"),
      user_id: User.find_by_username("pindiesel").id,
      board_id: Board.find_by_name("Tiny Animals").id})
Pin.create({title: "Blue",
  url: "https://goinswriter.com/sad-art/",
  image: File.open("app/assets/images/pinsad1.jpg"),
  user_id: User.find_by_username("pablopincasso").id,
  board_id: Board.find_by_name("Sad").id})

Pin.create({title: "Tiny Chameleon",
  url: "http://imgur.com/gallery/xc4Ej",
  image: File.open("app/assets/images/pintiny5.jpg"),
  user_id: User.find_by_username("pindiesel").id,
  board_id: Board.find_by_name("Tiny Animals").id})
Pin.create({title: "Tiny Puffer",
  url: "http://imgur.com/gallery/xc4Ej",
  image: File.open("app/assets/images/pintiny6.jpg"),
  user_id: User.find_by_username("pindiesel").id,
  board_id: Board.find_by_name("Tiny Animals").id})
  Pin.create({title: "Adidas",
    url: "http://www.adidas.com/us/",
    description: "Cool",
    image: File.open("app/assets/images/pinshoe1.jpg"),
    user_id: User.find_by_username("jeremypin").id,
    board_id: Board.find_by_name("Shoes").id})
Pin.create({title: "Tiny Hamster",
  url: "http://imgur.com/gallery/xc4Ej",
  image: File.open("app/assets/images/pintiny7.jpg"),
  user_id: User.find_by_username("pindiesel").id,
  board_id: Board.find_by_name("Tiny Animals").id})


Pin.create({title: "Nice",
  url: "http://www.adidas.com/us/",
  image: File.open("app/assets/images/pinshoe2.jpg"),
  user_id: User.find_by_username("jeremypin").id,
  board_id: Board.find_by_name("Shoes").id})
