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


end
