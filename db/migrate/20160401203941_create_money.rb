class CreateMoney < ActiveRecord::Migration
  def change
    create_table :money do |t|
      t.integer :total
      
      t.timestamps null: false
    end
  end
end

