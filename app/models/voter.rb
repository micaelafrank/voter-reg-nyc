class Voter < ApplicationRecord    
    # has_secure_password 
    belongs_to :party, dependent: :destroy
    belongs_to :user
    # has_many :searches 
    validates :age, numericality: { greater_than_or_equal_to: 18 }
    # validates_confirmation_of :password


  def self.search(params)
    # By default we return all cars
    voters = all

    if params[:first].present? && params[:last].present? && params[:postalCode].present?
      voters = voters.('first = ? and last = ? and postalCode = ?', params[:first], params[:last], params[:postalCode]) 
    end

    voters
  end



end
