class IndivThreadsController < ApplicationController
    def index
        @threads = IndivThread.all

        render json: @threads
    end

    def show
        @threads = IndivThread.find(params[:id])

        render json: @threads
    end


end
