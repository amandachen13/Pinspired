json.board do
  json.extract! board, :id, :name, :description
  json.pins do
    json.array! board.pins, :id
  end
  json.creator do
    json.extract! board.creator, :username
  end
end

json.pins do
  board.pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin', pin: pin
    end
  end
end

json.creator do
  json.extract! board.creator, :id, :username
  json.image_url asset_path(board.creator.image.url)
end
