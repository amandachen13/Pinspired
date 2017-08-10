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
    @follow = current_user.follows_as_follower.find_by_following_id(params[:id])

    if @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

end
