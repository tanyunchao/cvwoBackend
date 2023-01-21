class IndivThread < ApplicationRecord
    has_many :posts, :dependent => :destroy
end
