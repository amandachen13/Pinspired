# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Pin.destroy_all

User.create({username: "pindiesel", password: "pindiesel"})

Pin.create({title: "Test",
  url: "test.com",
  description: "testing",
  image: "http://i.imgur.com/CpVrWei.jpg",
  user_id: User.find_by_username("pindiesel").id})
Pin.create({title: "Test 2",
  url: "test2.com",
  description: "testing2",
  image: "http://i.imgur.com/eTuCPxM.jpg",
  user_id: User.find_by_username("pindiesel").id})
