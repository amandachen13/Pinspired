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
User.create({username: "pinelopecruz", password: "pinelopecruz"})

Pin.create({title: "Test",
  url: "test.com",
  description: "testing",
  image: File.open("app/assets/images/pin1.jpg"),
  user_id: User.find_by_username("pindiesel").id})
Pin.create({title: "Test 2",
  url: "test2.com",
  description: "testing2",
  image: File.open("app/assets/images/pin2.jpg"),
  user_id: User.find_by_username("pinelopecruz").id})
Pin.create({title: "Test Longer Title For Styling Purposes",
  url: "test3.com",
  description: "testing longer description for styling purposes",
  image: File.open("app/assets/images/pin3.jpg"),
  user_id: User.find_by_username("pinelopecruz").id})
Pin.create({title: "Test 4",
  url: "test4.com",
  description: "testing4",
  image: File.open("app/assets/images/pin4.jpg"),
  user_id: User.find_by_username("pindiesel").id})
