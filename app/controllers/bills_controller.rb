class BillsController < ApplicationController
  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def new
  end

  def create
  end

  def destroy
  end

private 
  def bill_params
    params.require(:bill).permit(:total, :name)
  end

end
