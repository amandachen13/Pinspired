class RemoveImageUrlFromPins < ActiveRecord::Migration
  def change
    remove_column :pins, :image_url
  end
end
