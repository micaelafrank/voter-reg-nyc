class CreateCandidates < ActiveRecord::Migration[7.0]
  def change
    create_table :candidates do |t|
      t.string :firstName
      t.string :lastName
      t.string :headshot
      t.string :voting_party 
      t.integer :party_id
      t.string :position 
      t.string :raceNameYear
      t.boolean :isWinner
      t.timestamps
    end
  end
end
