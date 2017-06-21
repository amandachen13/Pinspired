class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def validate
    @user = User.new(user_params)
    errors = []

    unless @user.valid?
      @user.errors.full_messages.each do |message|
        if message.include?("Username")
          errors < message
        elsif message.include?("Password")
          errors < message
        end
      end
    end

    if errors.length > 0
      render json: errors, status: 422
    else
      render json: errors, status: 200
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
