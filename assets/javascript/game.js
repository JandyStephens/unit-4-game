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

            $("#redGem").on("click", function() {
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

            //   function getNum() {
            //       return 
                  var randoNum = Math.floor(Math.random()*100)+20;
                  $("#randomNum").text(randoNum);
              
              
//   $("button").click(function() { //when button clicked
//  //  alert(this.id); // or alert($(this).attr('id'));
//   var num=this.id; //storing id of button clicked in number variable
//   var val=$("#"+num).val(); //storing button value into val variable 
//   console.log(val); 
//   $("#first-number").text(val);  //grabbing first div and displaying val 
//   });

        })
