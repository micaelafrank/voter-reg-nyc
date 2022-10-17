class CreateParties < ActiveRecord::Migration[6.1]
  def change
    create_table :parties do |t|
      t.string :party_name
      t.timestamps
    end
  end
end
