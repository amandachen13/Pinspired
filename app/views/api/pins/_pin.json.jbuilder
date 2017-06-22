json.extract! pin, :id, :title, :url, :description
json.image_url asset_path(pin.image.url)

json.creator do
  json.extract! pin.creator, :id, :username
  json.image_url asset_path(pin.creator.image.url)
end
