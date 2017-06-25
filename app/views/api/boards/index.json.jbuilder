@boards.each do |board|
  json.set! board.id do
    json.partial! 'api/boards/board', board: board
  end
end
