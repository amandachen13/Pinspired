json.extract! user, :id, :username, :description
json.image_url asset_path(user.image.url)

json.boards do
  user.boards.each do |board|
    json.set! board.name, board.id
  end
end
