require 'prime'

class Raindrops
  class << self

    WORDS = {
      3 => 'Pling',
      5 => 'Plang',
      7 => 'Plong'
    }

    def convert(number)
      factors = factors(number)
      (not factors.nil?) && valid?(factors) ? translate(factors) : number.to_s
    end

    def valid?(factors)
      factors.include?(3) || factors.include?(5) || factors.include?(7)
    end

    def factors(number)
      Prime.prime_division(number).transpose.first
    end

    def translate(factors)
      factors.map { |factor| translate_factor(factor) }.join
    end

    def translate_factor(factor)
      WORDS.include?(factor) ? WORDS[factor] : ''
    end

  end

end
