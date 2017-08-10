class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(following_id: params[:following_id])
    @follow.follower_id = current_user.id

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
  end

end
