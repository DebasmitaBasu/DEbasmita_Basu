class RemoveOldColsAddCols < ActiveRecord::Migration
  def change
    remove_column:posts, :Designation, :username
    add_column:posts, :Post_id, :string
    add_column:posts, :Post_name, :string
  end
end
