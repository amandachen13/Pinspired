# == Schema Information
#
# Table name: pinnings
#
#  id         :integer          not null, primary key
#  board_id   :integer          not null
#  pin_id     :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Pinning < ActiveRecord::Base


end
