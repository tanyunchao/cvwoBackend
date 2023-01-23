class GroupThreadsController < ApplicationController
    def index
        @threads = GroupThread.all

        render json: @threads
    end

    def show
        @threads = GroupThread.find(params[:id])

        render json: @threads
    end

    def getChildren
        @children = IndivThread.where("group_thread_id = ?", params[:id])

        render json: @children
    end

    def commentCount
        @count = IndivThread.where("group_thread_id = ?", params[:id]).count

        render json: @count
    end
end
