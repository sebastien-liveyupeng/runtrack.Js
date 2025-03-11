function fizzbuzz() {
    for (let i = 1; i <= 151; i++) { /* on va aller jusqua 151*/
      if (i % 3 == 0 && i % 5 == 0) {/* ici on prend les multiples de 3 et de 5 en condition pour afficher FizzBuzz ensuite*/
        console.log("FizzBuzz");
      } else if (i % 3 == 0) {/* pour ceux multiples de 3*/
        console.log("Fizz");
      } else if (i % 5 == 0) {/* et ce multiples de 5*/
        console.log("Buzz");
      } else {
        console.log(i);/* et affiche les autres nombres normalement*/
      }
    }
  }
  
  fizzbuzz();