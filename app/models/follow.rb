# == Schema Information
#
# Table name: follows
#
#  id           :integer          not null, primary key
#  following_id :integer          not null
#  follower_id  :integer          not null
#  created_at   :datetime
#  updated_at   :datetime
#

class Follow < ActiveRecord::Base

  validates :follower, :following, presence: true

  belongs_to :follower,
    foreign_key: :follower_id,
    primary_key: :id,
    class_name: "User"

  belongs_to :following,
    foreign_key: :following_id,
    primary_key: :id,
    class_name: "User"

end
