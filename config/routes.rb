Rails.application.routes.draw do
  root 'static_pages#home'

  get '/donation-thank-you', to: 'static_pages#thanks'
end
