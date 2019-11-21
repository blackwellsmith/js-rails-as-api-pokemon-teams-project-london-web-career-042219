class TrainersController < ApplicationController

    def index
        @trainers = Trainer.all
        #binding.pry
        render json: @trainers.to_json
    end
end
