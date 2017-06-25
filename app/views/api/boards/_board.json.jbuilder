json.extract! board, :id, :name, :description

json.pins do
  json.array! board.pins, :id
end

json.creator do
  json.extract! board.creator, :username
end
