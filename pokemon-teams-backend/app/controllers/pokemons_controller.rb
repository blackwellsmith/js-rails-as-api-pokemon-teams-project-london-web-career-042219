class PokemonsController < ApplicationController

    def create
        @pokemon = Pokemon.create(trainer_id: params[:trainer_id], species: params[:species], nickname: params[:nickname])
        render json: @pokemon.to_json
    end

    def destroy
        @pokemon = Pokemon.find(params[:id])
        render json: @pokemon.delete
    end

    #private

      #def pokemon_params
        #params.require
     # end
end
