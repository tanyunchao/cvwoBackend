class RemoveDateFromUsers < ActiveRecord::Migration[7.0]
  def up
    remove_column :users, :date, :integer
  end
end
