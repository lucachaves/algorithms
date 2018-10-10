class Complement

  def self.of_dna dna
    dna.match(/^[GCTA]+$/).nil? ? '' : dna.tr('GCTA', 'CGAU')
  end

end
