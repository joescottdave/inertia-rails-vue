class ApplicationController < ActionController::Base
  def index
    render inertia: "Index"
  end
end
