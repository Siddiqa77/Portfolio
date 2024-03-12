function calculate() {
       var a = parseInt(document.getElementById("bookOne").value);
       var b = parseInt(document.getElementById("bookTwo").value);
       var c = parseInt(document.getElementById("bookThree").value);
       var d = parseInt(document.getElementById("bookFour").value);
       var e = parseInt(document.getElementById("bookFive").value);


       //Obtained Marks

       if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
              alert("please enter correct value");

       }
       else {
              var obtain = a + b + c + d + e;
              document.getElementById("obtain").innerHTML = obtain;

              //percentage    
              var per = obtain / 500 * 100;
              document.getElementById("per").innerHTML = per;

              //Remarks

              if (per>=40) {
                     document.getElementById("remarks").innerHTML = "<span style='color:#292'>Pass</span>";
                     //alert('Wow you are pass')

              }

              else {
                     document.getElementById("remarks").innerHTML = "<span style='color:red'>Fail</span>";

                     
              }
                      //Grade
              if (per >=90 && per<=100){
                     (document).getElementById("grade").innerText="A+";
              }
              else if (per >=80 && per<90){
                     (document).getElementById("grade").innerText="A";
              }
              else if (per >=70 && per<80){
                     (document).getElementById("grade").innerText="B";
              }
              else if (per >=60 && per<70){
                     (document).getElementById("grade").innerText="C";
              }
              else if (per >=50 && per<60){
                     (document).getElementById("grade").innerText="D";
              }
              else if (per >=40 && per<50){
                     (document).getElementById("grade").innerText="E";
              }
              else if (per<40){
                     (document).getElementById("grade").innerText="F";
              }
       }
}