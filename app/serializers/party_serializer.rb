class PartySerializer < ActiveModel::Serializer
  attributes :id, :party_name
  has_many :voters 
end
