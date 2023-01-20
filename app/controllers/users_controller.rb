class UsersController < ApplicationController
    def index
        @users = User.all

        render json: @users
    end

    def show
        @user = User.find(params[:id])

        render json: @user
    end

    def create
        permitted = params.permit(:username)
        permitted[:username].downcase!
        @user = User.new(permitted)
        if @user.save
            redirect_to @user
        else
            render "new"
        end
    end

    def delete
        User.find(params[:id]).destroy
        redirect_to :action => 'index'
    end

end
