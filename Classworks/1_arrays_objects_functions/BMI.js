function calculateMaxMassIndex (fullName, mass, height){
  const person1 = Person('FatBoy', 110, 75);
  const person2 = Person('SlimBoy', 90, 175);
  if (person1.getBMI() === person2.getBMI()) {
    console.log('Same weight!')
  } else if (person1.getBMI() > person2.getBMI()) {
    console.log(person1)
  }
  console.log( person2)
}
function Person (fullName, mass, height){
  return {
    fullName,
    mass,
    height,
    BMI: mass / height ** 2,
    getBMI: function (){
      return this.BMI
    },
  }
}
calculateMaxMassIndex();