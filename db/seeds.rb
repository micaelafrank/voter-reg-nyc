puts "Deleting VoterRecord registration data..."
Voter.destroy_all
Party.destroy_all
# Candidate.destroy_all

puts "🌱 Seeding parties..."
#party_name
democrat = Party.create(party_name: "Democrat")
republican = Party.create(party_name: "Republican")
independent = Party.create(party_name: "Independent")
working_families = Party.create(party_name: "Working Families")
green = Party.create(party_name: "Green")

# puts "🌱 Seeding candidates..."
# #name, seat, party_id, party, issue1, issue1description
# ted = Candidate.create(name: "Ted Cruz", seat: "President", votingParty: "Republican", party_id: republican.id, issue1: "Banning Critical Race Theory", issue1Description: "Cruz produced a free e-book that promises to teach conservatives how to spot and fight it in classrooms and communities. 'Critical Race Theory: A Lecture by Senator Ted Cruz' is a free, 10-page book published in collaboration with the conservative nonprofit Leadership Institute.", img: "https://i.ibb.co/1qfTBBm/0x0.jpg")
# mitch = Candidate.create(name: "Mitch McConnell", seat: "President", votingParty: "Republican", party_id: republican.id, issue1: "Protecting the 2nd amendment at all costs", issue1Description: "McConnell ranks in at #14 in total donations received from NRA over political career. A whopping $1,283,515!", img: "https://i.ibb.co/PD1ZpDC/mcconnell-wide-bd00e7fd30c4f0e3bfc4492ac96323497e6c9ef0-s1600-c85.webp")
# ron = Candidate.create(name: "Ron De Santis", seat: "President", votingParty: "Republican", party_id: republican.id, issue1: "Forced birth and banning abortions", issue1Description: "Gov. Ron DeSantis has signed a bill that bans most abortions after 15 weeks, which does not make exceptions for cases of incest, rape or human trafficking.", img: "https://i.ibb.co/qJwbTHb/t-bc57df79c12b453e90339998e83a5e71-name-image.jpg")
# julia = Candidate.create(name: "Selina Meyer", seat: "President", votingParty: "Democrat", party_id: democrat.id, issue1: "A more just immigration policy", issue1Description: "The three Rs: reaffirm, reform, renew", img: "https://i.ibb.co/mGrMV3T/thumb-1920-809744.jpg")
# major = Candidate.create(name: "Major Biden", seat: "First Dog Elect", votingParty: "Democrat", party_id: democrat.id, issue1: "Adoption!", issue1Description: "I am a very good boy, and the first shelter dog to take up residence in the White House.", img: "https://i.ibb.co/j5nf1z2/Major-Biden.webp")
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
