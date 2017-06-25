# == Schema Information
#
# Table name: boards
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  user_id     :integer          not null
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Board < ActiveRecord::Base

  validates :name, :user_id, presence: true
  validates :name, uniqueness: { scope: :user_id,
    message: "Try a different board name (you've already got one like this)." }

  belongs_to :creator,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "User"

  has_many :pins,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: "Pin"

end
