class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :Username
      t.string :email
      t.integer :Phoneno
      t.text :Details
      t.timestamps
    end
  end
end
