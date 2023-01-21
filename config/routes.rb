Rails.application.routes.draw do
  resources :group_threads
  resources :indiv_threads
  resources :comments
  resources :users 
  resources :posts 

  scope '/users' do 
    scope '/create' do
      post '/' => 'users#create'
    end

    scope '/delete' do 
      post '/' => 'users#delete'
    end
  end

  scope '/posts' do 
    scope '/create' do
      post '/' => 'posts#create'
    end

    scope '/delete' do 
      post '/' => 'posts#delete'
    end
  end

  scope '/comments' do
    scope '/create' do
      post '/' => 'comments#create'
    end

    scope '/delete' do 
      post '/' => 'comments#delete'
    end    
  end

  scope '/threads' do
    scope '/' do
      get '/' => 'indiv_threads#index'
    end

    scope '/:id' do 
      post '/' => 'indiv_threads#show'
    end    
  end
  # post 'users/create', to: 'users#create'
    

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
