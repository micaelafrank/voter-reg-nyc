class CandidatesController < ApplicationController
    skip_before_action :authorize
    #showPrimaryLG, showPrimaryGov, showMidtermGov, showSenator, showAG, showComptroller

    def index
        candidates = Candidate.all 
        render json: candidates
    end

    # def showPrimaryLG
    #     findRace = Candidate.where("raceNameYear=? OR position= ?", "Primary Election 2022", "Lieutenant Governor")
    #     candidatesPrimLG = findRace.order(lastName: :desc)
    #     render json: candidatesPrimLG
    # end

    # def showPrimaryGov
    #     findRace = Candidate.where("raceNameYear=? OR position= ?", "Primary Election 2022", "Governor")
    #     candidatesPrimGov = findRace.order(lastName: :desc)
    #     render json: candidatesPrimGov
    # end

    def showMidtermGov
        findRace = Candidate.where('position = ? and raceNameYear = ?', "Governor", "Primary Election 2022")
        # findGovRace = findRace.where(raceNameYear: "Primary Election 2022")
        candidatesMidGov = findRace.order(lastName: :desc)
        render json: candidatesMidGov
    end

    def showSenator
        findRace = Candidate.where(position: "Senator")
        candidatesSen = findRace.order(lastName: :desc)
        render json: candidatesSen
    end

    def showAG 
        findRace = Candidate.where(position: "Attorney General")
        candidatesAG = findRace.order(lastName: :desc)
        render json: candidatesAG
    end

    def showComptroller
        findRace = Candidate.where(position: "State Comptroller")
        candidatesComp = findRace.order(lastName: :desc)
        render json: candidatesComp
    end
end