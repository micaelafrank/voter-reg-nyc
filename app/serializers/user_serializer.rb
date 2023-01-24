class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :password, :username
  has_one :voter
end
