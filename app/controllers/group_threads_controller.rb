class GroupThreadsController < ApplicationController
    def index
        @threads = GroupThread.all

        render json: @threads
    end

    def show
        @threads = GroupThread.find(params[:id])

        render json: @threads
    end

end
