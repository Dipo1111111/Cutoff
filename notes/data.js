/* Notes for one topic at a time. */
window.NOTES = {};

window.NOTES["phy:1"] = {
  kicker: "Physics · Topic 1",
  title: "Measurements and Units",
  sub: "Base units, instruments, dimensions, errors, significant figures",
  words: 4890,
  lede: "Every physics answer is a number with a unit. This topic teaches how those two parts are built, how a length or a mass is actually measured in a laboratory, and how to say how wrong the answer might be. Master it and the rest of the syllabus stops producing unit mistakes.",
  toc: [
    ["s0", "How to use this page"],
    ["s1", "What a measurement is"],
    ["s2", "The seven base quantities"],
    ["s3", "Derived quantities and units"],
    ["s4", "Prefixes"],
    ["s5", "Measuring length: metre rule"],
    ["s6", "Vernier caliper"],
    ["s7", "Micrometer screw gauge"],
    ["s8", "Area and volume"],
    ["s9", "Mass, weight, beam balance"],
    ["s10", "Time"],
    ["s11", "Dimensions"],
    ["s12", "Testing an equation"],
    ["s13", "What dimensions cannot do"],
    ["s14", "Accuracy, precision, error"],
    ["s15", "Combining errors"],
    ["s16", "Significant figures"],
    ["s17", "Standard form"],
    ["s18", "Worked examples"],
    ["s19", "Traps"],
    ["s20", "Syllabus coverage"]
  ],
  html: `
<h2 id="s0">0. How to use this page</h2>
<p>This page is built to be worked, not read once. Five habits carry the whole topic, and each one takes less than ten minutes.</p>
<div class="entry"><span class="n">01</span><div><h4>Blurting</h4><p>Read a section, close it, then write everything you can remember on blank paper. Open the section and mark what you missed in one colour. The gap you find is the only thing worth re-reading.</p></div></div>
<div class="entry"><span class="n">02</span><div><h4>The formula chain</h4><p>Never memorise eleven unit rows. Learn four chains and every derived unit falls out of them. The chains are drawn in section 3.</p></div></div>
<div class="entry"><span class="n">03</span><div><h4>Chunking by hand</h4><p>Seven base units do not fit in one bite. Split them: three mechanical (length, mass, time), three thermal and electric (current, temperature, amount), one optical (candela). Three chunks of three, two and one.</p></div></div>
<div class="entry"><span class="n">04</span><div><h4>Memory palace for instruments</h4><p>Walk your bedroom. On the bed lies a metre rule, on the desk a vernier caliper, on the shelf a micrometer, in the wardrobe a measuring cylinder, on the floor a stopwatch, on the door a beam balance. Six objects, six places, one walk. Read the least count aloud at each stop.</p></div></div>
<div class="entry"><span class="n">05</span><div><h4>Spaced tests, not re-reading</h4><p>Test a section today, again in three days, again in seven. That is the same gap the board uses to lock a topic. Reading a section twice in one sitting feels good and does nothing.</p></div></div>
<div class="def"><span class="dl">Two aids worth keeping</span><p><b>Let Me Teach; I Take Notes Joyfully.</b> The first letters of the seven base quantities in order: Length, Mass, Time, current (I), Temperature, amount (N), luminous intensity (J). Ten seconds to say, one line to remember.</p><p><b>The rule of ten.</b> Each finer instrument divides the least count by ten: metre rule 1 mm, vernier 0.1 mm, micrometer 0.01 mm. If a question asks which instrument, find the precision it names and walk down the rule.</p></div>
<div class="warn"><span class="wl">How the checks work</span><p>Every section ends with two questions. Answer them before you move on; a wrong answer tells you exactly which line to re-read. When the section holds, tick the topic on Week. The card deck and the long test at the end exist for the same reason: to make you pull the answer out, not to show it to you.</p></div>

<h2 id="s1">1. What a measurement is</h2>
<p>A measurement has two parts: a <strong>number</strong> and a <strong>unit</strong>. Writing "the length is 4" says nothing. Writing "the length is 4 cm" is a physical statement. Any quantity that can be measured and given a unit is a <strong>physical quantity</strong>.</p>
<div class="def"><span class="dl">Definition</span><p>A physical quantity is a property of a body or a phenomenon that can be measured and expressed as a number times a unit.</p></div>
<p>Physical quantities divide into two groups. <strong>Fundamental</strong> (also called base) quantities cannot be defined in terms of anything simpler: length, mass, time. <strong>Derived</strong> quantities are built from the fundamental ones: speed is length divided by time, so speed is derived.</p>
<p>The number of base quantities is a choice, not a fact of nature. The SI system chooses seven. Once the seven are fixed, every other quantity in physics can be written as a combination of them. That is the whole design.</p>

<h2 id="s2">2. The seven base quantities</h2>
<div class="tw"><table>
<tr><th>Base quantity</th><th>Symbol</th><th>SI unit</th><th>Unit symbol</th></tr>
<tr><td>Length</td><td>L</td><td>metre</td><td>m</td></tr>
<tr><td>Mass</td><td>M</td><td>kilogram</td><td>kg</td></tr>
<tr><td>Time</td><td>T</td><td>second</td><td>s</td></tr>
<tr><td>Electric current</td><td>I</td><td>ampere</td><td>A</td></tr>
<tr><td>Thermodynamic temperature</td><td>Θ</td><td>kelvin</td><td>K</td></tr>
<tr><td>Amount of substance</td><td>N</td><td>mole</td><td>mol</td></tr>
<tr><td>Luminous intensity</td><td>J</td><td>candela</td><td>cd</td></tr>
</table></div>
<p>Read the symbols carefully. They are the letters used in square brackets later in this topic. <strong>M</strong> is mass, not metre. <strong>T</strong> is time, not temperature.</p>
<div class="warn"><span class="wl">JAMB wording</span><p>The JAMB syllabus lists <strong>electric charge</strong> as one of the fundamental quantities, where the SI lists electric current. Both statements are usable. Charge is current multiplied by time, so one coulomb is one ampere-second (C = A·s). If a question asks for the seven base units, give the SI list above. If it asks what the syllabus calls fundamental, charge is accepted.</p></div>
<p>Three of these deserve a closer look, because they are the ones most often confused with something else.</p>
<div class="entry"><span class="n">01</span><div><h4>Mass is not weight</h4><p>Mass is the quantity of matter, in kilograms, and it does not change when you move. Weight is the force of gravity on that mass, in newtons, and it changes with g. On the Moon your mass is the same and your weight is one sixth.</p></div></div>
<div class="entry"><span class="n">02</span><div><h4>Temperature is not heat</h4><p>Kelvin measures temperature, which is average kinetic energy per particle. Heat is energy in transit, in joules. A cup and a bucket of water at 90 °C have the same temperature and very different heat content.</p></div></div>
<div class="entry"><span class="n">03</span><div><h4>Amount of substance is not mass</h4><p>The mole counts particles. One mole is 6.02 × 10<sup>23</sup> particles. One mole of hydrogen gas has a mass of 2 g; one mole of oxygen gas has a mass of 32 g. Same count, different mass.</p></div></div>

<h2 id="s3">3. Derived quantities and units</h2>
<p>A derived unit is made by multiplying or dividing base units. No new idea is involved, only algebra on the units.</p>
<div class="tw"><table>
<tr><th>Quantity</th><th>Definition</th><th>Unit</th><th>In base units</th></tr>
<tr><td>Area</td><td>length × length</td><td>square metre, m²</td><td>m²</td></tr>
<tr><td>Volume</td><td>length³</td><td>cubic metre, m³</td><td>m³</td></tr>
<tr><td>Speed</td><td>length ÷ time</td><td>metre per second, m/s</td><td>m s⁻¹</td></tr>
<tr><td>Acceleration</td><td>speed ÷ time</td><td>m/s²</td><td>m s⁻²</td></tr>
<tr><td>Force, weight</td><td>mass × acceleration</td><td>newton, N</td><td>kg m s⁻²</td></tr>
<tr><td>Pressure</td><td>force ÷ area</td><td>pascal, Pa</td><td>kg m⁻¹ s⁻²</td></tr>
<tr><td>Work, energy</td><td>force × distance</td><td>joule, J</td><td>kg m² s⁻²</td></tr>
<tr><td>Power</td><td>energy ÷ time</td><td>watt, W</td><td>kg m² s⁻³</td></tr>
<tr><td>Density</td><td>mass ÷ volume</td><td>kg/m³</td><td>kg m⁻³</td></tr>
<tr><td>Momentum</td><td>mass × velocity</td><td>kg m/s</td><td>kg m s⁻¹</td></tr>
<tr><td>Frequency</td><td>1 ÷ time</td><td>hertz, Hz</td><td>s⁻¹</td></tr>
</table></div>
<p>Two methods produce the unit of any derived quantity. Either substitute the defining equation, or use dimensions, which is the same thing written in letters. Both are shown for force:</p>
<div class="ex"><div class="ex-h">Worked example · the unit of force</div><div class="ex-b">
<p>Force = mass × acceleration. The unit of mass is kg. The unit of acceleration is m/s².</p>
<p>Unit of force = kg × m/s² = kg m s⁻². This combination is given its own name, the newton (N).</p>
<p>So 1 N = 1 kg m s⁻². A newton is the force that gives a 1 kg mass an acceleration of 1 m/s².</p>
</div></div>
<p>Named units are shorthand. A joule is still kg m² s⁻² underneath, and marks are lost when an answer mixes named and base units without converting.</p>

<h3>The formula chain: four branches, no memorising</h3>
<p>Every derived unit on that table grows from one of four branches. Draw these four chains on paper once, and the table becomes something you can rebuild in an exam.</p>
<div class="chain">
  <div class="ch"><span class="ch-n">Space</span><span class="ch-r">m &rarr; m² &rarr; m³</span><span class="ch-d">length, then length again for area, then again for volume</span></div>
  <div class="ch"><span class="ch-n">Motion</span><span class="ch-r">m s⁻¹ &rarr; m s⁻² &rarr; kg m s⁻²</span><span class="ch-d">speed, divide by time for acceleration, multiply by mass for force</span></div>
  <div class="ch"><span class="ch-n">Energy</span><span class="ch-r">kg m s⁻² &rarr; kg m² s⁻² &rarr; kg m² s⁻³</span><span class="ch-d">force, times distance for work, divide by time for power</span></div>
  <div class="ch"><span class="ch-n">Pressure</span><span class="ch-r">kg m s⁻² &rarr; kg m⁻¹ s⁻²</span><span class="ch-d">force, divide by area for pressure</span></div>
</div>
<p>Two more sit beside the chains. Density is mass divided by volume, so kg m⁻³. Momentum is mass times velocity, so kg m s⁻¹. Frequency is one over time, so s⁻¹.</p>
<h3>The negative exponent rule</h3>
<p>You do not decide where a minus sign goes. Dividing flips the sign of the exponent on the bottom.</p>
<div class="tw"><table>
<tr><th>Operation</th><th>Effect on exponents</th><th>Example</th></tr>
<tr><td>divide by s</td><td>add s⁻¹</td><td>m ÷ s = m s⁻¹</td></tr>
<tr><td>divide by s again</td><td>s⁻¹ becomes s⁻²</td><td>m s⁻¹ ÷ s = m s⁻²</td></tr>
<tr><td>multiply by kg</td><td>add kg on top</td><td>m s⁻² × kg = kg m s⁻²</td></tr>
<tr><td>divide by m²</td><td>m goes from top to m⁻¹</td><td>kg m s⁻² ÷ m² = kg m⁻¹ s⁻²</td></tr>
</table></div>
<h3>Five named units, five pictures</h3>
<div class="entry"><span class="n">01</span><div><h4>Newton, N, force</h4><p>An apple lands on Newton's head and pushes it down. Mass times acceleration.</p></div></div>
<div class="entry"><span class="n">02</span><div><h4>Pascal, Pa, pressure</h4><p>You squeeze a tube of toothpaste. Paste, pascal, both start the same way.</p></div></div>
<div class="entry"><span class="n">03</span><div><h4>Joule, J, energy</h4><p>A jewel glows as it falls, spending energy over a distance.</p></div></div>
<div class="entry"><span class="n">04</span><div><h4>Watt, W, power</h4><p>Ask the lamp: what is the power of this bulb?</p></div></div>
<div class="entry"><span class="n">05</span><div><h4>Hertz, Hz, frequency</h4><p>A drum hits you once a second. It hurts, and it hertz.</p></div></div>

<h2 id="s4">4. Prefixes</h2>
<p>A prefix multiplies the unit by a power of ten. Convert every quantity to base units before you calculate, then convert back at the end if the question asks for a prefix.</p>
<div class="tw"><table>
<tr><th>Prefix</th><th>Symbol</th><th>Factor</th><th>Example</th></tr>
<tr><td>tera</td><td>T</td><td>10<sup>12</sup></td><td>1 THz = 10<sup>12</sup> Hz</td></tr>
<tr><td>giga</td><td>G</td><td>10<sup>9</sup></td><td>1 GHz = 10<sup>9</sup> Hz</td></tr>
<tr><td>mega</td><td>M</td><td>10<sup>6</sup></td><td>1 MW = 10<sup>6</sup> W</td></tr>
<tr><td>kilo</td><td>k</td><td>10<sup>3</sup></td><td>1 km = 1000 m</td></tr>
<tr><td>centi</td><td>c</td><td>10<sup>−2</sup></td><td>1 cm = 0.01 m</td></tr>
<tr><td>milli</td><td>m</td><td>10<sup>−3</sup></td><td>1 mm = 0.001 m</td></tr>
<tr><td>micro</td><td>µ</td><td>10<sup>−6</sup></td><td>1 µm = 10<sup>−6</sup> m</td></tr>
<tr><td>nano</td><td>n</td><td>10<sup>−9</sup></td><td>1 nm = 10<sup>−9</sup> m</td></tr>
<tr><td>pico</td><td>p</td><td>10<sup>−12</sup></td><td>1 pF = 10<sup>−12</sup> F</td></tr>
</table></div>
<p>Case matters. <strong>M</strong> is mega and <strong>m</strong> is milli, a factor of a billion apart. <strong>K</strong> is kelvin and <strong>k</strong> is kilo. <strong>T</strong> is tera and <strong>t</strong> is a tonne.</p>
<p>Area and volume prefixes are squared and cubed. 1 cm² is 10<sup>−4</sup> m², not 10<sup>−2</sup> m². 1 cm³ is 10<sup>−6</sup> m³. This single fact explains most unit errors in density questions.</p>

<h2 id="s5">5. Measuring length: the metre rule</h2>
<p>The metre rule is the everyday instrument. Its smallest division is 1 mm, so its <strong>least count</strong> is 1 mm, or 0.1 cm. A reading is written 24.3 cm, not 24.30 cm, because the rule cannot see the next digit.</p>
<p>Three rules control the reading.</p>
<ol>
<li>Place the eye directly above the mark. Looking from the side shifts the mark against the scale. That shift is <strong>parallax error</strong>.</li>
<li>Start from a clear graduation, not from the worn end of the rule. If the end is damaged, measure from 2.0 cm and subtract 2.0 cm.</li>
<li>Record to the least count. 12.4 cm, not 12 cm, and not 12.43 cm.</li>
</ol>
<p>A measuring tape works the same way, with a least count of 1 mm, and is used when the object is longer than the rule. A <strong>metre rule measures length; a tape measures length; neither measures diameter to 0.01 mm</strong>. For that you need the two instruments below.</p>

<h2 id="s6">6. Vernier caliper</h2>
<p>The vernier caliper measures internal diameter, external diameter and depth to <strong>0.1 mm</strong> (0.01 cm). It has two scales: a fixed main scale in millimetres and a sliding vernier scale with 10 divisions.</p>
<p>The 10 vernier divisions cover exactly 9 mm of the main scale. So one vernier division is 0.9 mm, and the difference between one main division and one vernier division is 0.1 mm. That difference is the least count.</p>
<div class="def"><span class="dl">Least count</span><p>Least count = 1 main scale division − 1 vernier scale division = 1.0 mm − 0.9 mm = 0.1 mm = 0.01 cm.</p></div>
<h3>How to read it</h3>
<div class="entry"><span class="n">01</span><div><h4>Main scale</h4><p>Read the last main-scale mark to the left of the vernier zero. Give it in millimetres.</p></div></div>
<div class="entry"><span class="n">02</span><div><h4>Vernier scale</h4><p>Find the vernier division that lines up exactly with a main-scale mark. Multiply that number by 0.1 mm.</p></div></div>
<div class="entry"><span class="n">03</span><div><h4>Add and correct</h4><p>Reading = main scale + vernier. Then subtract a positive zero error, or add the size of a negative one.</p></div></div>
<div class="ex"><div class="ex-h">Worked example · a plain reading</div><div class="ex-b">
<p>The main scale shows 32 mm. The 6th vernier mark coincides with a main-scale mark.</p>
<p>Vernier part = 6 × 0.1 mm = 0.6 mm.</p>
<p>Reading = 32 + 0.6 = <span class="ans">32.6 mm = 3.26 cm</span>.</p>
<p>Write 32.6 mm, not 32.60 mm. The instrument stops at 0.1 mm.</p>
</div></div>
<h3>Zero error</h3>
<p>Close the jaws completely. They should read zero. If they do not, the instrument carries a zero error, and every reading inherits it.</p>
<ul>
<li><strong>Positive zero error:</strong> the vernier zero sits to the right of the main-scale zero. The instrument reads too much. <em>Subtract</em> the error.</li>
<li><strong>Negative zero error:</strong> the vernier zero sits to the left of the main-scale zero. The instrument reads too little. <em>Add</em> the size of the error.</li>
</ul>
<p>The sign lives in the closing reading. If the jaws closed at +0.4 mm, subtract 0.4 mm. If they closed at −0.3 mm, add 0.3 mm. One rule covers both cases.</p>
<div class="ex"><div class="ex-h">Worked example · reading with zero error</div><div class="ex-b">
<p>With the jaws closed, the caliper reads 0.3 mm. This is a positive zero error.</p>
<p>A rod is then measured: main scale 21 mm, vernier 4 divisions coincide, so 0.4 mm.</p>
<p>Observed reading = 21.4 mm. True diameter = 21.4 − 0.3 = <span class="ans">21.1 mm = 2.11 cm</span>.</p>
</div></div>
<p>Common error: reading the main scale from the vernier zero instead of from the last mark before it. The vernier zero is a pointer, not a scale mark.</p>

<h2 id="s7">7. Micrometer screw gauge</h2>
<p>The micrometer measures small thicknesses, such as a wire or a sheet, to <strong>0.01 mm</strong>. That is ten times finer than the vernier caliper. It has a fixed sleeve scale in millimetres and a rotating thimble with 50 divisions.</p>
<p>One full turn of the thimble moves the spindle 0.5 mm. This distance is the <strong>pitch</strong>. Fifty divisions spread over 0.5 mm give 0.01 mm per division.</p>
<div class="def"><span class="dl">Least count</span><p>Least count = pitch ÷ number of thimble divisions = 0.5 mm ÷ 50 = 0.01 mm.</p></div>
<h3>How to read it</h3>
<div class="entry"><span class="n">01</span><div><h4>Sleeve</h4><p>Read the last mark visible on the sleeve. Count the half-millimetre mark if it has passed.</p></div></div>
<div class="entry"><span class="n">02</span><div><h4>Thimble</h4><p>Read the division on the thimble that lines up with the datum line, and multiply by 0.01 mm.</p></div></div>
<div class="entry"><span class="n">03</span><div><h4>Add and correct</h4><p>Reading = sleeve + thimble. Then apply the zero error with the same sign rule as the caliper.</p></div></div>
<div class="ex"><div class="ex-h">Worked example · wire diameter</div><div class="ex-b">
<p>The sleeve shows 2.5 mm. The thimble reads 34 divisions.</p>
<p>Thimble part = 34 × 0.01 = 0.34 mm.</p>
<p>Reading = 2.5 + 0.34 = 2.84 mm.</p>
<p>With the jaws closed the gauge read +0.03 mm, so the true diameter = 2.84 − 0.03 = <span class="ans">2.81 mm</span>.</p>
</div></div>
<div class="warn"><span class="wl">Do not over-tighten</span><p>Turn the ratchet, not the thimble, when the spindle touches the object. Over-tightening compresses a soft wire and the reading becomes too small. Hold the frame by the insulated pad so body heat does not expand the metal.</p></div>
<div class="tw"><table>
<tr><th>Instrument</th><th>Least count</th><th>Use for</th></tr>
<tr><td>Metre rule</td><td>1 mm</td><td>lengths above a few centimetres</td></tr>
<tr><td>Measuring tape</td><td>1 mm</td><td>long distances, room, field</td></tr>
<tr><td>Vernier caliper</td><td>0.01 cm (0.1 mm)</td><td>diameters, internal width, depth</td></tr>
<tr><td>Micrometer screw gauge</td><td>0.01 mm</td><td>wire, sheet, small thickness</td></tr>
<tr><td>Measuring cylinder</td><td>1 cm³ or 0.1 cm³</td><td>volume of liquid</td></tr>
<tr><td>Beam balance</td><td>0.01 g to 0.1 g</td><td>mass</td></tr>
<tr><td>Stopwatch</td><td>0.01 s to 0.2 s</td><td>time interval</td></tr>
</table></div>

<h2 id="s8">8. Area and volume</h2>
<p>Regular shapes are calculated from measured lengths. Measure the smallest dimension with the instrument that can see it, then use the formula.</p>
<div class="tw"><table>
<tr><th>Shape</th><th>Area</th><th>Volume</th></tr>
<tr><td>Rectangle</td><td>l × b</td><td>l × b × h</td></tr>
<tr><td>Triangle</td><td>½ × base × height</td><td>½ × base × height × length</td></tr>
<tr><td>Circle</td><td>πr²</td><td>πr² × h (cylinder)</td></tr>
<tr><td>Trapezium</td><td>½(a + b)h</td><td>area × length</td></tr>
<tr><td>Sphere</td><td>4πr²</td><td>4/3 πr³</td></tr>
<tr><td>Cone</td><td>curved: πrl</td><td>1/3 πr²h</td></tr>
</table></div>
<p><strong>Irregular bodies</strong> cannot be calculated. Use displacement.</p>
<ol>
<li>Pour water into a measuring cylinder and read the level V₁ with the eye level with the meniscus.</li>
<li>Lower the solid gently until it is fully covered and no air clings to it.</li>
<li>Read the new level V₂.</li>
<li>Volume of the solid = V₂ − V₁.</li>
</ol>
<p>A body that floats, such as cork, needs a sinker. Tie the sinker to the cork, lower both, and subtract the volume the sinker displaced on its own. Two readings, one subtraction.</p>
<div class="warn"><span class="wl">Meniscus</span><p>Water curves down in the middle. Read the bottom of the curve, with the eye level. Reading the top edge of the curve adds about 0.5 cm³ of error each time.</p></div>
<p>A regular solid measured with calipers gives a better volume than displacement, because displacement multiplies the reading errors of three instruments. If the body is a cube of side 2.00 cm, V = 8.00 cm³. Displacement in a 10 cm³ cylinder would carry at least ±1 cm³.</p>

<h2 id="s9">9. Mass, weight and the beam balance</h2>
<p>Mass is measured with a balance, which compares the body against known masses. Weight is measured with a spring balance, which measures the pull of gravity.</p>
<p>Two balances appear in the syllabus.</p>
<div class="entry"><span class="n">01</span><div><h4>Buchart's balance</h4><p>A direct-reading balance. The body sits on one side, and a set of riders slides along a graduated beam until the beam is level. The mass is read straight from the beam positions, in grams.</p></div></div>
<div class="entry"><span class="n">02</span><div><h4>Chemical balance</h4><p>A two-pan balance with a pointer at the centre. Standard masses are added to one pan until the pointer stays at the centre mark. Mass of the body = sum of the standard masses.</p></div></div>
<p>Both instruments compare masses, so the reading is the same on the Moon. A spring balance would read about one sixth there, because g is smaller.</p>
<p>Every balance needs two settings before use: <strong>zero</strong> it with nothing on the pan, and check that it is level. A balance that is not zeroed adds a constant offset to every reading, which is a systematic error.</p>

<h2 id="s10">10. Time</h2>
<p>The stopwatch is the usual instrument. A mechanical stopwatch reads to 0.1 s or 0.2 s; a digital stopwatch reads to 0.01 s. The limit is not the display but the person. Human reaction time is about 0.2 s, so a single short interval carries at least that error, whatever the display shows.</p>
<p>The fix is to measure a long interval and divide. For a pendulum, time 20 oscillations with the stopwatch, then divide by 20. A 0.2 s reaction error spread over 20 swings becomes 0.01 s per swing.</p>
<p>Start the watch on a count, not on the first swing you happen to notice. Let the pendulum settle, then start on a passing through the centre, and count "zero" as the first pass so the count matches the swings.</p>

<h2 id="s11">11. Dimensions</h2>
<p>Dimensions describe what a quantity is made of, using the base quantities. They ignore the size of the quantity and the system of units. A length in metres and a length in miles have the same dimension.</p>
<div class="def"><span class="dl">Definition</span><p>The dimension of a physical quantity is the power to which each base quantity is raised to express that quantity.</p></div>
<p>Dimensions are written in square brackets with capital letters: [L] for length, [M] for mass, [T] for time, [I] for current, [Θ] for temperature, [N] for amount of substance, [J] for luminous intensity.</p>
<div class="tw"><table>
<tr><th>Quantity</th><th>Equation</th><th>Dimension</th></tr>
<tr><td>Area</td><td>L × L</td><td>[L²]</td></tr>
<tr><td>Volume</td><td>L³</td><td>[L³]</td></tr>
<tr><td>Velocity</td><td>L ÷ T</td><td>[LT⁻¹]</td></tr>
<tr><td>Acceleration</td><td>L ÷ T²</td><td>[LT⁻²]</td></tr>
<tr><td>Force, weight</td><td>M × L ÷ T²</td><td>[MLT⁻²]</td></tr>
<tr><td>Momentum, impulse</td><td>M × L ÷ T</td><td>[MLT⁻¹]</td></tr>
<tr><td>Work, energy, torque</td><td>M × L² ÷ T²</td><td>[ML²T⁻²]</td></tr>
<tr><td>Power</td><td>M × L² ÷ T³</td><td>[ML²T⁻³]</td></tr>
<tr><td>Pressure, stress</td><td>M ÷ (L × T²)</td><td>[ML⁻¹T⁻²]</td></tr>
<tr><td>Density</td><td>M ÷ L³</td><td>[ML⁻³]</td></tr>
<tr><td>Frequency</td><td>1 ÷ T</td><td>[T⁻¹]</td></tr>
<tr><td>Charge</td><td>I × T</td><td>[IT]</td></tr>
<tr><td>Potential difference</td><td>M L² ÷ (T³ I)</td><td>[ML²T⁻³I⁻¹]</td></tr>
<tr><td>Resistance</td><td>M L² ÷ (T³ I²)</td><td>[ML²T⁻³I⁻²]</td></tr>
<tr><td>Surface tension</td><td>force ÷ length</td><td>[MT⁻²]</td></tr>
<tr><td>Viscosity</td><td>force × time ÷ area</td><td>[ML⁻¹T⁻¹]</td></tr>
</table></div>
<div class="ex"><div class="ex-h">Worked example · dimensions of pressure</div><div class="ex-b">
<p>Pressure = force ÷ area.</p>
<p>[P] = [MLT⁻²] ÷ [L²] = [ML⁻¹T⁻²].</p>
<p>Read that as mass, divided by length and time squared. The unit follows at once: kg m⁻¹ s⁻², which is the pascal.</p>
</div></div>

<h2 id="s12">12. Testing an equation</h2>
<p>An equation is valid only if every term has the same dimension. This is called the <strong>principle of homogeneity</strong>. It gives a fast check in an exam: test one term against another, and stop when a mismatch appears.</p>
<div class="ex"><div class="ex-h">Worked example · s = ut + ½at²</div><div class="ex-b">
<p>Term 1, s: [L].</p>
<p>Term 2, ut: velocity × time = [LT⁻¹][T] = [L]. Matches.</p>
<p>Term 3, at²: acceleration × time² = [LT⁻²][T²] = [L]. Matches.</p>
<p>All three terms are lengths, so the equation is dimensionally correct. The ½ is invisible to dimensions, which is why the constant cannot be found this way.</p>
</div></div>
<div class="ex"><div class="ex-h">Worked example · the period of a pendulum</div><div class="ex-b">
<p>Using T = 2π√(l/g). The term l/g has dimension [L] ÷ [LT⁻²] = [T²].</p>
<p>Its square root has dimension [T], which matches the left side. The equation passes.</p>
<p>This test also tells you the period cannot depend on the mass of the bob, because mass would bring [M] into a formula whose left side is pure time. That is a real physics result, obtained without a single experiment.</p>
</div></div>
<div class="ex"><div class="ex-h">Worked example · finding the unit from dimensions</div><div class="ex-b">
<p>A quantity is defined as F = mV/t. Find its unit.</p>
<p>[F] = [M][L][T⁻¹] ÷ [T] = [MLT⁻²], which is the newton. Any quantity with that dimension is a force.</p>
</div></div>

<h2 id="s13">13. What dimensions cannot do</h2>
<p>Passing the test is necessary, not sufficient. Five limits matter.</p>
<div class="entry"><span class="n">01</span><div><h4>Constants</h4><p>Dimensions cannot find 2, π, ½ or any other pure number. They are invisible to the test.</p></div></div>
<div class="entry"><span class="n">02</span><div><h4>Same-dimension quantities</h4><p>Work and torque both have [ML²T⁻²]. Dimension alone cannot tell them apart, and it cannot tell density from pressure in some combinations.</p></div></div>
<div class="entry"><span class="n">03</span><div><h4>Trigonometric and exponential terms</h4><p>sin θ, cos θ and e<sup>x</sup> are dimensionless, whatever the units of θ or x. The test goes blind inside them.</p></div></div>
<div class="entry"><span class="n">04</span><div><h4>Equations with more than one term</h4><p>Dimensions can check a relation, but they cannot derive one that has several terms of the same kind. They also cannot reveal a missing term.</p></div></div>
<div class="entry"><span class="n">05</span><div><h4>Wrong physics, right dimensions</h4><p>v = u + at² passes the test because at² has dimension [L], yet it is wrong. The test rules out errors, it does not confirm truth.</p></div></div>

<h2 id="s14">14. Accuracy, precision and error</h2>
<p>These three words are often mixed up.</p>
<div class="def"><span class="dl">Accuracy</span><p>How close a reading is to the true value.</p></div>
<div class="def"><span class="dl">Precision</span><p>How close repeated readings are to each other.</p></div>
<p>A stopwatch can be precise and inaccurate at once: ten readings inside 0.02 s of each other, all 0.2 s late. Precision is repeatability; accuracy is truth.</p>
<p>The accuracy of an instrument is tied to its least count. A metre rule is accurate to about 1 mm, a vernier caliper to 0.1 mm, a micrometer to 0.01 mm. An instrument cannot be more accurate than the scale it shows.</p>
<h3>Systematic and random errors</h3>
<div class="tw"><table>
<tr><th></th><th>Systematic</th><th>Random</th></tr>
<tr><td>Direction</td><td>always the same way</td><td>scattered both ways</td></tr>
<tr><td>Cause</td><td>zero error, worn rule, wrong calibration, parallax in one direction</td><td>reaction time, uneven surface, fluctuating temperature, judging a meniscus</td></tr>
<tr><td>Fix</td><td>calibrate, correct the zero, use a better instrument</td><td>repeat and average, use a longer interval</td></tr>
<tr><td>Repeating</td><td>reduces nothing</td><td>reduces the error</td></tr>
</table></div>
<p>An averaging fix does not touch a systematic error. If the rule is short by 2 mm, twenty readings average to the same wrong answer.</p>
<h3>Expressing error</h3>
<div class="def"><span class="dl">Definition</span><p>Absolute error is the size of the uncertainty in the same unit as the reading. Relative error is absolute error divided by the reading. Percentage error is relative error multiplied by 100.</p></div>
<div class="ex"><div class="ex-h">Worked example · percentage error</div><div class="ex-b">
<p>A length is recorded as 25.0 ± 0.1 cm.</p>
<p>Relative error = 0.1 ÷ 25.0 = 0.004.</p>
<p>Percentage error = 0.004 × 100 = <span class="ans">0.4 %</span>.</p>
<p>The smaller the reading, the larger the percentage error. The same 0.1 cm on a 2 cm reading is 5 %.</p>
</div></div>

<h2 id="s15">15. Combining errors</h2>
<p>Three rules cover almost every exam question.</p>
<div class="entry"><span class="n">01</span><div><h4>Adding or subtracting</h4><p>Add the absolute errors. If a = 5.0 ± 0.1 cm and b = 3.0 ± 0.1 cm, then a − b = 2.0 ± 0.2 cm.</p></div></div>
<div class="entry"><span class="n">02</span><div><h4>Multiplying or dividing</h4><p>Add the percentage errors. Length 20.0 ± 0.1 cm and width 5.0 ± 0.1 cm give 0.5 % and 2 %. The area carries 2.5 %.</p></div></div>
<div class="entry"><span class="n">03</span><div><h4>Raising to a power</h4><p>Multiply the percentage error by the power. The volume of a sphere carries three times the percentage error of its radius.</p></div></div>
<div class="ex"><div class="ex-h">Worked example · error in a density</div><div class="ex-b">
<p>Mass = 40.0 ± 0.2 g, volume = 8.0 ± 0.1 cm³.</p>
<p>Mass error = 0.2 ÷ 40.0 × 100 = 0.5 %. Volume error = 0.1 ÷ 8.0 × 100 = 1.25 %.</p>
<p>Density = 40.0 ÷ 8.0 = 5.0 g/cm³, with error 0.5 + 1.25 = 1.75 %.</p>
<p>1.75 % of 5.0 is 0.0875, so density = <span class="ans">5.0 ± 0.1 g/cm³</span>.</p>
</div></div>

<h2 id="s16">16. Significant figures</h2>
<p>Significant figures show how much of a measurement you actually trust. They are not decoration.</p>
<div class="tw"><table>
<tr><th>Rule</th><th>Example</th><th>Count</th></tr>
<tr><td>Every non-zero digit counts</td><td>4.72</td><td>3</td></tr>
<tr><td>Zeros between digits count</td><td>5.03</td><td>3</td></tr>
<tr><td>Leading zeros do not count</td><td>0.0042</td><td>2</td></tr>
<tr><td>Trailing zeros after a decimal point count</td><td>0.500</td><td>3</td></tr>
<tr><td>Trailing zeros in a whole number are ambiguous</td><td>1500</td><td>2, unless written as 1.500 × 10³</td></tr>
</table></div>
<p>Two rounding rules matter in calculation.</p>
<ul>
<li><strong>Adding and subtracting:</strong> keep the smallest number of decimal places, not significant figures. 12.11 + 0.3 = 12.4.</li>
<li><strong>Multiplying and dividing:</strong> keep the smallest number of significant figures. 2.5 × 3.42 = 8.6, not 8.55.</li>
</ul>
<p>Round only at the end. Rounding halfway through a calculation moves the answer more than the measurement error does.</p>

<h2 id="s17">17. Standard form</h2>
<p>Standard form writes a number as A × 10<sup>n</sup>, where A is between 1 and 10 and n is a whole number. It removes the ambiguity of trailing zeros and keeps very small or very large quantities readable.</p>
<div class="tw"><table>
<tr><th>Number</th><th>Standard form</th><th>Significant figures</th></tr>
<tr><td>0.000 42</td><td>4.2 × 10⁻⁴</td><td>2</td></tr>
<tr><td>1500</td><td>1.5 × 10³</td><td>2</td></tr>
<tr><td>6 400 000</td><td>6.4 × 10⁶</td><td>2</td></tr>
<tr><td>0.0708</td><td>7.08 × 10⁻²</td><td>3</td></tr>
</table></div>
<p>Move the decimal point until one digit sits before it, then count the moves. Moving right gives a negative power; moving left gives a positive power.</p>
<div class="ex"><div class="ex-h">Worked example · a calculation in standard form</div><div class="ex-b">
<p>A wire has diameter 0.24 mm. Find its cross-sectional area.</p>
<p>r = 0.12 mm = 1.2 × 10⁻⁴ m.</p>
<p>A = πr² = 3.14 × (1.2 × 10⁻⁴)² = 3.14 × 1.44 × 10⁻⁸ = <span class="ans">4.5 × 10⁻⁸ m²</span>.</p>
<p>Two significant figures, because r carried two.</p>
</div></div>

<h2 id="s18">18. Worked examples</h2>
<div class="ex"><div class="ex-h">1 · speed conversion</div><div class="ex-b">
<p>A car moves at 72 km/h. Find its speed in m/s.</p>
<p>72 km/h = 72 × 1000 ÷ 3600 = <span class="ans">20 m/s</span>. Multiplying by 1000/3600 is the same as dividing by 3.6.</p>
</div></div>
<div class="ex"><div class="ex-h">2 · which instrument</div><div class="ex-b">
<p>State the instrument for a steel ball of diameter about 15 mm, to the nearest 0.01 mm.</p>
<p>The needed precision is 0.01 mm. A metre rule gives 1 mm and a vernier gives 0.1 mm, so only the micrometer screw gauge reaches 0.01 mm. Use it and quote the diameter as, for example, 14.97 mm.</p>
</div></div>
<div class="ex"><div class="ex-h">3 · dimension of a constant</div><div class="ex-b">
<p>In F = kx, x is an extension and F is a force. Find the dimension and unit of k.</p>
<p>[k] = [F] ÷ [x] = [MLT⁻²] ÷ [L] = [MT⁻²]. The unit is kg s⁻², which is N/m.</p>
</div></div>
<div class="ex"><div class="ex-h">4 · homogeneity test</div><div class="ex-b">
<p>Test v² = u² + 2as.</p>
<p>v² and u² are [L²T⁻²]. The term as is [LT⁻²][L] = [L²T⁻²]. All terms match, so the equation is dimensionally correct.</p>
</div></div>
<div class="ex"><div class="ex-h">5 · error in an area</div><div class="ex-b">
<p>A square has side 5.0 ± 0.1 cm. Find the area and its percentage error.</p>
<p>Area = 25 cm². Side error = 0.1 ÷ 5.0 × 100 = 2 %. A square is a power of 2, so the area error = 2 × 2 = 4 %.</p>
<p>4 % of 25 is 1, so the area is <span class="ans">25 ± 1 cm²</span>.</p>
</div></div>
<div class="ex"><div class="ex-h">6 · reading a caliper with no coincidence</div><div class="ex-b">
<p>The 3rd vernier mark is slightly left of a main mark and the 4th is slightly right. Take the nearer one, the 3rd, and accept 0.1 mm of doubt. Reading = 17.3 mm ± 0.1 mm.</p>
</div></div>

<h2 id="s19">19. Traps</h2>
<ol>
<li><strong>Least count is not zero error.</strong> Least count is the smallest change the scale can show. Zero error is the offset when the instrument reads zero.</li>
<li><strong>1 cm² is 10⁻⁴ m², not 10⁻² m².</strong> Square the conversion factor.</li>
<li><strong>Mass in grams, density in kg/m³.</strong> Convert to kg and m³ before you divide.</li>
<li><strong>Weight is in newtons.</strong> A mass of 2 kg weighs 19.6 N, not 2 N.</li>
<li><strong>The vernier zero is a pointer.</strong> Read the main scale from the last mark before it.</li>
<li><strong>A negative zero error is added.</strong> Keep the sign; do not force both cases into a subtraction.</li>
<li><strong>Repeating removes random error, not systematic error.</strong></li>
<li><strong>Dimensions cannot give the constant.</strong> ½, 2 and π never appear in a dimensional test.</li>
<li><strong>A dimensionally correct equation can still be wrong.</strong></li>
<li><strong>Round once, at the end.</strong></li>
</ol>

<h2 id="s20">20. Syllabus coverage</h2>
<div class="tw"><table>
<tr><th>Syllabus objective</th><th>Where it is covered</th></tr>
<tr><td>Identify units of length, area and volume</td><td>Sections 2, 3, 4</td></tr>
<tr><td>Use different measuring instruments</td><td>Sections 5, 6, 7, 9, 10</td></tr>
<tr><td>Lengths, surface areas and volume of regular and irregular bodies</td><td>Section 8</td></tr>
<tr><td>Identify the unit of mass, use beam balances</td><td>Sections 2, 9</td></tr>
<tr><td>Identify the unit of time, use time devices</td><td>Sections 2, 10</td></tr>
<tr><td>Relate fundamental quantities to their units</td><td>Section 2</td></tr>
<tr><td>Deduce units of derived quantities</td><td>Sections 3, 4</td></tr>
<tr><td>Determine dimensions of physical quantities</td><td>Section 11</td></tr>
<tr><td>Use dimensions to find units</td><td>Sections 11, 12</td></tr>
<tr><td>Test homogeneity of an equation</td><td>Section 12</td></tr>
<tr><td>Determine accuracy of instruments</td><td>Sections 5 to 7, 14</td></tr>
<tr><td>Estimate simple errors</td><td>Sections 14, 15</td></tr>
<tr><td>Significant figures</td><td>Section 16</td></tr>
<tr><td>Standard form</td><td>Section 17</td></tr>
</table></div>
<p>Density and relative density are not in this topic. The syllabus puts them under Liquids at Rest, where they belong with upthrust.</p>
`
};

window.NOTES["bio:1"] = {
  kicker: "Biology \u00b7 Topic 1",
  title: "Living Organisms, Cells and Levels of Organisation",
  sub: "MRS GREN, cell structure, plant against animal cell, the five levels",
  words: 2175,
  lede: "Biology starts with one question: what is alive, and what is it made of? This topic gives the seven signs of life, the parts of a plant and an animal cell with one job each, and the five steps from a single cell to a whole organism. The syllabus names an example at every step, and the example is the mark.",
  toc: [
    ["s0", "How to use this page"],
    ["s1", "What makes something alive"],
    ["s2", "Living and non-living"],
    ["s3", "Cells and the microscope"],
    ["s4", "The plant cell"],
    ["s5", "The animal cell"],
    ["s6", "Plant cell against animal cell"],
    ["s7", "Specialised cells"],
    ["s8", "The five levels of organisation"],
    ["s9", "Unicellular organisms"],
    ["s10", "Traps and coverage"]
  ],
  html: `<h2 id="s0">How to use this page</h2>
<p>This topic looks easy and scores badly. The syllabus asks four things: tell living from non-living, name the parts of a plant and an animal cell, say what each part does, and place the five levels of organisation in order with the right example. Every question on the paper comes from one of those four.</p>
<div class="entry"><span class="n num">01</span><div><h4>Say MRS GREN out loud</h4><p>Seven letters, seven characteristics: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition. Say the letters, then the word each letter stands for. Do it once a day for a week and you cannot lose the list.</p></div></div>
<div class="entry"><span class="n num">02</span><div><h4>Draw the cell twice</h4><p>Draw a plant cell from the page. Close the page. Draw it again from memory. Compare. The parts you forget are the parts you will be asked about.</p></div></div>
<div class="entry"><span class="n num">03</span><div><h4>One verb per organelle</h4><p>Do not learn the function as a sentence. Learn one verb: nucleus <b>controls</b>, mitochondrion <b>releases</b>, chloroplast <b>traps</b>, vacuole <b>stores</b>, wall <b>supports</b>, membrane <b>controls entry</b>. The exam answer is that verb plus one detail.</p></div></div>
<div class="entry"><span class="n num">04</span><div><h4>Walk the five levels</h4><p>Use your own body as the palace. A cell is one brick of your skin. A tissue is the sheet of bricks. An organ is your stomach. A system is your gut with its glands. The organism is you. Say the walk once, then name the syllabus example for each step.</p></div></div>
<div class="warn"><span class="wl">How the checks work</span><p>Each section ends with two questions. Answer both before you move on. Two wrong answers mean you re-read the section, not the whole page. Tick the topic on Week only when all ten sections hold.</p></div>

<h2 id="s1">What makes something alive</h2>
<p>A living thing carries out seven processes. Miss one and the definition is incomplete, because each process answers a separate need: fuel, energy, safety, size, continuity, waste and repair.</p>
<div class="tw"><table>
<tr><th>Characteristic</th><th>What it means</th><th>Example in a named organism</th></tr>
<tr><td>Movement</td><td>A change of position, or a movement inside the body</td><td>Amoeba pushes out a pseudopodium. A plant turns its leaf toward light.</td></tr>
<tr><td>Respiration</td><td>Breakdown of food to release energy, with or without oxygen</td><td>Glucose breaks down in the mitochondrion of a muscle cell.</td></tr>
<tr><td>Sensitivity</td><td>Detecting a change and responding to it. Also called irritability.</td><td>Euglena swims toward light with its eyespot.</td></tr>
<tr><td>Growth</td><td>A permanent increase in size or mass, by cell division and enlargement</td><td>A seedling adds new cells at the tip of the shoot.</td></tr>
<tr><td>Reproduction</td><td>Producing new individuals, sexually or asexually</td><td>Paramecium divides into two by binary fission.</td></tr>
<tr><td>Excretion</td><td>Removing waste made by the organism's own metabolism</td><td>A leaf loses oxygen and water; a kidney removes urea.</td></tr>
<tr><td>Nutrition</td><td>Taking in and using food for energy, growth and repair</td><td>A green plant photosynthesises. A cow eats grass.</td></tr>
</table></div>
<div class="def"><span class="dl">The one-line answer</span><p>A living thing carries out nutrition, respiration, excretion, growth, movement, reproduction and sensitivity.</p></div>
<p>Excretion is not the same as egestion. Excretion removes waste from chemical reactions inside the body, such as carbon dioxide and urea. Egestion removes undigested food that never entered the cells. A question that names faeces is testing that difference.</p>
<p>Movement is not proof of life on its own. A car moves and a river flows. Neither respires, grows by cell division, or reproduces. Always test the full set, never one sign.</p>

<h2 id="s2">Living and non-living</h2>
<p>Non-living things may show one or two signs of life. They never show all seven at once, and they never grow by adding cells.</p>
<div class="tw"><table>
<tr><th>Test</th><th>Living thing</th><th>Non-living thing</th></tr>
<tr><td>Structure</td><td>Made of cells with cytoplasm and a membrane</td><td>No cells</td></tr>
<tr><td>Growth</td><td>From inside, by cell division</td><td>From outside, by adding material, as a crystal does</td></tr>
<tr><td>Respiration</td><td>Releases energy from food</td><td>No respiration</td></tr>
<tr><td>Response</td><td>Responds as a whole to a stimulus</td><td>Reacts by a physical law only, as iron rusts</td></tr>
<tr><td>Reproduction</td><td>Produces offspring of the same kind</td><td>Cannot reproduce</td></tr>
<tr><td>Excretion</td><td>Removes its own metabolic waste</td><td>No metabolism, so no waste</td></tr>
</table></div>
<div class="warn"><span class="wl">The virus question</span><p>A virus is not placed with living things in this syllabus. It has a protein coat and a nucleic acid, and it can only reproduce inside a host cell. It does not feed, respire or excrete on its own. Say this if the paper asks: a virus is not a cell, so it is not a living organism in the five-kingdom sense.</p></div>

<h2 id="s3">Cells and the microscope</h2>
<p>The cell is the smallest unit that can carry out all seven processes. Two ideas support this: the cell theory and the instrument that made cells visible.</p>
<div class="def"><span class="dl">Cell theory, three points</span><p>All living things are made of cells. The cell is the basic unit of structure and function. New cells come from existing cells by division.</p></div>
<p>Robert Hooke saw cork cells in 1665 and gave them the name. Antonie van Leeuwenhoek saw the first living cells with a simple lens. Robert Brown found the nucleus. The names are worth one mark in some years, so keep them with the dates.</p>
<h4>Magnification and resolution</h4>
<p>Magnification makes an image larger. Resolution makes two close points look separate. A blurred image can have high magnification and poor resolution, which is why the electron microscope beat the light microscope.</p>
<div class="tw"><table>
<tr><th>Feature</th><th>Light microscope</th><th>Electron microscope</th></tr>
<tr><td>Radiation</td><td>Visible light</td><td>Electron beam</td></tr>
<tr><td>Highest useful magnification</td><td>About ×1500</td><td>About ×500 000</td></tr>
<tr><td>Resolution</td><td>About 200 nm</td><td>About 0.5 nm</td></tr>
<tr><td>Colour</td><td>Natural colour with stain</td><td>Black and white image</td></tr>
<tr><td>Living material</td><td>Can be seen alive</td><td>Must be dead and dried in a vacuum</td></tr>
</table></div>
<div class="ex"><div class="ex-h">Worked example · magnification</div><div class="ex-b">
<p>A cell appears 40 mm wide under a microscope. The real cell is 0.05 mm wide. What is the magnification?</p>
<p>Magnification = image size ÷ actual size = 40 ÷ 0.05 = <strong>×800</strong>.</p>
<p>Keep both lengths in the same unit before you divide. Mixing mm and µm is the usual lost mark.</p>
</div></div>
<div class="def"><span class="dl">Actual size, rearranged</span><p>Actual size = image size ÷ magnification. Image size = actual size × magnification.</p></div>

<h2 id="s4">The plant cell</h2>
<p>A plant cell has every part an animal cell has, plus three structures that animal cells lack: a cellulose wall, chloroplasts and a large permanent vacuole.</p>
<div class="tw"><table>
<tr><th>Part</th><th>Structure</th><th>Function, in one verb</th></tr>
<tr><td>Cell wall</td><td>Rigid layer of cellulose outside the membrane</td><td>Supports and protects the cell; keeps its shape when the vacuole is full</td></tr>
<tr><td>Cell membrane</td><td>Thin, partially permeable layer inside the wall</td><td>Controls what enters and leaves</td></tr>
<tr><td>Cytoplasm</td><td>Jelly that fills the cell</td><td>Holds the organelles and carries out reactions</td></tr>
<tr><td>Nucleus</td><td>Dense body with a membrane and chromatin</td><td>Controls the activities of the cell and holds the genes</td></tr>
<tr><td>Chloroplast</td><td>Green oval body containing chlorophyll</td><td>Traps light energy for photosynthesis</td></tr>
<tr><td>Mitochondrion</td><td>Rod-shaped body with folded inner membrane</td><td>Releases energy from glucose by respiration</td></tr>
<tr><td>Vacuole</td><td>Large sac filled with cell sap</td><td>Stores water, sugar and salts; gives turgor pressure</td></tr>
<tr><td>Ribosome</td><td>Tiny granule, free or on the endoplasmic reticulum</td><td>Builds protein</td></tr>
<tr><td>Endoplasmic reticulum</td><td>Folded membranes joined to the nuclear membrane</td><td>Transports materials through the cell</td></tr>
<tr><td>Golgi body</td><td>Stack of flattened sacs</td><td>Packages and secretes substances</td></tr>
</table></div>
<p>Turgor is the pressure of the vacuole against the wall. Full turgor keeps a leaf firm. Loss of water makes the cell flaccid, then plasmolysed, and the plant wilts. This one link explains why a plant droops without a single physics formula.</p>
<div class="warn"><span class="wl">Two traps</span><p>The cell wall is not the cell membrane, and the wall is fully permeable, not partially permeable. The nucleus is not the only part that holds DNA; mitochondria and chloroplasts carry a little of their own.</p></div>

<h2 id="s5">The animal cell</h2>
<p>The animal cell has the same working parts, without a wall, without chloroplasts, and with small, temporary vacuoles.</p>
<div class="tw"><table>
<tr><th>Part</th><th>Function</th><th>Plant cell</th><th>Animal cell</th></tr>
<tr><td>Cell wall</td><td>Support</td><td>Present, cellulose</td><td>Absent</td></tr>
<tr><td>Chloroplast</td><td>Photosynthesis</td><td>Present in green parts</td><td>Absent</td></tr>
<tr><td>Vacuole</td><td>Storage</td><td>One large, permanent</td><td>Many small, temporary</td></tr>
<tr><td>Centriole</td><td>Guides cell division</td><td>Rarely present</td><td>Present</td></tr>
<tr><td>Shape</td><td>Form</td><td>Fixed, angular</td><td>Variable, rounded</td></tr>
<tr><td>Food store</td><td>Reserve</td><td>Starch</td><td>Glycogen</td></tr>
</table></div>
<p>Both cells share the membrane, cytoplasm, nucleus, mitochondria, ribosomes, endoplasmic reticulum and Golgi body. A comparison question wants the shared parts first, then the differences, then a reason for each difference. The wall explains the fixed shape. Chloroplasts explain why an animal must eat. The large vacuole explains turgor.</p>

<h2 id="s6">Plant cell against animal cell</h2>
<p>Write the comparison in three lines, never as a scatter of facts.</p>
<div class="tw"><table>
<tr><th>Question asked</th><th>Plant cell</th><th>Animal cell</th></tr>
<tr><td>Has a wall?</td><td>Yes, cellulose</td><td>No</td></tr>
<tr><td>Makes its own food?</td><td>Yes, by chloroplasts</td><td>No, it feeds on others</td></tr>
<tr><td>Shape?</td><td>Regular and fixed</td><td>Irregular and changeable</td></tr>
<tr><td>Vacuole?</td><td>One large central sac</td><td>Small and scattered</td></tr>
<tr><td>Storage carbohydrate?</td><td>Starch</td><td>Glycogen</td></tr>
<tr><td>Nucleus position?</td><td>Pushed to the side by the vacuole</td><td>Usually central</td></tr>
</table></div>
<div class="warn"><span class="wl">The exception they test</span><p>Not every plant cell is green. Root cells have no chloroplasts. Not every animal cell lacks a vacuole; fat cells store large droplets. State the rule, then allow the exception in one clause.</p></div>

<h2 id="s7">Specialised cells</h2>
<p>A cell that does one job well loses the ability to do other jobs. Shape follows function, and the exam asks you to prove it.</p>
<div class="tw"><table>
<tr><th>Cell</th><th>Special feature</th><th>Job</th></tr>
<tr><td>Root hair cell</td><td>Long thin extension, no chloroplasts</td><td>Absorbs water and mineral salts over a large surface</td></tr>
<tr><td>Palisade cell</td><td>Many chloroplasts, near the leaf surface</td><td>Traps light for photosynthesis</td></tr>
<tr><td>Guard cell</td><td>Bean-shaped, thick inner wall</td><td>Opens and closes the stoma to control water loss</td></tr>
<tr><td>Red blood cell</td><td>No nucleus, biconcave disc</td><td>Carries oxygen on haemoglobin</td></tr>
<tr><td>Nerve cell</td><td>Long fibre with branches</td><td>Carries impulses quickly</td></tr>
<tr><td>Sperm cell</td><td>Tail and many mitochondria</td><td>Swims to the egg and supplies energy</td></tr>
<tr><td>Ciliated cell</td><td>Hair-like cilia on one surface</td><td>Moves mucus and dust out of the airway</td></tr>
<tr><td>Muscle cell</td><td>Elongated, with many mitochondria</td><td>Contracts to produce movement</td></tr>
</table></div>
<p>Read the table backwards for revision. Given the job, name the cell and the feature that makes the job possible. That is exactly how the question is written.</p>

<h2 id="s8">The five levels of organisation</h2>
<p>Cells build tissues, tissues build organs, organs build systems, and systems build the organism. The syllabus names one example at each level, and the example is the mark.</p>
<div class="tw"><table>
<tr><th>Level</th><th>Definition</th><th>Syllabus example</th></tr>
<tr><td>Cell</td><td>The smallest living unit</td><td>Euglena, Paramecium</td></tr>
<tr><td>Tissue</td><td>A group of similar cells doing one job</td><td>Epithelial tissue; Hydra</td></tr>
<tr><td>Organ</td><td>Several tissues working together</td><td>Onion bulb</td></tr>
<tr><td>System</td><td>Several organs working together</td><td>Reproductive, digestive and excretory systems</td></tr>
<tr><td>Organism</td><td>A complete living thing</td><td>Chlamydomonas</td></tr>
</table></div>
<p>Hydra is the awkward one. It has two tissue layers, an outer epidermis and an inner gastrodermis, but no organs and no system. That is why the syllabus places it at tissue level. An onion bulb is an organ because it is built from fleshy leaf scales, a stem plate and roots.</p>
<div class="def"><span class="dl">Why the order matters</span><p>Each level adds a new property that the level below cannot show. A tissue can cover a surface. Only an organ can secrete and absorb at once. Only a system can move food along a tube.</p></div>
<p>Unicellular organisms stop at the first level. Euglena, Paramecium and Chlamydomonas are single cells, yet each carries out all seven processes inside that one cell. That is why they are cells and organisms at the same time.</p>

<h2 id="s9">Unicellular organisms</h2>
<p>The paper names four: Euglena, Paramecium, Amoeba and Chlamydomonas. Learn each by movement, food and water balance.</p>
<div class="tw"><table>
<tr><th>Organism</th><th>Movement</th><th>Nutrition</th><th>Water balance</th></tr>
<tr><td>Euglena</td><td>One flagellum</td><td>Green, makes food; can also absorb it</td><td>Contractile vacuole</td></tr>
<tr><td>Paramecium</td><td>Cilia all over the body</td><td>Feeds on bacteria through an oral groove</td><td>Two contractile vacuoles</td></tr>
<tr><td>Amoeba</td><td>Pseudopodia, false feet</td><td>Engulfs food by phagocytosis</td><td>One contractile vacuole</td></tr>
<tr><td>Chlamydomonas</td><td>Two flagella</td><td>Green, cup-shaped chloroplast</td><td>Contractile vacuole</td></tr>
</table></div>
<p>Euglena is the favourite question because it breaks the rules. It has chlorophyll and an eyespot, so it photosynthesises and swims toward light, yet it has no cellulose wall and can live on dissolved food. The eyespot does not see an image; it detects the direction and strength of light.</p>
<p>The contractile vacuole fills, then empties to the outside. In fresh water, water enters the cell by osmosis, so the vacuole must work all the time. A paramecium in salt water would not need it.</p>

<h2 id="s10">Traps and coverage</h2>
<p>Most lost marks in this topic come from four small errors.</p>
<div class="entry"><span class="n num">01</span><div><h4>Seven, not six</h4><p>Nutrition, respiration, excretion, growth, movement, reproduction and sensitivity. Students drop sensitivity because it is the least visible.</p></div></div>
<div class="entry"><span class="n num">02</span><div><h4>Wall and membrane</h4><p>The wall is outside and fully permeable. The membrane is inside and partially permeable. Only the membrane controls entry.</p></div></div>
<div class="entry"><span class="n num">03</span><div><h4>Chloroplast is not chlorophyll</h4><p>The chloroplast is the structure. Chlorophyll is the green pigment inside it. A question that asks where light is trapped wants the chloroplast.</p></div></div>
<div class="entry"><span class="n num">04</span><div><h4>Levels in order</h4><p>Cell, tissue, organ, system, organism. Never start at tissue or put organism before system. Write the five on the margin before you answer.</p></div></div>
<div class="tw"><table>
<tr><th>Syllabus objective</th><th>Where it is answered</th></tr>
<tr><td>Differentiate living from non-living</td><td>s1, s2</td></tr>
<tr><td>Identify the structures of plant and animal cells</td><td>s4, s5</td></tr>
<tr><td>Analyse the functions of cell components</td><td>s4, s5</td></tr>
<tr><td>Compare and contrast plant and animal cells</td><td>s5, s6</td></tr>
<tr><td>Trace the five levels of organisation</td><td>s8</td></tr>
</table></div>
<p>Everything on this page comes from the syllabus. Nothing outside it is kept: no biochemistry of the Krebs cycle, no detailed membrane transport models, no history beyond the three names that carry marks. The next topic, Evolution Among Organisms, takes up the kingdoms.</p>
`
};

window.NOTES["eng:4"] = {
  kicker: "English \u00b7 Oral Forms",
  title: "Oral English: Sounds, Rhymes and Stress",
  sub: "Vowels, consonants, clusters, rhymes, word stress, emphatic stress",
  words: 1826,
  lede: "Section C carries ten marks and tests five fixed patterns. This page gives the sound system in the order the paper asks for it: the twenty vowels, the twenty-four consonants, clusters, rhymes and homophones, word stress and emphatic stress. Every rule ends in a pair you can hear.",
  toc: [
    ["s0", "How to use this page"],
    ["s1", "What the paper asks"],
    ["s2", "Letters and sounds"],
    ["s3", "Vowels: the twelve monophthongs"],
    ["s4", "Diphthongs and triphthongs"],
    ["s5", "Consonants"],
    ["s6", "Clusters and connected speech"],
    ["s7", "Rhymes and homophones"],
    ["s8", "Word stress"],
    ["s9", "Emphatic stress"],
    ["s10", "Traps and coverage"]
  ],
  html: `<h2 id="s0">How to use this page</h2>
<p>Oral English is the easiest ten marks on the paper. There is nothing to calculate and nothing to memorise as prose. You need the sound of a word, and the sound arrives only when you say the word out loud.</p>
<div class="entry"><span class="n num">01</span><div><h4>Say every example aloud</h4><p>Reading a vowel table in silence teaches nothing. Say the example word, hold the vowel, then say the pair. The ear learns faster than the eye for this topic.</p></div></div>
<div class="entry"><span class="n num">02</span><div><h4>Learn by pairs, not by list</h4><p>A sound is known when you can hear what it is not. Ship against sheep. Cot against caught. Think against sink. One pair is worth ten single words.</p></div></div>
<div class="entry"><span class="n num">03</span><div><h4>Tap the stress</h4><p>Say a long word and tap the table on the strong syllable. Tap on the loud beat, not the first beat. Your hand will remember the pattern.</p></div></div>
<div class="entry"><span class="n num">04</span><div><h4>Ask the contrast question</h4><p>For emphatic stress, find the word that answers the hidden question. If the question is "Did Bola buy a blue car?", the stressed word is RED. The stressed word is always the one that changes.</p></div></div>
<div class="warn"><span class="wl">How the checks work</span><p>Two questions close each section. Say the answers aloud before you click. Tick Oral Forms on Week when all ten sections hold.</p></div>

<h2 id="s1">What the paper asks</h2>
<p>Section C carries ten marks. It tests five patterns, two questions each, and the pattern never changes.</p>
<div class="tw"><table>
<tr><th>Pattern</th><th>Questions</th><th>What you must do</th></tr>
<tr><td>Vowels</td><td>2</td><td>Match a word to the vowel sound in another word</td></tr>
<tr><td>Consonants</td><td>2</td><td>Match a consonant sound, including clusters</td></tr>
<tr><td>Rhymes</td><td>2</td><td>Choose the word that rhymes, or the homophone</td></tr>
<tr><td>Word stress</td><td>2</td><td>Mark the strong syllable</td></tr>
<tr><td>Emphatic stress</td><td>2</td><td>Pick the word that carries the emphasis</td></tr>
</table></div>
<p>The question is written as a comparison. "Which word has the same vowel sound as <b>bird</b>?" You are not asked to name the symbol. You are asked to hear that two words share one sound.</p>
<div class="def"><span class="dl">The count to keep</span><p>English has 44 sounds: 20 vowels and 24 consonants. The alphabet has 26 letters. Letters and sounds are not the same thing, which is why <b>ough</b> can sound six different ways.</p></div>

<h2 id="s2">Letters and sounds</h2>
<p>A letter is written. A sound is spoken. One letter can carry several sounds, and one sound can be written by several letters.</p>
<div class="tw"><table>
<tr><th>Letter group</th><th>Sounds it can carry</th><th>Examples</th></tr>
<tr><td>a</td><td>/æ/, /eɪ/, /ɑː/, /ɔː/, /ə/</td><td>cat, late, car, talk, about</td></tr>
<tr><td>ea</td><td>/iː/, /e/, /eɪ/</td><td>seat, bread, great</td></tr>
<tr><td>ou</td><td>/aʊ/, /ʌ/, /ʊ/, /ɔː/</td><td>out, country, could, thought</td></tr>
<tr><td>ough</td><td>/ʌf/, /ɒ/, /ɔː/, /aʊ/, /uː/</td><td>rough, cough, bought, plough, through</td></tr>
<tr><td>ch</td><td>/tʃ/, /k/, /ʃ/</td><td>church, school, machine</td></tr>
</table></div>
<p>The written form cannot settle the question. Say the word. If you cannot say it, you cannot answer it, and that is the whole difficulty of this topic.</p>

<h2 id="s3">Vowels: the twelve monophthongs</h2>
<p>A monophthong is one steady vowel, with the tongue in one place. English has twelve.</p>
<div class="tw"><table>
<tr><th>Symbol</th><th>Example</th><th>Common spelling</th><th>Length</th></tr>
<tr><td>/iː/</td><td>sheep</td><td>ee, ea, ie</td><td>Long</td></tr>
<tr><td>/ɪ/</td><td>ship</td><td>i, y, ui</td><td>Short</td></tr>
<tr><td>/e/</td><td>bed</td><td>e, ea</td><td>Short</td></tr>
<tr><td>/æ/</td><td>cat</td><td>a</td><td>Short</td></tr>
<tr><td>/ɑː/</td><td>car</td><td>ar, a</td><td>Long</td></tr>
<tr><td>/ɒ/</td><td>hot</td><td>o, ou</td><td>Short</td></tr>
<tr><td>/ɔː/</td><td>door</td><td>or, aw, ough</td><td>Long</td></tr>
<tr><td>/ʊ/</td><td>book</td><td>oo, u</td><td>Short</td></tr>
<tr><td>/uː/</td><td>food</td><td>oo, ue, u</td><td>Long</td></tr>
<tr><td>/ʌ/</td><td>cup</td><td>u, o, ou</td><td>Short</td></tr>
<tr><td>/ɜː/</td><td>bird</td><td>ir, er, ur, or</td><td>Long</td></tr>
<tr><td>/ə/</td><td>about</td><td>any weak syllable</td><td>Weak</td></tr>
</table></div>
<p>Seven are short: /ɪ/, /e/, /æ/, /ɒ/, /ʊ/, /ʌ/, /ə/. Five are long: /iː/, /ɑː/, /ɔː/, /uː/, /ɜː/. The long mark is the two dots.</p>
<div class="def"><span class="dl">The pairs that win marks</span><p>ship /ɪ/ against sheep /iː/. full /ʊ/ against fool /uː/. cot /ɒ/ against caught /ɔː/. hut /ʌ/ against heart /ɑː/. Learn each pair as one item.</p></div>
<p>/ə/ is the schwa, the weakest sound in English. It appears in almost every unstressed syllable: <b>a</b>bout, teach<b>er</b>, <b>a</b>gain, mot<b>o</b>r. Naming the schwa is the fastest way to answer a stress question.</p>

<h2 id="s4">Diphthongs and triphthongs</h2>
<p>A diphthong is two vowel sounds in one syllable. The tongue starts in one place and glides to another. English has eight.</p>
<div class="tw"><table>
<tr><th>Symbol</th><th>Example</th><th>Glide</th></tr>
<tr><td>/eɪ/</td><td>day</td><td>e toward i</td></tr>
<tr><td>/aɪ/</td><td>my</td><td>a toward i</td></tr>
<tr><td>/ɔɪ/</td><td>boy</td><td>o toward i</td></tr>
<tr><td>/aʊ/</td><td>now</td><td>a toward u</td></tr>
<tr><td>/əʊ/</td><td>go</td><td>schwa toward u</td></tr>
<tr><td>/ɪə/</td><td>here</td><td>i toward schwa</td></tr>
<tr><td>/eə/</td><td>hair</td><td>e toward schwa</td></tr>
<tr><td>/ʊə/</td><td>tour</td><td>u toward schwa</td></tr>
</table></div>
<p>Group them by the second half. Three end in /ɪ/: /eɪ/, /aɪ/, /ɔɪ/. Two end in /ʊ/: /aʊ/, /əʊ/. Three end in /ə/: /ɪə/, /eə/, /ʊə/. That is one line to remember.</p>
<p>A triphthong is three vowels in one syllable, and all five end in /ə/:</p>
<div class="tw"><table>
<tr><th>Symbol</th><th>Example</th></tr>
<tr><td>/eɪə/</td><td>player</td></tr>
<tr><td>/aɪə/</td><td>fire</td></tr>
<tr><td>/ɔɪə/</td><td>loyal</td></tr>
<tr><td>/aʊə/</td><td>power</td></tr>
<tr><td>/əʊə/</td><td>lower</td></tr>
</table></div>
<div class="warn"><span class="wl">The test habit</span><p>Do not count letters. <b>Day</b> has one vowel letter and one diphthong. <b>Fire</b> has two vowel letters and one triphthong. Count the sounds you hear.</p></div>

<h2 id="s5">Consonants</h2>
<p>English has 24 consonants. They come in voiced and voiceless pairs, made in the same place with the same lips and tongue. The only difference is whether the vocal cords vibrate.</p>
<div class="tw"><table>
<tr><th>Pair</th><th>Voiceless</th><th>Voiced</th><th>Example pair</th></tr>
<tr><td>Lips</td><td>/p/</td><td>/b/</td><td>pin, bin</td></tr>
<tr><td>Lips and teeth</td><td>/f/</td><td>/v/</td><td>fan, van</td></tr>
<tr><td>Tongue and teeth</td><td>/θ/</td><td>/ð/</td><td>thin, this</td></tr>
<tr><td>Tongue and ridge</td><td>/t/</td><td>/d/</td><td>tin, din</td></tr>
<tr><td>Back of tongue</td><td>/k/</td><td>/g/</td><td>coat, goat</td></tr>
<tr><td>Teeth ridge</td><td>/s/</td><td>/z/</td><td>sip, zip</td></tr>
<tr><td>Palate</td><td>/ʃ/</td><td>/ʒ/</td><td>ship, measure</td></tr>
<tr><td>Palate, stopping</td><td>/tʃ/</td><td>/dʒ/</td><td>chin, gin</td></tr>
</table></div>
<p>The other eight have no voiceless partner: /m/, /n/, /ŋ/, /l/, /r/, /j/, /w/ and /h/. /h/ is the voiceless one of that group with no voiced partner.</p>
<div class="def"><span class="dl">Four confusions to fix</span><p>/θ/ against /t/: think is not tink. /ð/ against /d/: this is not dis. /ʃ/ against /s/: ship is not sip. /ŋ/ against /n/: sing is not sin, and it has no hard g after it.</p></div>

<h2 id="s6">Clusters and connected speech</h2>
<p>A cluster is two or more consonants together with no vowel between them. English allows long clusters at the end of a word, and that is where most marks are lost.</p>
<div class="tw"><table>
<tr><th>Position</th><th>Examples</th><th>Watch</th></tr>
<tr><td>Start, two</td><td>play, street, school, fly, tree</td><td>Do not add a vowel: not "s(i)chool"</td></tr>
<tr><td>Start, three</td><td>splash, strong, screw, shrink</td><td>All three are said, quickly</td></tr>
<tr><td>End, two</td><td>asked, helped, wants, desks</td><td>Say both, not "aske"</td></tr>
<tr><td>End, three</td><td>texts, prompts, sixths</td><td>Rare but tested</td></tr>
<tr><td>Across words</td><td>next day, best time</td><td>Clusters join, nothing is dropped</td></tr>
</table></div>
<p>Connected speech has three habits. Elision drops a sound: <b>next day</b> sounds like "nex day". Assimilation changes a sound to match its neighbour: <b>ten boys</b> sounds like "tem boys". Linking joins a final consonant to a first vowel: <b>an apple</b> sounds like "a napple".</p>
<div class="warn"><span class="wl">The plural rule</span><p>The plural is /s/ after a voiceless sound (cats), /z/ after a voiced sound (dogs), and /ɪz/ after a sibilant (buses). The exam can ask which word ends with the /z/ sound. Say the word and listen.</p></div>

<h2 id="s7">Rhymes and homophones</h2>
<p>Two words rhyme when the stressed vowel and everything after it are the same, and the sound before it differs.</p>
<div class="tw"><table>
<tr><th>Word</th><th>Rhymes with</th><th>Does not rhyme with</th></tr>
<tr><td>rain</td><td>main, plain, train</td><td>ran, rein (same sound, same spelling family but a different word)</td></tr>
<tr><td>though</td><td>low, go, show</td><td>thought, through</td></tr>
<tr><td>great</td><td>weight, eight, late</td><td>greet, grate</td></tr>
<tr><td>move</td><td>prove, groove</td><td>love, dove</td></tr>
</table></div>
<p>The trap is spelling. <b>Great</b> rhymes with <b>weight</b>, not with <b>greet</b>. <b>Love</b> rhymes with <b>dove</b>, not with <b>move</b>. Choose by sound and check the last stressed vowel.</p>
<p>A homophone sounds the same but has a different spelling and meaning.</p>
<div class="tw"><table>
<tr><th>Pair</th><th>Meanings</th></tr>
<tr><td>write, right</td><td>to put words down; correct or a direction</td></tr>
<tr><td>sea, see</td><td>the ocean; to look</td></tr>
<tr><td>pair, pear</td><td>two together; the fruit</td></tr>
<tr><td>flour, flower</td><td>ground grain; the bloom of a plant</td></tr>
<tr><td>peace, piece</td><td>calm; a part of something</td></tr>
<tr><td>knight, night</td><td>an armed rider; the dark hours</td></tr>
<tr><td>whole, hole</td><td>complete; an opening</td></tr>
<tr><td>sail, sale</td><td>to travel by wind; a sale of goods</td></tr>
</table></div>

<h2 id="s8">Word stress</h2>
<p>Stress is the strong beat in a word. A stressed syllable is louder, longer and higher than its neighbours. Only one syllable carries the main stress.</p>
<div class="tw"><table>
<tr><th>Rule</th><th>Pattern</th><th>Examples</th></tr>
<tr><td>Two-syllable nouns and adjectives</td><td>First syllable</td><td>TAble, HAPpy, DOCtor, WINdow</td></tr>
<tr><td>Two-syllable verbs</td><td>Second syllable</td><td>beGIN, forGET, aRRIVE, deCIDE</td></tr>
<tr><td>Endings -tion, -sion, -ic, -ical, -ity</td><td>Just before the ending</td><td>eduCAtion, deCIsion, elecTRIC, poLItical, elecTRICity</td></tr>
<tr><td>Endings -graphy, -logy, -nomy, -cracy</td><td>Just before the ending</td><td>phoTOgraphy, biOlogy, eCONomy, deMOCracy</td></tr>
<tr><td>Endings -eer, -ee, -ese, -ette</td><td>On the ending</td><td>engiNEER, refuGEE, ChiNESE, cigaRETTE</td></tr>
<tr><td>Compound nouns</td><td>First part</td><td>BLACKbird, TEApot, FOOTball</td></tr>
</table></div>
<p>Some words change meaning when the stress moves. A <b>REcord</b> is a noun; to <b>reCORD</b> is a verb. The same shift appears in PREsent, OBject, INcrease, PERmit, CONduct, EXport and PROtest.</p>
<div class="ex"><div class="ex-h">Worked example · count the beat</div><div class="ex-b">
<p><b>photography</b> has four syllables: pho-to-graph-y. The stress falls just before -graphy, on <b>to</b>.</p>
<p><b>photograph</b> has three syllables and stress on the first: PHO-to-graph. One suffix changes the beat.</p>
<p><b>photographic</b> moves again, to just before -ic: pho-to-GRAPH-ic.</p>
</div></div>

<h2 id="s9">Emphatic stress</h2>
<p>Emphatic stress puts the strong beat on the word that carries new or contrasted information. The other words keep their normal stress.</p>
<p>The method is fixed. Read the statement, find the hidden question, then stress the answer word.</p>
<div class="tw"><table>
<tr><th>Statement</th><th>Hidden question</th><th>Stressed word</th></tr>
<tr><td>Bola bought a <b>red</b> car yesterday.</td><td>Did Bola buy a blue car?</td><td>red</td></tr>
<tr><td>Bola <b>bought</b> a red car yesterday.</td><td>Did Bola steal the car?</td><td>bought</td></tr>
<tr><td><b>Bola</b> bought a red car yesterday.</td><td>Did Ada buy the car?</td><td>Bola</td></tr>
<tr><td>Bola bought a red car <b>yesterday</b>.</td><td>Did Bola buy it today?</td><td>yesterday</td></tr>
</table></div>
<div class="def"><span class="dl">The rule in one line</span><p>The word that answers the doubt takes the emphasis. If the sentence corrects a fact, stress the corrected word.</p></div>
<p>Two smaller points carry marks. A stressed word is longer and louder, not higher in pitch alone. And the article or preposition is never the emphatic word, unless the question is about that exact word.</p>

<h2 id="s10">Traps and coverage</h2>
<p>Five errors cause most of the lost marks in this section.</p>
<div class="entry"><span class="n num">01</span><div><h4>Spelling is not sound</h4><p>Great, weight and eight share one vowel. Greet does not. Judge by ear, never by the letters.</p></div></div>
<div class="entry"><span class="n num">02</span><div><h4>Do not add a vowel to a cluster</h4><p>School starts with /sk/, not "sik". Street starts with /str/. Adding a vowel changes the word.</p></div></div>
<div class="entry"><span class="n num">03</span><div><h4>Stress is not the first syllable</h4><p>For verbs, for -tion and for -graphy words, the first syllable is usually weak. Tap the beat before you answer.</p></div></div>
<div class="entry"><span class="n num">04</span><div><h4>Emphasis answers a question</h4><p>Do not stress the last word out of habit. Find the contrast first.</p></div></div>
<div class="entry"><span class="n num">05</span><div><h4>Rhyme ignores spelling</h4><p>Move and love look alike and do not rhyme. Prove and move do rhyme and share no spelling pattern.</p></div></div>
<div class="tw"><table>
<tr><th>Syllabus objective</th><th>Where it is answered</th></tr>
<tr><td>Distinguish vowel types</td><td>s3, s4</td></tr>
<tr><td>Distinguish consonant types</td><td>s5, s6</td></tr>
<tr><td>Identify correct pronunciation of words</td><td>s2, s3, s5, s6</td></tr>
<tr><td>Identify articulation in connected speech</td><td>s6, s9</td></tr>
<tr><td>Rhymes and homophones</td><td>s7</td></tr>
<tr><td>Word stress, monosyllabic and polysyllabic</td><td>s8</td></tr>
<tr><td>Emphatic stress in connected speech</td><td>s9</td></tr>
</table></div>
<p>Everything here comes from Section C of the syllabus. No grammar and no comprehension is kept on this page; those belong to their own topics.</p>
`
};

