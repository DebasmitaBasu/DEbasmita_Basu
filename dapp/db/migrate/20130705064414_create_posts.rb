class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.belongs_to :users
      t.string :Designation
      t.string :username
      t.timestamps
    end
  end
end
