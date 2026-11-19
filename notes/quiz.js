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

window.QUIZ["bio:1"] = {
  checks: {
    s1: [
      { q: "Which list gives all seven characteristics of living things?", o: ["Nutrition, respiration, excretion, growth, movement, reproduction, sensitivity", "Nutrition, respiration, digestion, growth, movement, reproduction, sensitivity", "Nutrition, breathing, excretion, growth, movement, reproduction, irritability", "Feeding, respiration, excretion, size, movement, reproduction, sensitivity"], a: 0, w: "Breathing is not a characteristic. Respiration is the release of energy from food, and digestion is not on the list." },
      { q: "A leaf loses oxygen and water. Which characteristic does this show?", o: ["Nutrition", "Excretion", "Growth", "Sensitivity"], a: 1, w: "Excretion removes waste made by the organism's own metabolism." }
    ],
    s2: [
      { q: "Why is a virus not placed among living organisms in this syllabus?", o: ["It is too small to see", "It has no nucleus", "It cannot feed, respire or reproduce without a host cell", "It has no protein"], a: 2, w: "A virus is not a cell and cannot carry out the seven processes alone." },
      { q: "A crystal grows larger in a solution. Which statement is correct?", o: ["It is alive because it grows", "It is not alive because it grows by adding material from outside", "It is alive because it reproduces", "It is not alive because it has no nucleus"], a: 1, w: "Living things grow from inside by cell division." }
    ],
    s3: [
      { q: "Which statement is part of the cell theory?", o: ["All cells have a nucleus", "New cells come from existing cells by division", "All cells have a cell wall", "Cells can form from non-living matter"], a: 1, w: "Cell theory says all living things are made of cells, the cell is the basic unit, and new cells come from existing cells." },
      { q: "A cell appears 30 mm wide at a magnification of ×600. What is its actual width?", o: ["0.05 mm", "0.5 mm", "18 mm", "0.02 mm"], a: 0, w: "Actual size = image size ÷ magnification = 30 ÷ 600 = 0.05 mm." }
    ],
    s4: [
      { q: "What is the function of the chloroplast?", o: ["It controls what enters the cell", "It traps light energy for photosynthesis", "It releases energy from glucose", "It stores cell sap"], a: 1, w: "The chloroplast holds chlorophyll, which traps light. The mitochondrion releases energy." },
      { q: "Which statement about the plant cell wall is correct?", o: ["It is partially permeable and controls entry", "It is fully permeable and gives support", "It is made of protein and controls division", "It is the same structure as the cell membrane"], a: 1, w: "The wall is fully permeable; the membrane inside it controls entry." }
    ],
    s5: [
      { q: "Which structure is found in an animal cell but rarely in a plant cell?", o: ["Centriole", "Chloroplast", "Large vacuole", "Cellulose wall"], a: 0, w: "Centrioles guide cell division and are typical of animal cells." },
      { q: "How do animal cells store carbohydrate?", o: ["As starch", "As glycogen", "As cellulose", "As chlorophyll"], a: 1, w: "Plants store starch; animals store glycogen." }
    ],
    s6: [
      { q: "Which pair of differences is correct for a plant cell only?", o: ["Cellulose wall and chloroplast", "Centriole and small vacuole", "No nucleus and no wall", "Glycogen store and rounded shape"], a: 0, w: "The wall and the chloroplast are the two plant-only structures in the comparison." },
      { q: "Why does a root hair cell have no chloroplasts?", o: ["It is underground and receives no light", "It has no nucleus", "It stores glycogen", "It has a thick wall"], a: 0, w: "Without light there is nothing to trap, so chloroplasts would be useless. This is the named exception to the rule that plant cells are green." }
    ],
    s7: [
      { q: "Which feature suits a red blood cell to carry oxygen?", o: ["A long tail", "No nucleus, so more room for haemoglobin", "Many chloroplasts", "Thick cellulose wall"], a: 1, w: "Losing the nucleus leaves space for haemoglobin and lets the cell change shape in a capillary." },
      { q: "What is the job of a guard cell?", o: ["To absorb mineral salts", "To open and close the stoma", "To carry impulses", "To contract and move a bone"], a: 1, w: "Guard cells change shape and so open or close the stoma, which controls water loss." }
    ],
    s8: [
      { q: "Which order is correct, from smallest to largest?", o: ["Cell, organ, tissue, system, organism", "Cell, tissue, organ, system, organism", "Tissue, cell, organ, organism, system", "Cell, tissue, system, organ, organism"], a: 1, w: "Cell, tissue, organ, system, organism. Each level is built from the one before." },
      { q: "Why does the syllabus place Hydra at tissue level?", o: ["It is a single cell", "It has two tissue layers but no organ or system", "It has a cellulose wall", "It is a colony of organs"], a: 1, w: "Hydra has an outer epidermis and an inner gastrodermis. It has no organ and no system." }
    ],
    s9: [
      { q: "How does Euglena move?", o: ["With cilia", "With pseudopodia", "With one flagellum", "With two flagella"], a: 2, w: "Euglena has one flagellum. Chlamydomonas has two." },
      { q: "Why does a paramecium in fresh water need contractile vacuoles?", o: ["To store food", "To remove water that enters by osmosis", "To trap light", "To make chlorophyll"], a: 1, w: "Water enters the cell by osmosis, so the vacuoles fill and empty to keep the cell from bursting." }
    ],
    s10: [
      { q: "A question asks where light energy is trapped in a leaf cell. Which answer is right?", o: ["Chlorophyll", "Chloroplast", "Cell wall", "Vacuole"], a: 1, w: "The chloroplast is the structure. Chlorophyll is the pigment inside it." },
      { q: "Which statement about the cell membrane is correct?", o: ["It is fully permeable", "It is partially permeable and controls entry", "It is made of cellulose", "It lies outside the cell wall"], a: 1, w: "The membrane is partially permeable. The cellulose wall lies outside it and is fully permeable." }
    ]
  },
  cards: [
    { q: "State the seven characteristics of living things.", a: "Nutrition, respiration, excretion, growth, movement, reproduction and sensitivity." },
    { q: "Give the one-line definition of a living thing.", a: "It carries out nutrition, respiration, excretion, growth, movement, reproduction and sensitivity." },
    { q: "Excretion against egestion", a: "Excretion removes metabolic waste such as carbon dioxide and urea. Egestion removes undigested food that never entered the cells." },
    { q: "Why is movement not proof of life?", a: "A car moves but does not respire, grow by cell division or reproduce." },
    { q: "Why is a virus not treated as a living organism here?", a: "It is not a cell. It cannot feed, respire or reproduce without a host." },
    { q: "How does a living thing grow?", a: "From inside, by cell division and cell enlargement." },
    { q: "How does a crystal grow?", a: "From outside, by adding material. It is not alive." },
    { q: "State the three points of cell theory.", a: "All living things are made of cells. The cell is the basic unit of structure and function. New cells come from existing cells." },
    { q: "Who named the cell, and when?", a: "Robert Hooke, in 1665, after seeing cork cells." },
    { q: "Who first saw living cells?", a: "Antonie van Leeuwenhoek, with a simple lens." },
    { q: "Who found the nucleus?", a: "Robert Brown." },
    { q: "Magnification formula", a: "Magnification = image size ÷ actual size." },
    { q: "Actual size formula", a: "Actual size = image size ÷ magnification." },
    { q: "Magnification against resolution", a: "Magnification makes the image larger. Resolution makes two close points look separate." },
    { q: "Highest useful magnification: light and electron microscope", a: "About ×1500 for light, about ×500 000 for electron." },
    { q: "Resolution: light and electron microscope", a: "About 200 nm for light, about 0.5 nm for electron." },
    { q: "Why must a specimen be dead for an electron microscope?", a: "The specimen sits in a vacuum and the beam damages living material." },
    { q: "Name the three structures a plant cell has that an animal cell lacks.", a: "Cellulose cell wall, chloroplasts and a large permanent vacuole." },
    { q: "Function of the cell wall", a: "Support and protection. It is fully permeable and made of cellulose." },
    { q: "Function of the cell membrane", a: "Controls what enters and leaves. It is partially permeable." },
    { q: "Function of the nucleus", a: "Controls the activities of the cell and holds the genes." },
    { q: "Function of the mitochondrion", a: "Releases energy from glucose by respiration." },
    { q: "Function of the vacuole", a: "Stores water, sugar and salts, and gives turgor pressure." },
    { q: "What is turgor?", a: "The pressure of the vacuole against the cell wall. It keeps the plant firm." },
    { q: "What is plasmolysis?", a: "The cell loses water, the vacuole shrinks and the membrane pulls away from the wall." },
    { q: "What is the centriole for, and where is it found?", a: "It guides cell division. It is typical of animal cells." },
    { q: "Storage carbohydrate in plants and in animals", a: "Starch in plants, glycogen in animals." },
    { q: "State five parts shared by plant and animal cells.", a: "Membrane, cytoplasm, nucleus, mitochondria and ribosomes." },
    { q: "Give the five levels of organisation in order.", a: "Cell, tissue, organ, system, organism." },
    { q: "Syllabus example at each level", a: "Cell: Euglena or Paramecium. Tissue: epithelial tissue or Hydra. Organ: onion bulb. System: reproductive, digestive or excretory. Organism: Chlamydomonas." },
    { q: "Why is Hydra at tissue level?", a: "It has two tissue layers but no organ and no system." },
    { q: "Why is an onion bulb an organ?", a: "It is built from fleshy leaf scales, a stem plate and roots, so several tissues work together." },
    { q: "How does Euglena move?", a: "With one flagellum." },
    { q: "How does Paramecium move?", a: "With cilia over the whole body." },
    { q: "How does Amoeba move and feed?", a: "With pseudopodia. It engulfs food by phagocytosis." },
    { q: "How does Chlamydomonas move?", a: "With two flagella." },
    { q: "What does the Euglena eyespot do?", a: "It detects the direction and strength of light. It does not form an image." },
    { q: "Why is Euglena unusual?", a: "It has chlorophyll and photosynthesises, but it has no cellulose wall and can also absorb dissolved food." },
    { q: "Why does a fresh-water Paramecium need contractile vacuoles?", a: "Water enters by osmosis. The vacuoles fill and empty to stop the cell bursting." },
    { q: "Give one feature and one job for a root hair cell.", a: "A long thin extension gives a large surface for absorbing water and mineral salts." }
  ],
  exam: [
    { q: "The seven characteristics of living things include all of these except", o: ["excretion", "respiration", "digestion", "sensitivity"], a: 2, w: "Digestion is a process inside nutrition. It is not one of the seven.", s: "s1" },
    { q: "A student says a burning candle is alive because it gives out heat and light. Which reply is correct?", o: ["Heat and light are signs of respiration", "The candle does not grow by cell division or reproduce", "The candle respires without oxygen", "The candle excretes water"], a: 1, w: "None of the seven processes is carried out by a candle.", s: "s2" },
    { q: "Which process removes urea from the body?", o: ["Egestion", "Excretion", "Secretion", "Digestion"], a: 1, w: "Urea is metabolic waste, so its removal is excretion.", s: "s1" },
    { q: "A virus differs from a bacterium because a virus", o: ["has a nucleus", "is not a cell and needs a host to reproduce", "has a cell wall of cellulose", "can photosynthesise"], a: 1, w: "A virus has a protein coat and nucleic acid, and reproduces only inside a host.", s: "s2" },
    { q: "Which statement about growth is correct?", o: ["Living things grow by adding material to the outside", "Living things grow from inside by cell division", "Only animals grow", "Growth is not a characteristic of life"], a: 1, w: "Cell division and enlargement add cells from inside. A crystal adds material outside.", s: "s2" },
    { q: "Cell theory states that", o: ["all cells contain chloroplasts", "all living things are made of cells and new cells come from existing cells", "all cells have a wall", "cells form from non-living matter"], a: 1, w: "The three points cover structure, the basic unit and the origin of new cells.", s: "s3" },
    { q: "Robert Hooke named the cell after examining", o: ["pond water", "cork", "blood", "onion skin"], a: 1, w: "Hooke saw the empty boxes in cork in 1665.", s: "s3" },
    { q: "A cell is 0.02 mm wide and is drawn 10 mm wide. The magnification is", o: ["×200", "×500", "×50", "×2000"], a: 1, w: "10 ÷ 0.02 = 500.", s: "s3" },
    { q: "An image is 60 mm wide at ×1500. The actual width is", o: ["0.04 mm", "0.4 mm", "25 mm", "0.004 mm"], a: 0, w: "60 ÷ 1500 = 0.04 mm.", s: "s3" },
    { q: "The advantage of the electron microscope over the light microscope is", o: ["it shows natural colour", "it gives better resolution", "it can view living cells", "it is cheaper"], a: 1, w: "Its shorter wavelength gives resolution near 0.5 nm.", s: "s3" },
    { q: "Which structure is fully permeable?", o: ["Cell membrane", "Nuclear membrane", "Cellulose cell wall", "Vacuole membrane"], a: 2, w: "The wall has large gaps and lets most substances pass. Only membranes control entry.", s: "s4" },
    { q: "Turgor pressure is produced by", o: ["the nucleus pressing on the wall", "the vacuole pressing on the cell wall", "chloroplasts dividing", "the membrane contracting"], a: 1, w: "A full vacuole pushes outward on the wall and keeps the cell firm.", s: "s4" },
    { q: "Which organelle releases energy from glucose?", o: ["Chloroplast", "Ribosome", "Mitochondrion", "Golgi body"], a: 2, w: "Respiration happens in the mitochondrion. The chloroplast traps light.", s: "s4" },
    { q: "Protein is built at the", o: ["ribosome", "vacuole", "centriole", "cell wall"], a: 0, w: "Ribosomes are the site of protein synthesis.", s: "s4" },
    { q: "Which pair is found only in a plant cell?", o: ["Mitochondrion and ribosome", "Chloroplast and cellulose wall", "Nucleus and cytoplasm", "Golgi body and membrane"], a: 1, w: "These two are the plant-only structures in the standard comparison.", s: "s6" },
    { q: "An animal cell differs from a plant cell because it", o: ["has no nucleus", "stores glycogen and has no cellulose wall", "has no membrane", "has no cytoplasm"], a: 1, w: "Animal cells store glycogen and lack the wall, chloroplasts and large vacuole.", s: "s5" },
    { q: "Centrioles are typical of", o: ["plant cells", "animal cells", "bacteria", "red blood cells"], a: 1, w: "Centrioles guide division and are usual in animal cells.", s: "s5" },
    { q: "A root hair cell has no chloroplasts because", o: ["it is too small", "it is underground and receives no light", "it has no nucleus", "it stores water"], a: 1, w: "Chloroplasts would be useless without light.", s: "s6" },
    { q: "A palisade cell is suited to photosynthesis because it", o: ["has many chloroplasts near the leaf surface", "has no nucleus", "has a thick wall", "has cilia"], a: 0, w: "Many chloroplasts close to the light give the highest rate.", s: "s7" },
    { q: "A red blood cell carries more oxygen because it", o: ["has a large vacuole", "has no nucleus, leaving room for haemoglobin", "has many mitochondria", "has a cellulose wall"], a: 1, w: "The nucleus is lost during development, so haemoglobin fills the cell.", s: "s7" },
    { q: "Guard cells control", o: ["the opening of the stoma", "the making of starch", "the movement of water up the root", "the colour of the leaf"], a: 0, w: "Their change in shape opens or closes the stoma and so controls water loss.", s: "s7" },
    { q: "The correct order of organisation is", o: ["organ, tissue, cell, system, organism", "cell, tissue, organ, system, organism", "cell, organ, tissue, system, organism", "tissue, cell, organ, system, organism"], a: 1, w: "Each level is built from the level before it.", s: "s8" },
    { q: "Hydra is used in the syllabus as an example of", o: ["a cell", "a tissue", "an organ", "a system"], a: 1, w: "Hydra has two tissue layers but no organ or system.", s: "s8" },
    { q: "An onion bulb is an example of", o: ["a cell", "a tissue", "an organ", "a system"], a: 2, w: "Leaf scales, a stem plate and roots are several tissues working together.", s: "s8" },
    { q: "Chlamydomonas is given in the syllabus as an example of", o: ["a tissue", "an organ", "an organism", "a system"], a: 2, w: "It is a single cell that carries out all seven processes, so it is a whole organism.", s: "s8" },
    { q: "Epithelial tissue is an example of", o: ["a cell", "a tissue", "an organ", "a system"], a: 1, w: "A sheet of similar cells covering a surface is a tissue.", s: "s8" },
    { q: "The digestive, reproductive and excretory systems are examples of", o: ["organs", "tissues", "systems", "cells"], a: 2, w: "Several organs working together form a system.", s: "s8" },
    { q: "Euglena moves with", o: ["cilia", "one flagellum", "two flagella", "pseudopodia"], a: 1, w: "One flagellum pulls the cell through water.", s: "s9" },
    { q: "The eyespot of Euglena", o: ["forms an image", "detects light direction and strength", "stores food", "removes water"], a: 1, w: "It is a light-sensitive patch, not an eye.", s: "s9" },
    { q: "Paramecium sweeps food into its oral groove with", o: ["cilia", "flagella", "pseudopodia", "root hairs"], a: 0, w: "Cilia cover the body and beat to move food and the cell itself.", s: "s9" },
    { q: "Amoeba feeds by", o: ["photosynthesis", "phagocytosis with pseudopodia", "cilia", "absorption through a wall"], a: 1, w: "It surrounds the food with pseudopodia and digests it in a food vacuole.", s: "s9" },
    { q: "Contractile vacuoles are needed in fresh-water protozoa because", o: ["food enters by osmosis", "water enters by osmosis", "salts leave by diffusion", "oxygen enters by active transport"], a: 1, w: "Water enters the cell, and the vacuole removes the excess.", s: "s9" },
    { q: "Chlamydomonas has", o: ["one flagellum and no wall", "two flagella and a cup-shaped chloroplast", "cilia and a macronucleus", "pseudopodia and an eyespot"], a: 1, w: "Two flagella, a cup-shaped chloroplast and a cell wall.", s: "s9" },
    { q: "Which organism has no cellulose wall but does photosynthesise?", o: ["Chlamydomonas", "Euglena", "Paramecium", "Amoeba"], a: 1, w: "Euglena has chlorophyll but a pellicle instead of a cellulose wall.", s: "s9" },
    { q: "Which structure controls the activities of the cell?", o: ["Vacuole", "Nucleus", "Ribosome", "Wall"], a: 1, w: "The nucleus holds the genes that direct the cell.", s: "s4" },
    { q: "Two organelles that carry their own DNA are the", o: ["nucleus and ribosome", "mitochondrion and chloroplast", "vacuole and wall", "Golgi body and membrane"], a: 1, w: "Both carry a small circular DNA of their own.", s: "s4" },
    { q: "A plant wilts because", o: ["the walls dissolve", "cells lose water and turgor falls", "chloroplasts leave the cell", "the nucleus shrinks"], a: 1, w: "Loss of water lowers turgor and the leaf droops.", s: "s4" },
    { q: "Which statement about the nucleus of a red blood cell is correct?", o: ["It is large and central", "It is lost as the cell matures", "It divides often", "It holds chloroplasts"], a: 1, w: "The mature red blood cell has no nucleus.", s: "s7" },
    { q: "The cell membrane is described as partially permeable because it", o: ["lets every substance pass", "lets some substances pass and not others", "is made of cellulose", "is found only in plants"], a: 1, w: "It controls entry by size and by transport proteins.", s: "s10" },
    { q: "Which line correctly pairs a structure with its function?", o: ["Chloroplast: releases energy from glucose", "Mitochondrion: traps light energy", "Ribosome: builds protein", "Vacuole: controls entry to the cell"], a: 2, w: "Ribosomes build protein. The other three pairings are swapped.", s: "s10" }
  ]
};

window.QUIZ["eng:4"] = {
  checks: {
    s1: [
      { q: "How many marks does Section C, Oral Forms, carry?", o: ["Five", "Ten", "Fifteen", "Twenty"], a: 1, w: "Two questions on each of five patterns gives ten marks." },
      { q: "How many sounds does English have?", o: ["26 letters and 26 sounds", "44 sounds, 20 vowels and 24 consonants", "20 sounds, all vowels", "24 sounds, all consonants"], a: 1, w: "Twenty vowels and twenty-four consonants make forty-four sounds." }
    ],
    s2: [
      { q: "The letters <b>ough</b> in <b>cough</b> sound like", o: ["/ʌf/", "/ɒf/", "/uː/", "/aʊ/"], a: 1, w: "Cough rhymes with off. Rough takes /ʌf/, through takes /uː/, plough takes /aʊ/." },
      { q: "Which statement is correct?", o: ["A letter and a sound are the same thing", "One letter can carry more than one sound", "English has 44 letters", "A sound is always written with two letters"], a: 1, w: "The letter a carries five sounds in cat, late, car, talk and about." }
    ],
    s3: [
      { q: "Which word has the same vowel sound as <b>bird</b>?", o: ["beard", "heard", "bread", "bead"], a: 1, w: "Bird and heard both take /ɜː/. Beard is /ɪə/, bread is /e/, bead is /iː/." },
      { q: "Which pair is a long and short vowel pair?", o: ["ship and sheep", "cat and hat", "book and look", "cup and cap"], a: 0, w: "Ship is /ɪ/ and sheep is /iː/. The other pairs share one vowel." }
    ],
    s4: [
      { q: "Which word contains a triphthong?", o: ["day", "boy", "fire", "go"], a: 2, w: "Fire is /aɪə/, three vowels in one syllable. The others hold two or one." },
      { q: "Which group of diphthongs all end in /ɪ/?", o: ["/eɪ/, /aɪ/, /ɔɪ/", "/aʊ/, /əʊ/, /ɔɪ/", "/ɪə/, /eə/, /ʊə/", "/eɪ/, /aʊ/, /əʊ/"], a: 0, w: "Day, my and boy glide toward /ɪ/." }
    ],
    s5: [
      { q: "Which sound is the voiceless partner of /b/?", o: ["/d/", "/p/", "/v/", "/m/"], a: 1, w: "Both /p/ and /b/ are made with the lips; /p/ is voiceless." },
      { q: "Which word ends with the sound /ŋ/?", o: ["sin", "sing", "sign", "seen"], a: 1, w: "Sing ends in /ŋ/ with no hard g. Sin and seen end in /n/." }
    ],
    s6: [
      { q: "How many consonant sounds are heard at the end of <b>texts</b>?", o: ["One", "Two", "Three", "Four"], a: 2, w: "Texts ends /ksts/: four letters, three sounds after the vowel." },
      { q: "The plural ending in <b>buses</b> sounds like", o: ["/s/", "/z/", "/ɪz/", "/əz/"], a: 2, w: "After a sibilant the plural adds a full syllable: /ɪz/." }
    ],
    s7: [
      { q: "Which word rhymes with <b>great</b>?", o: ["greet", "weight", "grate", "grit"], a: 1, w: "Great and weight share /eɪt/. Greet and grate take other vowels or consonants." },
      { q: "Which word is a homophone of <b>peace</b>?", o: ["peas", "piece", "pace", "peach"], a: 1, w: "Piece sounds the same as peace. Peas is close but keeps /z/." }
    ],
    s8: [
      { q: "Which syllable is stressed in <b>photography</b>?", o: ["First", "Second", "Third", "Fourth"], a: 1, w: "The -graphy ending pulls the stress to the syllable before it: pho-TO-graph-y." },
      { q: "Which word is stressed on the first syllable?", o: ["beGIN", "forGET", "TAble", "aRRIVE"], a: 2, w: "Two-syllable nouns take stress on the first syllable; the other three are verbs." }
    ],
    s9: [
      { q: "In <b>Bola bought a RED car</b>, what is the hidden question?", o: ["Did Bola buy the car?", "Did Bola buy a blue car?", "Did Ada buy the car?", "Did Bola steal the car?"], a: 1, w: "Emphasis on red corrects the colour." },
      { q: "In <b>Ada WON the prize</b>, the emphasis answers which question?", o: ["Did Ada lose the prize?", "Did Ada win the prize?", "Did Bola win the prize?", "Was the prize big?"], a: 0, w: "Won contrasts with lost, so the doubt is about the result." }
    ],
    s10: [
      { q: "Which pair does NOT rhyme?", o: ["move and prove", "love and glove", "great and weight", "love and move"], a: 3, w: "Love and move share spelling but not sound: /ʌ/ against /uː/. The other three pairs rhyme." },
      { q: "Which answer avoids adding a vowel to a cluster?", o: ["s(i)chool", "school with /sk/", "sikool", "shool"], a: 1, w: "School begins with /sk/, two consonants and no vowel between them." }
    ]
  },
  cards: [
    { q: "How many vowel sounds does English have, and how are they split?", a: "Twenty: twelve monophthongs and eight diphthongs, with five triphthongs built from them." },
    { q: "How many consonant sounds does English have?", a: "Twenty-four." },
    { q: "Name the twelve monophthongs with one example each.", a: "/iː/ sheep, /ɪ/ ship, /e/ bed, /æ/ cat, /ɑː/ car, /ɒ/ hot, /ɔː/ door, /ʊ/ book, /uː/ food, /ʌ/ cup, /ɜː/ bird, /ə/ about." },
    { q: "Which monophthongs are long, and what marks them?", a: "/iː/, /ɑː/, /ɔː/, /uː/, /ɜː/. The two dots mark length." },
    { q: "What is the schwa?", a: "The weak vowel /ə/. It fills unstressed syllables, as in about and teacher." },
    { q: "Name the eight diphthongs with examples.", a: "/eɪ/ day, /aɪ/ my, /ɔɪ/ boy, /aʊ/ now, /əʊ/ go, /ɪə/ here, /eə/ hair, /ʊə/ tour." },
    { q: "Group the diphthongs by their second half.", a: "Three end in /ɪ/: /eɪ/, /aɪ/, /ɔɪ/. Two end in /ʊ/: /aʊ/, /əʊ/. Three end in /ə/: /ɪə/, /eə/, /ʊə/." },
    { q: "Name the five triphthongs with examples.", a: "/eɪə/ player, /aɪə/ fire, /ɔɪə/ loyal, /aʊə/ power, /əʊə/ lower." },
    { q: "Which voiceless and voiced pairs share a place of articulation?", a: "/p b/, /f v/, /θ ð/, /t d/, /k g/, /s z/, /ʃ ʒ/, /tʃ dʒ/." },
    { q: "Which consonants have no voiceless partner?", a: "/m/, /n/, /ŋ/, /l/, /r/, /j/, /w/ and /h/." },
    { q: "Think, tink, sink: name the three consonant sounds.", a: "/θ/ think, /t/ tink, /s/ sink." },
    { q: "This against dis: name the consonant sounds.", a: "/ð/ this, /d/ dis." },
    { q: "What is a consonant cluster?", a: "Two or more consonants together with no vowel between them, as in street and asked." },
    { q: "Give three initial clusters of three consonants.", a: "splash, strong, screw." },
    { q: "Why is 's(i)chool' wrong?", a: "It adds a vowel into the /sk/ cluster. School starts with /sk/, with no vowel between." },
    { q: "Give the three sounds of the plural ending, with examples.", a: "/s/ cats, /z/ dogs, /ɪz/ buses." },
    { q: "What is elision?", a: "A sound is dropped in connected speech, as in next day." },
    { q: "What is assimilation?", a: "A sound changes to match its neighbour, as in ten boys sounding like tem boys." },
    { q: "What is linking?", a: "A final consonant joins the next word's first vowel, as in an apple." },
    { q: "When do two words rhyme?", a: "When the stressed vowel and all sounds after it are the same, and the sound before it differs." },
    { q: "Which words rhyme with great?", a: "Weight, eight, late." },
    { q: "Which words rhyme with move?", a: "Prove and groove. Love and dove do not." },
    { q: "Define a homophone and give three pairs.", a: "Same sound, different spelling and meaning: write and right, sea and see, flour and flower." },
    { q: "Give the rule for stress in two-syllable nouns and verbs.", a: "Nouns and adjectives stress the first syllable; verbs stress the second." },
    { q: "Where is the stress in words ending -tion, -ic, -ity?", a: "On the syllable just before the ending: eduCAtion, elecTRIC, elecTRICity." },
    { q: "Where is the stress in words ending -graphy, -logy, -nomy, -cracy?", a: "On the syllable just before the ending: phoTOgraphy, biOlogy, eCONomy, deMOCracy." },
    { q: "Where is the stress in words ending -eer, -ee, -ese, -ette?", a: "On the ending: engiNEER, refuGEE, ChiNESE, cigaRETTE." },
    { q: "Which stress pattern do compound nouns take?", a: "Stress on the first part: BLACKbird, TEApot, FOOTball." },
    { q: "Give three words whose stress changes meaning.", a: "REcord and reCORD, OBject and obJECT, PREsent and preSENT." },
    { q: "Stress in photograph, photography and photographic.", a: "PHO-to-graph, pho-TO-graph-y, pho-to-GRAPH-ic." },
    { q: "State the rule for emphatic stress.", a: "Stress the word that answers the doubt or carries the new information." },
    { q: "Bola bought a red car yesterday. Stress the answer to 'Did Bola steal the car?'", a: "Bola BOUGHT a red car yesterday." },
    { q: "Bola bought a red car yesterday. Stress the answer to 'Did Ada buy the car?'", a: "BOLA bought a red car yesterday." },
    { q: "Where are the two dots used in transcription?", a: "On long vowels: /iː/, /ɑː/, /ɔː/, /uː/, /ɜː/." },
    { q: "Name the two sounds of th, with examples.", a: "/θ/ thin, voiceless, and /ð/ this, voiced." }
  ],
  exam: [
    { q: "Section C tests five patterns. Which is not one of them?", o: ["Vowels", "Consonants", "Synonyms", "Emphatic stress"], a: 2, w: "Synonyms belong to Lexis and Structure, Section B.", s: "s1" },
    { q: "The number of vowel sounds in English is", o: ["five", "twelve", "twenty", "twenty-four"], a: 2, w: "Twelve monophthongs and eight diphthongs give twenty vowel sounds.", s: "s1" },
    { q: "Which word has the same vowel sound as <b>sheep</b>?", o: ["ship", "seat", "set", "sit"], a: 1, w: "Sheep and seat take /iː/. Ship and sit take /ɪ/.", s: "s3" },
    { q: "Which word has the same vowel sound as <b>hot</b>?", o: ["caught", "cot", "coat", "hut"], a: 1, w: "Hot and cot both take /ɒ/. Caught is /ɔː/, coat is /əʊ/, hut is /ʌ/.", s: "s3" },
    { q: "Which word contains the schwa?", o: ["cat", "about", "book", "bird"], a: 1, w: "The weak first syllable of about is /ə/.", s: "s3" },
    { q: "Which word contains a diphthong?", o: ["bed", "day", "cup", "sit"], a: 1, w: "Day takes /eɪ/, two vowels in one syllable.", s: "s4" },
    { q: "Which word contains a triphthong?", o: ["player", "play", "plain", "plea"], a: 0, w: "Player is /pleɪə/, three vowels in one syllable.", s: "s4" },
    { q: "The diphthong in <b>now</b> is", o: ["/əʊ/", "/aʊ/", "/ɔɪ/", "/aɪ/"], a: 1, w: "Now glides from /a/ to /ʊ/.", s: "s4" },
    { q: "The diphthong in <b>here</b> is", o: ["/ɪə/", "/eə/", "/ʊə/", "/eɪ/"], a: 0, w: "Here glides from /ɪ/ to /ə/.", s: "s4" },
    { q: "Which sound is voiceless?", o: ["/b/", "/d/", "/t/", "/g/"], a: 2, w: "/t/ has no vibration of the vocal cords.", s: "s5" },
    { q: "Which sound is voiced?", o: ["/f/", "/s/", "/v/", "/θ/"], a: 2, w: "/v/ is the voiced partner of /f/.", s: "s5" },
    { q: "Which word begins with /θ/?", o: ["this", "think", "though", "there"], a: 1, w: "Think starts with the voiceless /θ/; the other three start with /ð/.", s: "s5" },
    { q: "Which word ends with /ŋ/?", o: ["nine", "sing", "sign", "sin"], a: 1, w: "Sing ends in the nasal /ŋ/, with no hard g.", s: "s5" },
    { q: "Which word begins with a three-consonant cluster?", o: ["street", "stop", "step", "seat"], a: 0, w: "Street begins /str/. Stop and step begin with two.", s: "s6" },
    { q: "Which word ends with the /ɪz/ sound?", o: ["cats", "dogs", "buses", "books"], a: 2, w: "After a sibilant the plural adds a full syllable.", s: "s6" },
    { q: "Which word ends with the /z/ sound?", o: ["cats", "dogs", "desks", "maps"], a: 1, w: "After a voiced sound the plural is /z/.", s: "s6" },
    { q: "The plural ending in <b>cats</b> is", o: ["/s/", "/z/", "/ɪz/", "/əz/"], a: 0, w: "After the voiceless /t/, the plural is /s/.", s: "s6" },
    { q: "Which pair rhymes?", o: ["love and move", "great and greet", "rain and train", "though and thought"], a: 2, w: "Rain and train share /eɪn/.", s: "s7" },
    { q: "Which word rhymes with <b>though</b>?", o: ["through", "low", "thought", "tough"], a: 1, w: "Though and low both end /əʊ/.", s: "s7" },
    { q: "Which pair are homophones?", o: ["write and right", "cat and cut", "ship and sheep", "peace and pace"], a: 0, w: "Both sound /raɪt/.", s: "s7" },
    { q: "Which word is a homophone of <b>flour</b>?", o: ["floor", "flower", "flow", "flair"], a: 1, w: "Flour and flower both sound /ˈflaʊə/.", s: "s7" },
    { q: "Which word rhymes with <b>great</b>?", o: ["greet", "grate", "weight", "grit"], a: 2, w: "Great and weight share /eɪt/.", s: "s7" },
    { q: "The stress in <b>table</b> falls on", o: ["the first syllable", "the second syllable", "both syllables", "neither syllable"], a: 0, w: "Two-syllable nouns take stress on the first syllable.", s: "s8" },
    { q: "The stress in <b>begin</b> falls on", o: ["the first syllable", "the second syllable", "the last consonant", "both syllables"], a: 1, w: "Two-syllable verbs take stress on the second syllable.", s: "s8" },
    { q: "The stress in <b>economy</b> falls on", o: ["the first syllable", "the second syllable", "the third syllable", "the fourth syllable"], a: 1, w: "The -nomy ending pulls stress to the syllable before it: e-CON-o-my.", s: "s8" },
    { q: "The stress in <b>photography</b> falls on", o: ["the first syllable", "the second syllable", "the third syllable", "the fourth syllable"], a: 1, w: "Pho-TO-graph-y.", s: "s8" },
    { q: "The stress in <b>engineer</b> falls on", o: ["the first syllable", "the second syllable", "the last syllable", "no syllable"], a: 2, w: "The -eer ending takes the stress: engi-NEER.", s: "s8" },
    { q: "Which word is stressed on the first syllable?", o: ["record, the verb", "object, the verb", "record, the noun", "present, the verb"], a: 2, w: "The noun keeps stress on the first syllable; the verb moves it.", s: "s8" },
    { q: "Which pair is correctly matched for stress?", o: ["REcord, noun", "reCORD, noun", "REcord, verb", "reCORD, adjective"], a: 0, w: "The noun takes first-syllable stress.", s: "s8" },
    { q: "The stress in <b>electricity</b> falls", o: ["on the first syllable", "just before -ity", "on the last syllable", "on -ity itself"], a: 1, w: "The -ity ending pulls stress to the syllable before it.", s: "s8" },
    { q: "The stress in <b>blackbird</b> falls on", o: ["the first part", "the second part", "both parts equally", "neither part"], a: 0, w: "Compound nouns stress the first element.", s: "s8" },
    { q: "In <b>Bola bought a RED car</b>, the emphatic stress answers", o: ["Did Bola buy a car?", "Did Bola buy a blue car?", "Did Bola sell the car?", "Did Ada buy a car?"], a: 1, w: "Red corrects the colour.", s: "s9" },
    { q: "In <b>BOLA bought the car</b>, the emphatic stress answers", o: ["Did Ada buy the car?", "Did Bola steal the car?", "Did Bola buy a car?", "Was the car new?"], a: 0, w: "Bola corrects the person.", s: "s9" },
    { q: "In <b>He LEFT the room</b>, the emphasis answers", o: ["Did he enter the room?", "Did she leave the room?", "Did he leave the house?", "Did he clean the room?"], a: 0, w: "Left contrasts with entered.", s: "s9" },
    { q: "Emphatic stress is placed on", o: ["the last word of the sentence", "the word that carries the new or contrasted information", "the first word of the sentence", "every content word"], a: 1, w: "Find the contrast first, then stress that word.", s: "s9" },
    { q: "Which word carries the emphasis in <b>I said SEVEN, not six</b>?", o: ["I", "said", "seven", "six"], a: 2, w: "Seven is the corrected number.", s: "s9" },
    { q: "Which statement about the schwa is correct?", o: ["It is always stressed", "It appears in unstressed syllables", "It is a consonant", "It is a long vowel"], a: 1, w: "The schwa is the weak vowel of unstressed syllables.", s: "s3" },
    { q: "Which word has two vowel sounds in one syllable?", o: ["boy", "bed", "book", "bird"], a: 0, w: "Boy takes the diphthong /ɔɪ/.", s: "s4" },
    { q: "Which spelling group shows that letters and sounds differ?", o: ["cat, hat, mat", "cough, rough, through", "bed, red, led", "pin, bin, tin"], a: 1, w: "The same letters carry /ɒf/, /ʌf/ and /uː/.", s: "s2" },
    { q: "A student says 'sikool' for school. The error is", o: ["a wrong consonant", "a vowel inserted into a cluster", "a wrong stress", "a missing plural"], a: 1, w: "School begins with /sk/, two consonants and no vowel between.", s: "s10" }
  ]
};
