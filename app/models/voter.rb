class Voter < ApplicationRecord    
    has_secure_password 
    belongs_to :party 
    validates :age, numericality: { greater_than_or_equal_to: 18 }


end
