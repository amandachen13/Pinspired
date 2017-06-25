# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  description        :text
#  created_at         :datetime
#  updated_at         :datetime
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ActiveRecord::Base

  validates :username, presence: {message: "You missed a spot!"}
  validates :password_digest, :session_token, presence: true
  validates :username, uniqueness: {message: "Deja vu! That username's taken."}
  validates :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true, message: "Your password is too short!"}

  has_attached_file :image, default_url: "user_default.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :pins,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Pin"

  has_many :boards,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Board"

  attr_reader :password

  after_initialize :ensure_session_token

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    if user && user.is_password?(pw)
      return user
    else
      return nil
    end
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
