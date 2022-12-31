class CreateVoters < ActiveRecord::Migration[6.1]
  def change
    create_table :voters do |t|
      t.string :first
      t.string :last
      t.string :address1
      t.string :address2
      t.integer :postalCode
      t.integer :age
      t.integer :user_id
      t.string :voting_party 
      t.integer :party_id
      t.boolean :isActive, :default => true
      t.timestamps
    end
  end
end
