class CreateIndivThreads < ActiveRecord::Migration[7.0]
  def change
    create_table :indiv_threads do |t|
      t.string :name

      t.timestamps
    end
  end
end
