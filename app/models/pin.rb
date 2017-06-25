# == Schema Information
#
# Table name: pins
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  url                :string           not null
#  description        :text
#  user_id            :integer          not null
#  created_at         :datetime
#  updated_at         :datetime
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  board_id           :integer          not null
#

class Pin < ActiveRecord::Base

  validates :title, :url, :user_id, :board_id, presence: true

  has_attached_file :image
  validates_attachment_presence :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :creator,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "User"

  belongs_to :board,
    foreign_key: :board_id,
    primary_key: :id,
    class_name: "Board"

end
