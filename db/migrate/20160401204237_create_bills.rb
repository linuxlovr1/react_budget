class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.string :name , null: false
      t.integer :total, null: false
      t.belongs_to :money
      t.timestamps null: false
    end
  end
end
