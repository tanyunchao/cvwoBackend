class PostsController < ApplicationController
    def index
        @posts = Post.all

        render json: @posts
    end

    def show
        @post = Post.find(params[:id])

        render json: @post
    end

    def create
        @current_user = User.find_by(username: params[:username].downcase)
        @current_thread = IndivThread.find_by(id: params[:threadID])
        @newpost = Post.new(
            :title => params[:title],
            :body => params[:body],
            :user => @current_user
        )
        if @newpost.save!
            render json: @newpost
        else
            render "new"
        end
    end

    def delete
        Post.find(params[:id]).destroy
        redirect_to :action => 'index'
    end
end
