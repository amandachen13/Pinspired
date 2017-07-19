json.extract! pin, :id, :title, :url, :description
json.image_url asset_path(pin.image.url)

json.creator do
  json.extract! pin.creator, :username
  json.image_url asset_path(pin.creator.image.url)
end

json.board_id pin.board.id
json.board_pins pin.board.pins
json.board do
  json.extract! pin.board, :name, :id
end
