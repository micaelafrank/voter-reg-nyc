class VoterSerializer < ActiveModel::Serializer
  attributes :id, :first, :last, :password, :party, :address1, :address2, :party_id, :age, :voting_party, :postalCode, :isActive

end
