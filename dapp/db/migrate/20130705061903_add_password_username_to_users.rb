class AddPasswordUsernameToUsers < ActiveRecord::Migration
  def change
   add_column:users, :Username, :string
   add_column:users, :Password, :string
  end
end
