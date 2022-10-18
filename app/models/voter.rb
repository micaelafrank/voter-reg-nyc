class Voter < ApplicationRecord    
    # include PgSearch::Model
    # pg_search_scope :search_by_full_name, against: [:first, :last, :postalCode]

    has_secure_password 
    belongs_to :party 
    validates :age, numericality: { greater_than_or_equal_to: 18 }


end
