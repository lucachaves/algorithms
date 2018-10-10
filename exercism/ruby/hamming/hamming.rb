class Hamming

  def Hamming.compute(dna_a, dna_b)
    if dna_a.size != dna_b.size
      raise ArgumentError.new("difference of size between strands")
    else
      dna_a.chars.zip(dna_b.chars).count { |nucleotide_a, nucleotide_b|
        nucleotide_a != nucleotide_b
      }
    end
  end

end

class BookKeeping
  VERSION = 3
end
