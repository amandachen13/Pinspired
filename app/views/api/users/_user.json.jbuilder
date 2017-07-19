# json.user do
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
# end
