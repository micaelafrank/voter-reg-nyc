class UserSerializer < ActiveModel::Serializer
  attributes :firstname, :lastname, :password, :username
  has_one :voter
end
