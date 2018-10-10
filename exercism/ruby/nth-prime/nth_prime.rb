require 'prime'

class Prime

  def self.nth(nth)
    if nth.zero?
      raise ArgumentError
    else
      self.first(nth).last
    end
  end

end
