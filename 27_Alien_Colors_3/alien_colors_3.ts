// Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColors :string = "green";


// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.


if(alienColors === "green"){
 console.log(" version 1 : Player earned 5 points !");
    }else if(alienColors === "yellow"){
        console.log("Player earned 10 points !");

    }else if (alienColors === "red"){
        console.log("player earned 15 points !");

    }else{
        console.log("Please select right color");
    }

    // version 2 of program
    alienColors = "yellow";

    if(alienColors === "green"){
        console.log("Player earned 5 points !");
           }else if(alienColors === "yellow"){
               console.log(" version 2 :Player earned 10 points !");
       
           }else if (alienColors === "red"){
               console.log("player earned 15 points !");
       
           }else{
               console.log("Please select right color");
           }

        //    version 3 of program
        alienColors = "red";


        if(alienColors === "green"){
            console.log("Player earned 5 points !");
               }else if(alienColors === "yellow"){
                   console.log("Player earned 10 points !");
           
               }else if (alienColors === "red"){
                   console.log( " version 3 : player earned 15 points !");
           
               }else{
                   console.log("Please select right color");
               }
           