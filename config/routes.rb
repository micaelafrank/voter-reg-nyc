Rails.application.routes.draw do
  # namespace :api do

    resources :parties, only: [:index]
    resources :users
    resources :voters 

    post "/signup", to: "users#create"
    get "/me", to: "users#show" 
    post "/login", to: "sessions#create"
    post "/register", to: "voters#create"
    delete "/logout", to: "sessions#destroy" 
    get "/voters", to: "voters#index"
    get "/voters/:user_id", to: "voters#show"
    patch "/voters/:user_id", to: "voters#update"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
