class GroupThread < ApplicationRecord
    has_many :indiv_threads, :dependent => :destroy
end
