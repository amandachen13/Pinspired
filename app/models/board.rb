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


end
