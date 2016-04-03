class MoniesController < ApplicationController

 def show
  money = Money.find(params[:id])
  render json: money
 end

 def create 
  money = Money.new(money_params)
  if money.save 
    render json: money 
  else
    render json: { errors: "An error as occured. Balance wasn't saved."}
  end
 end

 def update
  money = Money.find(params[:id])
  if money.update(money_params)
    render json: money 
  else
    render json: {errors: "An error has occured. Balance wasn't saved."}
  end
 end

 private
 def money_params
  params.require(:money).permit(:total)
 end

end
