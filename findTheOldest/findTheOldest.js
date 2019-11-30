let findTheOldest = function(peopleArray) {
    const oldest = peopleArray.reduce((oldestPeople, people) => {
        if(!people.yearOfDeath){
            people.yearOfDeath = new Date().getFullYear();
        }
        if(!oldestPeople.name){
            oldestPeople = people;
        }
        oldestPeopleAge = oldestPeople.yearOfDeath - oldestPeople.yearOfBirth;
        peopleAge = people.yearOfDeath - people.yearOfBirth;
        if (peopleAge > oldestPeopleAge){
            return oldestPeople = people;
        }
    
        return oldestPeople;

    },{});

    return oldest;
}

module.exports = findTheOldest
