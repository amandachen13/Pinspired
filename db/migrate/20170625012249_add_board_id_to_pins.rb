class AddBoardIdToPins < ActiveRecord::Migration
  def change
    add_column :pins, :board_id, :integer, null: false
    add_index :pins, :board_id
  end
end
