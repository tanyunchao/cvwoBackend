class Post < ApplicationRecord
    belongs_to :user
    belongs_to :indiv_thread
    has_many :comments, :dependent => :destroy
end
