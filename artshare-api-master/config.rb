require 'sinatra'
require 'sinatra/namespace'

require 'haml'
require 'json'

require 'sinatra/activerecord'

db = URI.parse(ENV['DATABASE_URL'] || 'postgres:///mydb')

ActiveRecord::Base.establish_connection(
 :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
 :host     => db.host,
 :username => db.user,
 :password => db.password,
 :database => db.path[1..-1],
 :encoding => 'utf8'
)

require 'bcrypt'
require './models'

require 'bundler/setup'
require 'sinatra/base'
require 'rack-flash'

enable :sessions
use Rack::Flash, :sweep => true

set :sessions => true

set :server, 'webrick'

require 'sinatra/cross_origin'

set :allow_origin, :any
set :allow_methods, [:get, :post, :options, :put, :delete]
set :expose_headers, ['Content-Type']

configure do
  enable :cross_origin
end