puts "Deleting VoterRecord registration data..."
Voter.destroy_all
Party.destroy_all
Candidate.destroy_all
User.destroy_all
# Candidate.destroy_all

puts "🌱 Seeding parties..."
#party_name
democrat = Party.create(party_name: "Democrat")
republican = Party.create(party_name: "Republican")
independent = Party.create(party_name: "Independent")
working_families = Party.create(party_name: "Working Families")
green = Party.create(party_name: "Green")

puts "🌱 Seeding candidates..."
# #firstName, lastName, party_id, voting_party, headshot, position 
chuck = Candidate.create(firstName: "Chuck", lastName: "Schumer", party_id: democrat.id, voting_party: "Democratic Party", position: "Senator", headshot: "https://media.cnn.com/api/v1/images/stellar/prod/221208093825-01-chuck-schumer-1207.jpg", raceNameYear: "Midterm Election 2022")
kathy = Candidate.create(firstName: "Kathy", lastName: "Hochul", party_id: democrat.id, voting_party: "Democratic Party", position: "Governor", headshot: "https://tbrnewsmedia.com/wp-content/uploads/2021/08/Kathy-Hochul-Headshot-scaled.jpg", raceNameYear: "Midterm Election 2022")
thomas = Candidate.create(firstName: "Thomas", lastName: "DiNapoli", party_id: democrat.id, voting_party: "Democratic Party", position: "State Comptroller", headshot: "https://www.osc.state.ny.us/files/about/image/tpd-high-res-2100x1500px.jpg", raceNameYear: "Midterm Election 2022")
paul = Candidate.create(firstName: "Paul", lastName: "Rodriguez", party_id: republican.id, voting_party: "Republican Party", position: "State Comptroller", headshot: "https://static.wixstatic.com/media/489927_86c8af5bf12f40ce89c5d54576e64ed4~mv2.jpg/v1/fill/w_628,h_622,al_t,q_85,enc_auto/489927_86c8af5bf12f40ce89c5d54576e64ed4~mv2.jpg", raceNameYear: "Midterm Election 2022")
lee = Candidate.create(firstName: "Lee", lastName: "Zeldin", party_id: republican.id, voting_party: "Republican Party", position: "Governor", headshot: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Lee_Zeldin_new_official_portrait.jpg/1200px-Lee_Zeldin_new_official_portrait.jpg", raceNameYear: "Midterm Election 2022")
letitia = Candidate.create(firstName: "Letitia", lastName: "James", party_id: democrat.id, voting_party: "Democratic Party", position: "Attorney General", headshot: "https://ag.ny.gov/sites/default/files/styles/large/public/agjames.png", raceNameYear: "Midterm Election 2022")
michael = Candidate.create(firstName: "Michael", lastName: "Henry", party_id: republican.id, voting_party:"Republican Party", position: "Attorney General", headshot: "https://s.hdnux.com/photos/01/25/32/63/22392019/4/1200x0.jpg", raceNameYear: "Midterm Election 2022")
joe = Candidate.create(firstName: "Joe", lastName: "Pinion", party_id: republican.id, voting_party: "Republican Party", position: "Senator", headshot: "https://wp.nysun.com/wp-content/uploads/2022/08/Joe.pinion.nygop_.jpg", raceNameYear: "Midterm Election 2022")
jumaane = Candidate.create(firstName: "Jumaane", lastName: "Williams", party_id: democrat.id, voting_party: "Democratic Party", position: "Governor", raceNameYear: "Primary Election 2022", headshot: "https://brownpoliticalreview.org/wp-content/uploads/2017/04/jumaane.jpg")
thomasS = Candidate.create(firstName: "Thomas", lastName: "Suozzi", party_id: democrat.id, voting_party: "Democratic Party", position: "Governor", raceNameYear: "Primary Election 2022", headshot: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Thomas_Suozzi_official_photo.jpg/1200px-Thomas_Suozzi_official_photo.jpg")
andrew = Candidate.create(firstName: "Andrew", lastName: "Giuliani", party_id: republican.id, voting_party:"Republican Party", position: "Governor", headshot: "https://d1e00ek4ebabms.cloudfront.net/production/d06d5b62-d3b7-482a-9957-ac0960bfd4a7.jpg", raceNameYear: "Primary Election 2022")
rob = Candidate.create(firstName: "Rob", lastName: "Astorino", party_id: republican.id, voting_party:"Republican Party", position: "Governor", headshot: "https://s.wsj.net/public/resources/images/BN-BU099_nyasto_ER_20140305095028.jpg", raceNameYear: "Primary Election 2022")
antonio = Candidate.create(firstName: "Antonio", lastName: "Delgado", party_id: democrat.id, voting_party: "Democratic Party", position: "Lieutenant Governor", raceNameYear: "Primary Election 2022", headshot: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Antonio_Delgado%2C_official_portrait%2C_116th_Congress.jpg/1200px-Antonio_Delgado%2C_official_portrait%2C_116th_Congress.jpg")
anamaria = Candidate.create(firstName: "Ana Maria", lastName:"Archila", party_id: democrat.id, voting_party: "Democratic Party", position: "Lieutenant Governor", raceNameYear: "Primary Election 2022", headshot: "https://www.apbspeakers.com/media/6211/archila_ana_112018.jpg")
diana = Candidate.create(firstName: "Diana", lastName: "Reyna", party_id: democrat.id, voting_party: "Democratic Party", position: "Lieutenant Governor", raceNameYear: "Primary Election 2022", headshot: "https://s3-prod.crainsnewyork.com/styles/width_765/s3/2021-10/Diana%20Reyna_0_0.jpg")
alison = Candidate.create(firstName: "Alison", lastName: "Esposito", party_id: republican.id, voting_party: "Republican Party", position: "Lieutenant Governor", raceNameYear: "Primary Election 2022", headshot: "https://www.50-a.org/images/officer/65812-alison-a-esposito.jpg")
# bernie = Candidate.create(name: "Bernie Sanders", seat: "President", votingParty: "Democrat", party_id: democrat.id, issue1: "Making healthcare accessible", issue1Description: "`It is not utopian thinking to say that every man, woman and child should have access to health care as a right.'", img: "https://i.ibb.co/3YPpW07/26xp-photog-video-Sixteen-By-Nine-Jumbo1600.jpg")

puts "🌱 Seeding Users..."
kayla = User.create(firstname: "Kayla", lastname: "Brecker", username: "kbrecker", password: "password")
milan = User.create(firstname: "Milan", lastname: "Tessler", username: "mtessler", password: "password")
joshua = User.create(firstname: "Joshua", lastname: "Cohen", username: "jcohen", password: "password")
anabelle = User.create(firstname: "Anabelle", lastname: "Sutton", username: "asutton", password: "password")
india = User.create(firstname: "India", lastname: "Allouche", username: "iallouche", password: "password")
peter = User.create(firstname: "Peter", lastname: "Aarons", username: "paarons", password: "password")
mark = User.create(firstname: "Mark", lastname: "Abrams", username: "mabrams", password: "password")


puts "🌱 Seeding Voters..."
Voter.create(first: "Kayla", last: "Brecker", address1: "193 7th Avenue", address2: "2L", postalCode: 11215, age: 27, voting_party: "Democrat", party_id: democrat.id, user_id: kayla.id, isActive: true)
Voter.create(first: "Milan", last: "Tessler", address1: "193 7th Avenue", address2: "2L",  postalCode: 11215, age: 28, voting_party: "Independent", party_id: independent.id,  user_id: milan.id, isActive: false)
Voter.create(first: "Joshua", last: "Cohen", address1: "102 Norfolk St", address2: "Apt 9",  postalCode: 10002, age: 32, voting_party: "Democrat", party_id: democrat.id, user_id: joshua.id, isActive: true)
Voter.create(first: "Anabelle", last: "Sutton", address1: "277 Cumberland St", address2: "2R",  postalCode: 11238, age: 18, voting_party: "Democrat", party_id: democrat.id, user_id: anabelle.id, isActive: true)
Voter.create(first: "India", last: "Allouche", address1: "424 East 9th Street", address2: "Apt 519",  postalCode: 10009, age: 29, voting_party: "Green", party_id: green.id, user_id: india.id, isActive: true)
Voter.create(first: "Peter", last: "Aarons", address1: "378 Flatbush Ave", address2: "9N",  postalCode: 11217, age: 21, voting_party: "Independent", party_id: independent.id, user_id: peter.id, isActive: true)
Voter.create(first: "Mark", last: "Abrams", address1: "253 West 72nd Street", address2: "1001",  postalCode: 10023 , age: 28, voting_party: "Democrat", party_id: democrat.id,  user_id: mark.id, isActive: true)
