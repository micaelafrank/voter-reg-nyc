Rails.application.routes.draw do
  # namespace :api do
    resources :parties, only: [:index]
    resources :candidates, only: [:index]
    resources :users, only: [:index, :create, :show]
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
    get "/voters", to: "voters#index"
    delete "/voters/:id", to: "voters#destroy"
    # get "/voters/profile/:id", to: "voters#show"
    get "/myvote/:user_id", to: "voters#show" 
    # get "/voters/:first:last:postalCode", to: "voters#search"
    # post "/voters/:first:last:postalCode", to: "voters#search"
    patch "/voters/edit/:user_id", to: "voters#update"

    #showPrimaryLG, showPrimaryGov, showMidtermGov, showSenator, showAG, showComptroller
    get "/candidates/LGPrimary", to: "candidates#showPrimaryLG"
    get "/candidates/GovPrimary", to: "candidates#showPrimaryGov"
    get "/candidates/GovMidterm", to: "candidates#showMidtermGov"
    get "/candidates/SenatorPrimary", to: "candidates#showSenator"
    get "/candidates/AGMidterm", to: "candidates#showAG"
    get "/candidates/Comptroller", to: "candidates#showComptroller"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
