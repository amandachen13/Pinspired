Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :boards, only: [:show, :create, :update, :destroy]
    
    resources :pins, only: [:index, :show, :create, :update, :destroy]

    resources :pinnings, only: [:create, :destroy]

    resources :follows, only: [:create, :destroy]

  end

  root "static_pages#root"

end
