class User < ActiveRecord::Base
   validates :Firstname, :Lastname, presence: true 
     validates :password, length: { in: 6..40 }
        has_many :posts
      before_validation :ensure_username
 
  protected
  def ensure_username
    if Username.nil?
      self.Username = self.Firstname+self.Lastname
    end
  end
end
end
