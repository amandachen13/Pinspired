class AddIndexToUsers < ActiveRecord::Migration
  def change
    add_index :users, :session_token, unique: true
  end
end
