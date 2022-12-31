class VoterSerializer < ActiveModel::Serializer
  attributes :id, :first, :last, :user_id, :party, :address1, :address2, :party_id, :age, :voting_party, :postalCode, :isActive
  belongs_to :user
  belongs_to :party 
end
