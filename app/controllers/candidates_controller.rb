class CandidatesController < ApplicationController
    skip_before_action :authorize
    #showPrimaryLG, showPrimaryGov, showMidtermGov, showSenator, showAG, showComptroller

    def index
        candidates = Candidate.all 
        render json: candidates
    end

    def showMidtermGov
        findRace = Candidate.where(position: "Governor", raceNameYear: "Midterm Election 2022")
        candidatesPrimLG = findRace.order(lastName: :asc)
        render json: candidatesPrimLG
    end

    def showPrimaryLG
        findRace = Candidate.where(position: "Lieutenant Governor")
        candidatesPrimGov = findRace.order(lastName: :asc)
        render json: candidatesPrimGov
    end

    def showPrimaryGovDem
        findRace = Candidate.where(position: "Governor", raceNameYear: "Primary Election 2022", voting_party: "Democratic Party")
        # findGovRace = findRace.where(raceNameYear: "Primary Election 2022")
        candidatesMidGov = findRace.order(lastName: :asc)
        render json: candidatesMidGov
    end

    def showPrimaryGovRepub
        findRace = Candidate.where(position: "Governor", raceNameYear: "Primary Election 2022", voting_party: "Republican Party")
        # findGovRace = findRace.where(raceNameYear: "Primary Election 2022")
        candidatesMidGov = findRace.order(lastName: :asc)
        render json: candidatesMidGov
    end


    def showSenator
        findRace = Candidate.where(position: "Senator")
        candidatesSen = findRace.order(voting_party: :asc)
        render json: candidatesSen
    end

    def showAG 
        findRace = Candidate.where(position: "Attorney General")
        candidatesAG = findRace.order(voting_party: :asc)
        render json: candidatesAG
    end

    def findWinners
        winningCans = Candidate.where(isWinner: "true")
        render json: winningCans
    end

    def showComptroller
        findRace = Candidate.where(position: "State Comptroller")
        candidatesComp = findRace.order(voting_party: :asc)
        render json: candidatesComp
    end
end