class CandidateSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :isWinner, :lastName, :party_id, :party, :voting_party, :position, :headshot, :raceNameYear
  belongs_to :party
end
