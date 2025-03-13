const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const today = new Date();
        const year = today.getFullYear();

        const oldestAge = (oldest.yearOfDeath || year) - oldest.yearOfBirth;
        const currentAge = (currentPerson.yearOfDeath || year) - currentPerson.yearOfBirth;

        return (oldestAge > currentAge) ? oldest : currentPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
