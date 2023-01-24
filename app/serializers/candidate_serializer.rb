class CandidateSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :party_id, :party, :voting_party, :position, :headshot
  belongs_to :party
end
