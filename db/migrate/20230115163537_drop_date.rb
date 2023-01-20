class DropDate < ActiveRecord::Migration[7.0]
  def change
  end

  def up
    remove_column :users, :date

  end
end
