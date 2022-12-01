class VotersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :cant_show_voter
rescue_from ActiveRecord::RecordInvalid, with: :voter_invalid

    def index
        activity = Voter.all.order(isActive: :desc)
        voters = activity.order(:last)
        render json: voters
    end

    def show
        voter = find_voter
        render json: voter  
    end
    
    def create
        new_voter_record = Voter.create!(new_voter_params)
        render json: new_voter_record, status: :created 
    end

    def update
        voter = find_voter
        voter.update!(update_voter_params)
        render json: voter, status: :ok
    end

    def destroy
        voter = find_voter
        voter.destroy 
        head :no_content
    end

    def search 
        voter = Voter.search(params)
        render json: voter
    end 


    private 

    #user has to sign up and sign in before they can register to vote 
    def new_voter_params
        params.permit(:id, :first, :last, :password, :isActive, :age, :party, :party_id, :address1, :address2, :postalCode, :voting_party)
    end

    # def search_params
    #     params.permit(:first, :last, :postalCode)
    # end

    def update_voter_params
        params.permit(:isActive, :party, :address1, :address2, :postalCode)
    end

    def find_voter
        VoterRecord.find(params[:id])
    end

    def cant_show_voter
        render json: {error: "This voter record is not available."}, status: :not_available
    end

    def voter_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
