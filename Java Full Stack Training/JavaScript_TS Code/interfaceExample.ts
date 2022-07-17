interface Animal_Sound{
    sound:string;

    makeSound: () =>string;
}

var Dog:Animal_Sound ={
    sound: "Bark",
    makeSound: ():string => "sound is: " + this.sound
}

console.log(Dog.makeSound());