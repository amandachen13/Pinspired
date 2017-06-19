class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.string :image_url, null: false
      t.text :description
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :pins, :user_id
  end
end
