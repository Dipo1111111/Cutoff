/* Quiz data: section checks, cards, final test. */
window.QUIZ = {};

window.QUIZ["phy:1"] = {
  checks: {
    s1: [
      { q: "Which line states a measurement?", o: ["The rod is long", "The rod is 4", "The rod is 4 cm", "The rod is longer than the wire"], a: 2, w: "A measurement needs a number and a unit." },
      { q: "Which is a derived quantity?", o: ["mass", "time", "density", "temperature"], a: 2, w: "Density is mass divided by volume, so it is built from base quantities." }
    ],
    s2: [
      { q: "Which is not an SI base quantity?", o: ["luminous intensity", "electric charge", "amount of substance", "thermodynamic temperature"], a: 1, w: "The SI base quantity is electric current. Charge is current times time." },
      { q: "Weight and mass differ because weight", o: ["is measured in kilograms", "changes with g", "is a base quantity", "never changes"], a: 1, w: "Weight is force, in newtons, and it follows g." }
    ],
    s3: [
      { q: "Pressure in base units is", o: ["kg m s⁻²", "kg m⁻¹ s⁻²", "kg m² s⁻²", "kg m⁻² s⁻²"], a: 1, w: "Force divided by area: kg m s⁻² ÷ m² = kg m⁻¹ s⁻²." },
      { q: "One joule equals", o: ["kg m s⁻²", "kg m² s⁻²", "kg m² s⁻³", "kg m⁻¹ s⁻²"], a: 1, w: "Force times distance: kg m s⁻² × m." }
    ],
    s4: [
      { q: "One cubic centimetre in cubic metres", o: ["10⁻²", "10⁻³", "10⁻⁶", "10⁻⁴"], a: 2, w: "Cube the factor: (10⁻²)³ = 10⁻⁶." },
      { q: "The prefix 10⁹ is", o: ["mega", "giga", "kilo", "tera"], a: 1, w: "G, giga, 10⁹." }
    ],
    s5: [
      { q: "Least count of a metre rule", o: ["0.1 cm", "0.01 cm", "1 cm", "0.5 cm"], a: 0, w: "One millimetre, written 0.1 cm." },
      { q: "How do you avoid parallax error?", o: ["move the object", "place the eye above the mark", "use a longer rule", "zero the instrument"], a: 1, w: "The eye must be level with the mark." }
    ],
    s6: [
      { q: "Least count of a vernier caliper", o: ["0.01 mm", "0.1 mm", "0.5 mm", "1 mm"], a: 1, w: "1.0 mm minus 0.9 mm gives 0.1 mm." },
      { q: "Jaws closed read +0.3 mm. A rod reads 21.4 mm. True diameter", o: ["21.1 mm", "21.7 mm", "21.4 mm", "20.9 mm"], a: 0, w: "A positive error is subtracted." }
    ],
    s7: [
      { q: "Pitch 0.5 mm, thimble 50 divisions. Least count", o: ["0.1 mm", "0.01 mm", "0.05 mm", "1 mm"], a: 1, w: "0.5 ÷ 50 = 0.01 mm." },
      { q: "Sleeve 2.5 mm, thimble 34, zero error +0.03 mm. True reading", o: ["2.87 mm", "2.81 mm", "2.84 mm", "2.78 mm"], a: 1, w: "2.84 minus 0.03." }
    ],
    s8: [
      { q: "Volume of an irregular stone is found by", o: ["a formula", "displacement", "a balance", "a rule alone"], a: 1, w: "Displacement: the rise in level equals the volume." },
      { q: "The meniscus of water is read at the", o: ["top of the curve", "bottom of the curve", "middle", "edge of the glass"], a: 1, w: "Water curves down, so read the lowest point, eye level." }
    ],
    s9: [
      { q: "Buchart's balance measures", o: ["weight", "mass", "volume", "density"], a: 1, w: "A balance compares masses." },
      { q: "A 2 kg body on the Moon has", o: ["less mass", "the same mass and less weight", "more weight", "no weight"], a: 1, w: "Mass stays; g falls, so weight falls." }
    ],
    s10: [
      { q: "Why time 20 oscillations and divide?", o: ["to use the full scale", "to cut the reaction-time error", "to check the string", "to increase amplitude"], a: 1, w: "A fixed error spread over 20 swings becomes small." },
      { q: "A digital stopwatch shows 0.01 s. The real limit is", o: ["0.01 s", "about 0.2 s", "1 s", "0.5 s"], a: 1, w: "The person, not the display, sets the limit." }
    ],
    s11: [
      { q: "Dimension of force", o: ["[MLT⁻¹]", "[MLT⁻²]", "[ML²T⁻²]", "[ML⁻¹T⁻²]"], a: 1, w: "Mass times acceleration." },
      { q: "Dimension of pressure", o: ["[MLT⁻²]", "[ML⁻¹T⁻²]", "[ML²T⁻²]", "[MLT⁻¹]"], a: 1, w: "Force divided by area." }
    ],
    s12: [
      { q: "An equation is valid only when", o: ["both sides have the same units", "every term has the same dimension", "it has two terms", "it has no constants"], a: 1, w: "That is the principle of homogeneity." },
      { q: "In s = ut + ½at² every term has dimension", o: ["[T]", "[L]", "[LT⁻¹]", "[LT⁻²]"], a: 1, w: "All three terms are lengths." }
    ],
    s13: [
      { q: "Dimensions cannot give you", o: ["the unit", "the constant ½", "a homogeneity check", "the dimension of mass"], a: 1, w: "Pure numbers are invisible to dimensions." },
      { q: "v = u + at² is", o: ["correct", "dimensionally correct but wrong", "dimensionally wrong", "not homogeneous"], a: 1, w: "at² has dimension [L], so it passes, yet the physics is wrong." }
    ],
    s14: [
      { q: "Readings close together but far from the truth are", o: ["accurate", "precise", "both", "neither"], a: 1, w: "Precision is repeatability." },
      { q: "A zero error is", o: ["a random error", "a systematic error", "parallax", "a rounding error"], a: 1, w: "It pushes every reading the same way." }
    ],
    s15: [
      { q: "a = 5.0 ± 0.1 cm, b = 3.0 ± 0.1 cm. a − b is", o: ["2.0 ± 0.1", "2.0 ± 0.2", "2.0 ± 0.0", "2.0 ± 0.3"], a: 1, w: "For sums and differences, add absolute errors." },
      { q: "Square side 5.0 ± 0.1 cm. Percentage error in area", o: ["2 %", "4 %", "1 %", "8 %"], a: 1, w: "Side error 2 %, area is a square, so 4 %." }
    ],
    s16: [
      { q: "Significant figures in 0.00420", o: ["3", "2", "5", "6"], a: 0, w: "4, 2 and the trailing 0 count. Leading zeros do not." },
      { q: "12.11 + 0.3", o: ["12.41", "12.4", "12", "12.410"], a: 1, w: "Addition keeps the smallest number of decimal places." }
    ],
    s17: [
      { q: "0.000 42 in standard form", o: ["4.2 × 10⁻⁴", "42 × 10⁻⁵", "0.42 × 10⁻³", "4.2 × 10⁴"], a: 0, w: "One digit before the point." },
      { q: "6 400 000 to two significant figures", o: ["6.4 × 10⁶", "64 × 10⁵", "6.40 × 10⁶", "6 × 10⁶"], a: 0, w: "Two digits kept, power counts the moves." }
    ],
    s18: [
      { q: "72 km/h in m/s", o: ["20", "72", "7.2", "26"], a: 0, w: "Divide by 3.6." },
      { q: "Diameter 0.24 mm. Radius in metres", o: ["1.2 × 10⁻⁴", "2.4 × 10⁻⁴", "1.2 × 10⁻³", "1.2 × 10⁻⁵"], a: 0, w: "0.12 mm = 1.2 × 10⁻⁴ m." }
    ],
    s19: [
      { q: "Repeating a measurement removes", o: ["systematic error", "random error", "both", "neither"], a: 1, w: "Averages cancel scatter, not bias." },
      { q: "Mass 2 kg, g = 9.8. Weight is", o: ["2 N", "19.6 N", "0.2 N", "98 N"], a: 1, w: "W = mg." }
    ],
    s20: [
      { q: "Density and relative density belong to", o: ["topic 1", "topic 11, Liquids at Rest", "topic 5", "topic 19"], a: 1, w: "The syllabus puts them with upthrust." }
    ]
  },

  cards: [
    { q: "The seven base quantities", a: "Length, mass, time, electric current, thermodynamic temperature, amount of substance, luminous intensity." },
    { q: "The seven base units", a: "metre, kilogram, second, ampere, kelvin, mole, candela." },
    { q: "Unit of force, in base units", a: "newton, N = kg m s⁻²." },
    { q: "Unit of pressure, in base units", a: "pascal, Pa = kg m⁻¹ s⁻²." },
    { q: "Unit of work and energy", a: "joule, J = kg m² s⁻²." },
    { q: "Unit of power", a: "watt, W = kg m² s⁻³." },
    { q: "Unit of momentum", a: "kg m s⁻¹." },
    { q: "Unit of frequency", a: "hertz, Hz = s⁻¹." },
    { q: "Unit of density", a: "kg m⁻³." },
    { q: "Rule for a negative exponent", a: "Dividing by a unit flips its exponent to the bottom: m ÷ s = m s⁻¹." },
    { q: "Least count of a metre rule", a: "1 mm = 0.1 cm." },
    { q: "Least count of a vernier caliper", a: "0.1 mm = 0.01 cm." },
    { q: "Least count of a micrometer screw gauge", a: "0.01 mm, from a 0.5 mm pitch over 50 divisions." },
    { q: "How to correct a positive zero error", a: "Subtract it from the observed reading." },
    { q: "How to correct a negative zero error", a: "Add its size to the observed reading." },
    { q: "Volume of an irregular solid", a: "Displacement: V₂ − V₁." },
    { q: "How to handle a floating solid", a: "Tie it to a sinker and subtract the sinker's own displacement." },
    { q: "Mass against weight", a: "Mass is matter, in kg, constant. Weight is force, in N, and follows g." },
    { q: "Buchart's balance against chemical balance", a: "Buchart's reads directly from riders on a beam. The chemical balance compares against standard masses until the pointer centres." },
    { q: "Why time 20 oscillations", a: "To spread the reaction-time error over 20 swings." },
    { q: "Dimension of velocity", a: "[LT⁻¹]." },
    { q: "Dimension of acceleration", a: "[LT⁻²]." },
    { q: "Dimension of force", a: "[MLT⁻²]." },
    { q: "Dimension of work and energy", a: "[ML²T⁻²]." },
    { q: "Dimension of power", a: "[ML²T⁻³]." },
    { q: "Dimension of pressure", a: "[ML⁻¹T⁻²]." },
    { q: "Dimension of charge", a: "[IT]." },
    { q: "Dimension of density", a: "[ML⁻³]." },
    { q: "Principle of homogeneity", a: "Every term in a valid equation has the same dimension." },
    { q: "Three limits of dimensional analysis", a: "No pure constants, no distinction between same-dimension quantities, blind inside trig and exponential terms." },
    { q: "Accuracy against precision", a: "Accuracy is closeness to the true value. Precision is closeness of repeated readings to each other." },
    { q: "Systematic against random error", a: "Systematic always pulls the same way and repeating does not help. Random scatters and averaging reduces it." },
    { q: "Adding errors for sums and products", a: "Sums and differences add absolute errors. Products and quotients add percentage errors." },
    { q: "Error when a quantity is squared", a: "Double the percentage error; cubing triples it." },
    { q: "Rule for significant figures in addition", a: "Keep the smallest number of decimal places." },
    { q: "Rule for significant figures in multiplication", a: "Keep the smallest number of significant figures." },
    { q: "1 cm² and 1 cm³ in SI", a: "1 cm² = 10⁻⁴ m², 1 cm³ = 10⁻⁶ m³." },
    { q: "Converting km/h to m/s", a: "Divide by 3.6." },
    { q: "Standard form of 0.000 42", a: "4.2 × 10⁻⁴." },
    { q: "Why a dimensionally correct equation can still be wrong", a: "Dimensions cannot see constants or the physics; v = u + at² passes and is false." }
  ],

  exam: [
    { q: "Which is a fundamental quantity?", o: ["density", "weight", "time", "speed"], a: 2, w: "Time is one of the seven base quantities.", s: "s2" },
    { q: "The unit of luminous intensity is the", o: ["lumen", "lux", "candela", "watt"], a: 2, w: "Candela, cd.", s: "s2" },
    { q: "The JAMB syllabus names as fundamental", o: ["electric current", "electric charge", "resistance", "potential difference"], a: 1, w: "Charge; the SI lists current instead.", s: "s2" },
    { q: "A body taken to the Moon has", o: ["the same mass", "less mass", "more mass", "no mass"], a: 0, w: "Mass does not change. Weight does.", s: "s2" },
    { q: "One mole is", o: ["6.02 × 10²³ particles", "1 gram", "22.4 litres", "1 kilogram"], a: 0, w: "The mole counts particles.", s: "s2" },
    { q: "Which is a derived quantity?", o: ["length", "mass", "density", "time"], a: 2, w: "Density is built from mass and length.", s: "s1" },
    { q: "The unit of force in base units", o: ["kg m s⁻¹", "kg m s⁻²", "kg m² s⁻²", "kg m⁻¹ s⁻²"], a: 1, w: "Mass times acceleration.", s: "s3" },
    { q: "The unit of power is", o: ["J", "kg m² s⁻³", "N", "Pa"], a: 1, w: "Energy per second, so kg m² s⁻³.", s: "s3" },
    { q: "The unit of momentum is", o: ["kg m s⁻¹", "kg m s⁻²", "kg m² s⁻²", "kg m⁻¹ s⁻¹"], a: 0, w: "Mass times velocity.", s: "s3" },
    { q: "The unit of frequency is", o: ["s", "s⁻¹", "Hz⁻¹", "m s⁻¹"], a: 1, w: "One over time.", s: "s3" },
    { q: "Pressure in base units", o: ["kg m s⁻²", "kg m⁻¹ s⁻²", "kg m⁻² s⁻²", "kg m² s⁻²"], a: 1, w: "Force divided by area.", s: "s3" },
    { q: "The unit of density is", o: ["kg m⁻³", "kg m³", "N m⁻³", "g m⁻³"], a: 0, w: "Mass divided by volume.", s: "s3" },
    { q: "One gigapascal is", o: ["10⁶ Pa", "10⁹ Pa", "10¹² Pa", "10³ Pa"], a: 1, w: "Giga is 10⁹.", s: "s4" },
    { q: "One micrometre is", o: ["10⁻³ m", "10⁻⁶ m", "10⁻⁹ m", "10⁻² m"], a: 1, w: "Micro is 10⁻⁶.", s: "s4" },
    { q: "One square centimetre is", o: ["10⁻² m²", "10⁻⁴ m²", "10⁻⁶ m²", "10⁻³ m²"], a: 1, w: "Square the factor.", s: "s4" },
    { q: "One cubic centimetre is", o: ["10⁻³ m³", "10⁻⁶ m³", "10⁻² m³", "10⁻⁴ m³"], a: 1, w: "Cube the factor.", s: "s4" },
    { q: "Least count of a metre rule", o: ["1 mm", "0.1 mm", "0.01 mm", "1 cm"], a: 0, w: "1 mm, which is 0.1 cm.", s: "s5" },
    { q: "Least count of a vernier caliper", o: ["0.01 mm", "0.1 mm", "1 mm", "0.5 mm"], a: 1, w: "1.0 − 0.9 = 0.1 mm.", s: "s6" },
    { q: "Least count of a micrometer screw gauge", o: ["0.1 mm", "0.01 mm", "0.001 mm", "1 mm"], a: 1, w: "0.5 mm over 50 divisions.", s: "s7" },
    { q: "Vernier reads main 32 mm, 6th division coincides", o: ["32.6 mm", "32.06 mm", "33.2 mm", "38 mm"], a: 0, w: "6 × 0.1 = 0.6 mm.", s: "s6" },
    { q: "Micrometer sleeve 4.5 mm, thimble 27 divisions", o: ["4.77 mm", "4.527 mm", "4.32 mm", "4.95 mm"], a: 0, w: "4.5 + 0.27.", s: "s7" },
    { q: "Zero error +0.4 mm, observed 15.8 mm. True value", o: ["15.4 mm", "16.2 mm", "15.8 mm", "15.0 mm"], a: 0, w: "Subtract a positive error.", s: "s6" },
    { q: "A negative zero error is", o: ["subtracted", "added", "ignored", "halved"], a: 1, w: "Its size is added to the reading.", s: "s6" },
    { q: "Micrometer closes at −0.02 mm and reads 3.10 mm. True value", o: ["3.12 mm", "3.08 mm", "3.10 mm", "3.20 mm"], a: 0, w: "Add the size of a negative error.", s: "s7" },
    { q: "A diameter of 0.01 mm needs", o: ["a metre rule", "a tape", "a vernier", "a micrometer"], a: 3, w: "Only the micrometer reaches 0.01 mm.", s: "s7" },
    { q: "The volume of an irregular stone is found by", o: ["a formula", "displacement", "a balance", "a rule alone"], a: 1, w: "Rise in level equals volume.", s: "s8" },
    { q: "A cork floats, so its volume needs", o: ["a sinker", "a longer string", "a wider cylinder", "heating"], a: 0, w: "Tie it to a sinker and subtract the sinker's displacement.", s: "s8" },
    { q: "The meniscus of water is read at the", o: ["top of the curve", "bottom of the curve", "middle", "glass edge"], a: 1, w: "Eye level, lowest point.", s: "s8" },
    { q: "The volume of a sphere is", o: ["4/3 πr³", "πr²h", "1/3 πr²h", "4πr²"], a: 0, w: "Four thirds pi r cubed.", s: "s8" },
    { q: "A cube of side 2.00 cm has volume", o: ["8.00 cm³", "4.00 cm³", "12.0 cm³", "6.00 cm³"], a: 0, w: "2³ = 8.", s: "s8" },
    { q: "Buchart's balance measures", o: ["weight", "mass", "volume", "density"], a: 1, w: "A balance compares masses.", s: "s9" },
    { q: "A spring balance measures", o: ["mass", "weight", "volume", "time"], a: 1, w: "It stretches with force.", s: "s9" },
    { q: "A 5 kg mass weighs, with g = 10 m/s²", o: ["5 N", "50 N", "0.5 N", "500 N"], a: 1, w: "W = mg.", s: "s9" },
    { q: "Before use, a balance must be", o: ["zeroed", "oiled", "heated", "tilted"], a: 0, w: "Zero it with nothing on the pan.", s: "s9" },
    { q: "The practical limit on a stopwatch reading is", o: ["0.001 s", "0.01 s", "about 0.2 s", "2 s"], a: 2, w: "Reaction time sets the limit.", s: "s10" },
    { q: "Twenty oscillations are timed and divided by 20 to", o: ["cut the reaction-time error", "raise the amplitude", "check the string", "measure g directly"], a: 0, w: "A fixed error spread over 20 swings becomes small.", s: "s10" },
    { q: "The dimension of velocity is", o: ["[L]", "[LT⁻¹]", "[LT⁻²]", "[L²T⁻¹]"], a: 1, w: "Length over time.", s: "s11" },
    { q: "The dimension of work is", o: ["[MLT⁻²]", "[ML²T⁻²]", "[ML²T⁻³]", "[ML⁻¹T⁻²]"], a: 1, w: "Force times distance.", s: "s11" },
    { q: "The dimension of power is", o: ["[ML²T⁻³]", "[ML²T⁻²]", "[MLT⁻³]", "[ML⁻¹T⁻³]"], a: 0, w: "Energy over time.", s: "s11" },
    { q: "The dimension of charge is", o: ["[I]", "[IT]", "[IT⁻¹]", "[I⁻¹T]"], a: 1, w: "Current times time.", s: "s11" },
    { q: "The dimension of resistance is", o: ["[ML²T⁻³I⁻¹]", "[ML²T⁻³I⁻²]", "[MLT⁻²I⁻¹]", "[ML²T⁻²I⁻²]"], a: 1, w: "Potential difference over current.", s: "s11" },
    { q: "The dimension of density is", o: ["[ML³]", "[ML⁻³]", "[M⁻¹L³]", "[ML⁻²]"], a: 1, w: "Mass over volume.", s: "s11" },
    { q: "Homogeneity of an equation means", o: ["every term has the same dimension", "both sides give the same number", "there are no constants", "the equation has one term"], a: 0, w: "That is the test.", s: "s12" },
    { q: "In s = ut + ½at², every term has dimension", o: ["[T]", "[L]", "[LT⁻¹]", "[LT⁻²]"], a: 1, w: "Three lengths added.", s: "s12" },
    { q: "T = 2π√(l/g) shows the period does not depend on", o: ["length", "g", "the mass of the bob", "2π"], a: 2, w: "Mass would bring [M] to a time-only formula.", s: "s12" },
    { q: "Dimensions cannot determine", o: ["a unit", "the constant ½", "homogeneity", "the dimension of force"], a: 1, w: "Pure numbers are invisible.", s: "s13" },
    { q: "Work and torque share a dimension, so dimensions cannot", o: ["tell them apart", "check either", "find their units", "test an equation"], a: 0, w: "Same dimension, different nature.", s: "s13" },
    { q: "The relation v = u + at² is", o: ["correct", "dimensionally correct but wrong", "dimensionally wrong", "not homogeneous"], a: 1, w: "at² is [L], so it passes and is still false.", s: "s13" },
    { q: "Accuracy is", o: ["closeness to the true value", "closeness of repeated readings", "the least count", "the zero error"], a: 0, w: "Truth, not repeatability.", s: "s14" },
    { q: "Precision is", o: ["closeness to the true value", "closeness of repeated readings", "the least count", "a systematic error"], a: 1, w: "Repeatability.", s: "s14" },
    { q: "A zero error is", o: ["random", "systematic", "parallax", "rounding"], a: 1, w: "It acts in one direction.", s: "s14" },
    { q: "Repeating a measurement reduces", o: ["systematic error", "random error", "both", "neither"], a: 1, w: "Averages cancel scatter only.", s: "s14" },
    { q: "A length 25.0 ± 0.1 cm carries a percentage error of", o: ["0.4 %", "4 %", "0.04 %", "2.5 %"], a: 0, w: "0.1 ÷ 25.0 × 100.", s: "s14" },
    { q: "a = 8.0 ± 0.2, b = 2.0 ± 0.1. Then a + b is", o: ["10.0 ± 0.3", "10.0 ± 0.1", "10.0 ± 0.2", "10.0 ± 0.0"], a: 0, w: "Add absolute errors for sums.", s: "s15" },
    { q: "Length 20.0 ± 0.1 cm, width 5.0 ± 0.1 cm. Error in area", o: ["0.5 %", "2.0 %", "2.5 %", "4.0 %"], a: 2, w: "0.5 % plus 2.0 %.", s: "s15" },
    { q: "A radius carries 2 % error. The volume of the sphere carries", o: ["2 %", "4 %", "6 %", "8 %"], a: 2, w: "Cube the quantity, triple the error.", s: "s15" },
    { q: "0.00420 has", o: ["2 significant figures", "3 significant figures", "5 significant figures", "6 significant figures"], a: 1, w: "Leading zeros do not count; the trailing zero does.", s: "s16" },
    { q: "3.42 × 2.5 is, to the correct figures", o: ["8.55", "8.6", "8", "9"], a: 1, w: "Two significant figures in the input.", s: "s16" },
    { q: "12.11 + 0.3 is", o: ["12.41", "12.4", "12", "12.410"], a: 1, w: "One decimal place wins.", s: "s16" },
    { q: "0.000 42 in standard form", o: ["4.2 × 10⁻⁴", "42 × 10⁻⁵", "0.42 × 10⁻³", "4.2 × 10⁴"], a: 0, w: "One digit before the point.", s: "s17" },
    { q: "Which shows two significant figures with no ambiguity?", o: ["1500", "1.5 × 10³", "15 × 10²", "1.500 × 10³"], a: 1, w: "Standard form removes the doubt.", s: "s17" },
    { q: "72 km/h in m/s", o: ["20", "25", "18", "72"], a: 0, w: "Divide by 3.6.", s: "s18" },
    { q: "A wire of diameter 0.24 mm has a radius of", o: ["1.2 × 10⁻⁴ m", "2.4 × 10⁻⁴ m", "1.2 × 10⁻³ m", "1.2 × 10⁻⁵ m"], a: 0, w: "Halve, then convert to metres.", s: "s18" },
    { q: "Density and relative density are examined under", o: ["topic 1", "topic 11, Liquids at Rest", "topic 5", "topic 19"], a: 1, w: "They sit with upthrust.", s: "s20" },
    { q: "A car reads 72 km/h. After 10 s at constant speed it covers", o: ["200 m", "72 m", "20 m", "720 m"], a: 0, w: "20 m/s × 10 s.", s: "s18" },
    { q: "The dimension of impulse is the same as", o: ["momentum", "force", "power", "energy"], a: 0, w: "Both are [MLT⁻¹].", s: "s11" }
  ]
};
