json.extract! user, :id, :username, :description
json.image_url asset_path(user.image.url)

json.boards do
  user.boards.each do |board|
    json.set! board.id do
      json.extract! board, :id, :name
    end
  end
end

json.pins do
  user.pins.each do |pin|
    json.set! pin.id do
      json.extract! pin, :id, :title, :url, :description, :board_id
      json.image_url asset_path(pin.image.url)
    end
  end
end

json.num_followers user.followers.length
json.followers do
  user.followers.each do |follower|
    json.set! follower.id do
      json.extract! follower, :id, :username
      json.image_url asset_path(follower.image.url)
    end
  end
end

json.num_followings user.followings.length
json.followings do
  user.followings.each do |following|
    json.set! following.id do
      json.extract! following, :id, :username
      json.image_url asset_path(following.image.url)
    end
  end
end
