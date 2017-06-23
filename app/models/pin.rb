# == Schema Information
#
# Table name: pins
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  url         :string           not null
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Pin < ActiveRecord::Base

  validates :title, :url, :user_id, presence: true

  has_attached_file :image
  # styles: { pin: "250x350>" }
  validates_attachment_presence :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :creator,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "User"
end
