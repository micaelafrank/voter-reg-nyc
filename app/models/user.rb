class User < ApplicationRecord    
    has_secure_password 
    has_one :voter 
    validates :username, uniqueness: true
    # validates_confirmation_of :password
end