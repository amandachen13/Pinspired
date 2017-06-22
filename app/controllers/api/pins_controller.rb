class Api::PinsController < ApplicationController

  def index
    @pins = Pin.all

    render 'api/pins/index'
  end

  def show
    @pin = Pin.find(params[:id])

    render 'api/pins/show'
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.user_id = current_user.id

    if @pin.save
      render 'api/pins/show'
    else
      render json: @pin.errors.full_messages, status: 422
  end

  def update
    @pin = current_user.created_pins.find(params[:id])

    if @pin
      if @pin.update(pin_params)
        render 'api/pins/show'
      else
        render json: @pin.errors.full_messages, status: 422
      end
    else
      render json: ["You do not have permission to edit this pin"], status: 401
    end
  end

  def destroy
    @pin = current_user.created_pins.find(params[:id])

    if @pin
      if @pin.destroy
        render json: ["Pin successfully deleted"], status: 200
      else
        render json: ["Failed to delete."], status: 404
      end
    else
      render json: ["You do not have permission to delete this pin"], status: 401
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:title, :url, :image, :description)
  end

end
