require './config'

def current_user
  session[:user_id].nil? ? nil : User.find(session[:user_id])
end

def resp(code, result = {})
  {status: code, result: result}.to_json
end


before do
  halt 200 if request.request_method == 'OPTIONS'
  content_type 'application/json'
end


get '/' do
  redirect "/documentation"
end

get "/documentation" do
  content_type 'text/html'
  haml :home
end

namespace '/api/v1' do

  namespace "/sessions" do
    get "/" do
      resp(200, current_user.as_json)
    end

    post "/new" do
      @user = User.authenticate(params[:email], params[:password])
      @user ? session[:user_id] = @user.id : nil
      resp(200, current_user.as_json)
    end

    get "/destroy" do
      session[:user_id] = nil
      resp(200, {success: "User logged out successfully."})
    end
  end

  namespace "/users" do
    
    get '/' do
      resp(200, User.all.as_json)
    end

    post '/' do
      @user = User.new(params[:user])
      @user.save ? resp(200, @user.as_json) : resp(400, @user.errors)
    end

    get '/:id' do
      @user = User.find(params[:id])
      @user ? resp(200, @user.as_json) : resp(404, {error: "User not found."})
    end

    put '/:id' do
      @user = User.find(params[:id])
      @user.update_attributes(params[:user]) ? resp(200, @user.as_json) : resp(400, @user.errors)
    end

    delete '/:id' do
      @user = User.find(params[:id])
      @user.destroy ? resp(200, {success: "User destroyed successfully."}) : resp(400, {error: "There was a problem destroying that user."})
    end

  end

  namespace "/users/:user_id/paintings" do
 
    get '/' do
      content_type :json
      resp(200, User.find(params[:user_id]).paintings.as_json)
    end

    post '/' do
      @painting = Painting.new(params[:painting])
      @painting.user_id = params[:user_id]
      @painting.save ? resp(200, @painting.as_json) : resp(400, @painting.errors)
    end

    get '/:id' do
      @painting = Painting.find(params[:id])
      @painting ? resp(200, @painting.as_json) : resp(404, {error: "Painting not found."})
    end

    put '/:id' do
      @painting = Painting.find(params[:id])
      @painting.update_attributes(params[:painting]) ? resp(200, @painting.as_json) : resp(400, @painting.errors)
    end

    delete '/:id' do
      @painting = Painting.find(params[:id])
      @painting.destroy ? resp(200, {success: "Painting destroyed successfully."}) : resp(400, {error: "There was a problem destroying that painting."})
    end

  end

end
