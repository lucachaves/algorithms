require 'set'

class Pangram

  def self.pangram? phrase
    letters = phrase.chars.map(&:downcase).to_set
    alphabet = ('a'..'z').to_set
    letters & alphabet == alphabet
  end

end
