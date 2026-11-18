/* Notes for one topic at a time. */
window.NOTES = {};

window.NOTES["phy:1"] = {
  kicker: "Physics · Topic 1",
  title: "Measurements and Units",
  sub: "Base units, instruments, dimensions, errors, significant figures",
  words: 4200,
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
