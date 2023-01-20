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
        @current_user = User.find_by(username: params[:username].downcase!)
        @newpost = Post.new(
            :title => params[:title],
            :body => params[:body],
            :date => params[:date],
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
