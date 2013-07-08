class AddLastnameToUsers < ActiveRecord::Migration
  def change
   add_column:users, :Lastname, :string
   rename_column:users, :Username, :Firstname
  end
end
