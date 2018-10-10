require 'prime'

class Sieve

  def initialize prime_end
    @prime_end = prime_end
  end

  def primes
    Prime.take_while {|prime| prime <= @prime_end }
  end

end
