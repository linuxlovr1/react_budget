class BillsController < ApplicationController
  def index
    @bills = Bill.all
  end

  def create
    bill = Bill.new(bill_params)
    if bill.save
      render json: bill 
    else
      render json: { errors: bill.errors.full_messages }
    end
  end

  def destroy
    if Bill.find(params[:id]).destroy
      render json: { id: params[:id].to_i }
    else
    render json: { errors: "Bill can't be deleted. Shits borked." }
    end  
  end

private 
  def bill_params
    params.require(:bill).permit(:total, :name)
  end

end
