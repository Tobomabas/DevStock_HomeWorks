const persons = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

//Zadanie 1:
const makeNickName = persons.map((person) => {
  if (
    typeof person.firstName === "string" &&
    person.firstName.length >= 3 &&
    typeof person.lastName === "string" &&
    person.lastName.length >= 3
  ) {
    const first = person.firstName.slice(-3).split("").reverse().join("");
    const second = person.lastName.slice(0, 3);
    const secondSwapped = second[2] + second[1] + second[0];
    const nickName = first.toLowerCase() + secondSwapped.toLowerCase();
    const convertedNickName =
      nickName.charAt(0).toUpperCase() + nickName.slice(1);
    return {
      firstName: person.firstName,
      lastName: person.lastName,
      nickName: convertedNickName,
    };
  } else return { firstname: person.firstName, lastName: person.lastName };
});
console.log("Zad1:");

console.log(makeNickName);
console.log("Zad2:");
const zad2 = makeNickName
  .filter(({ nickName }) => nickName)
  .map((person, index) => {
    const firstNameLength = person.firstName.length;
    const lastNameLength = person.lastName.length;
    const sumName = lastNameLength + firstNameLength;
    let myAge = null;
    if (sumName % 2 === 0) {
      myAge = sumName;
    } else {
      const sumOfKeys = Object.keys(person).reduce(function (acc, curr) {
        return (acc += curr.length);
      }, 0);
      myAge = Math.ceil(sumOfKeys / (index !== 0 ? index : 1));
    }
    return {
      firstName: person.firstName,
      lastName: person.lastName,
      nickName: person.nickName,
      Age: myAge,
    };
  });
console.log(zad2);

//zadanie 3:
console.log("Zad3:");
const findMostCommonLetter = zad2.map((person) => {
  const concatedPersValues =
    person.firstName.toLocaleLowerCase() +
    person.lastName.toLocaleLowerCase() +
    person.nickName.toLocaleLowerCase();
  const stringToVerify = concatedPersValues.split("");
  const letterCount = {};
  for (const letter of stringToVerify) {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  let mostFrequentLetter = null;
  let highestCount = 0;
  for (const letter in letterCount) {
    if (
      letterCount[letter] > highestCount ||
      (letterCount[letter] === highestCount && letter < mostFrequentLetter)
    ) {
      mostFrequentLetter = letter;
      highestCount = letterCount[letter];
    }
  }
  return {
    firstName: person.firstName,
    lastName: person.lastName,
    nickName: person.nickName,
    mostCommonLetter: { letter: mostFrequentLetter, count: highestCount },
  };
});
console.log(findMostCommonLetter);
