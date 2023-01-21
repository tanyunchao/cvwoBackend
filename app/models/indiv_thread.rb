class IndivThread < ApplicationRecord
    has_many :posts, :dependent => :destroy
    belongs_to :group_thread
end
