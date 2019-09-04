        $(document).ready(function () {
                // console.log("working");
                        // alert("remove later");

            // var imgArray = new Array();

            // imgArray[0] = new Image();
            // imgArray[0].src = '../../images/gem1.png';

            // imgArray[1] = new Image();
            // imgArray[1].src = '../images/gem2.png';  

            // imgArray[2] = new Image();
            // imgArray[2].src = '../images/gem3.png';

            // imgArray[3] = new Image();
            // imgArray[3].src = '../images/gem4.png';

            // var imgArray = [gem1.png, gem2.png, gem3.jpg, gem4.png];

            // for (var i = 0; i < imgArray.length; i++) {
                // var gemBtn = $("<button>");
                // gemBtn.attr("class", "letter-button", "letter", "letter-button-color");
                // gemBtn.attr("data-letter", imgArray[i]);
                // gemBtn.text(imgArray[i]);
                // document.createElement("IMG");
            // }
            var currentScore = 0;
            var randomlyGeneratedNumber = getNum(19, 120);
            var wins = 0;
            var losses = 0;

            // Declare a global variable that keeps track of gem values
            var gemData = {
                red: {
                    value: 0
                },
                green: {
                    value: 0
                },
                blue: {
                    value: 0
                },
                purple: {
                    value: 0
                },
            }

                
              function getNum(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);   
           }

        // Declare variable named startGame and assigne a function
            var startGame = function() {
                // Assign new random value  to each gem color
                gemData.red.value  = getNum(1, 12);
                gemData.green.value  = getNum(1, 12);
                gemData.blue.value  = getNum(1, 12);
                gemData.purple.value  = getNum(1, 12);
                // Add target value (randomly generated #) to page
                $("#randomNum").text(randomlyGeneratedNumber);
              
            }

            var addValues = function(gemValue) {
                // Create some logic to add score
                currentScore += gemValue;
                // Create some logic to evaluate score
                    // If logic shows score is equal, they win and start game.
                    if (currentScore === randomlyGeneratedNumber) {
                        alert('Hey you won!')
                        wins++;

                        $("#wins").text(wins)

                        startGame();
                    }
                        // Record win
                    // If logic shows score is above, they lose and start game.

                        // Record loss
            }

            $("#redGem").on("click", function() {
                addValues(gemData.red.value)
                console.log("You clicked a crystal, mofo!");
              });

              $("#greenGem").on("click", function() {
                console.log("Woot!");
              });

              $("#blueGem").on("click", function() {
                console.log("Finally!");
              });

              $("#purpleGem").on("click", function() {
                console.log("Gott seid dank!");
              });

              
              
//   $("button").click(function() { //when button clicked
//  //  alert(this.id); // or alert($(this).attr('id'));
//   var num=this.id; //storing id of button clicked in number variable
//   var val=$("#"+num).val(); //storing button value into val variable 
//   console.log(val); 
//   $("#first-number").text(val);  //grabbing first div and displaying val 
//   });
              startGame();
        })
