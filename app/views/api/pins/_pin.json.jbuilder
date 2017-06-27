json.extract! pin, :id, :title, :url, :description
json.image_url asset_path(pin.image.url)

json.creator do
  json.extract! pin.creator, :username
  json.image_url asset_path(pin.creator.image.url)
end

json.board do
  json.extract! pin.board, :name, :id
end

# NOTE: change to pull less from user
