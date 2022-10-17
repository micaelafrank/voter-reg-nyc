class ApplicationController < ActionController::API
    include ActionController::Cookies 
# rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

end
