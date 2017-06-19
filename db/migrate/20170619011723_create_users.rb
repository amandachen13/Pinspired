class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :image_url
      t.text :description

      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
