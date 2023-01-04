class PartiesController < ApplicationController
    skip_before_action :authorize
    
    def index
        parties = Party.all 
        render json: parties 
    end

    
end
