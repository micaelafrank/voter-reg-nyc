Rails.application.routes.draw do
  # namespace :api do
    resources :parties, only: [:index]
    resources :users
    resources :voters, only: [:index, :show, :create, :update, :destroy, :search] 
    # resources :searches, only: [:index, :show]

    # post "/signup", to: "users#create"
    # get "/me", to: "users#show" 
    get "/me", to: "users#show" 
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy" 
    get "/voters/search", to: "voters#search"
    # post "/login", to: "sessions#create"
    post "/register", to: "voters#create"
    delete "/logout", to: "sessions#destroy" 
    get "/voters", to: "voters#index"
    # get "/voters/profile/:id", to: "voters#show"
    get "/myvote", to: "voters#show" 
    # get "/voters/:first:last:postalCode", to: "voters#search"
    # post "/voters/:first:last:postalCode", to: "voters#search"
    patch "/myvote", to: "voters#update"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
