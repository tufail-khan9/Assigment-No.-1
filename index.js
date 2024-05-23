

function getData() {
    var str = document.getElementById("input1").value;
    var data = " ";
    if (str.startsWith('py')) {
        data = str + " ";
        document.getElementById("para2").innerHTML = data;
    } else {
        document.getElementById("para2").innerHTML = "py" + str;
    }
}

//Removing a Character
function setData() {
    var originalString = document.getElementById("input_here").value;
    var indexToRemove = parseInt(document.getElementById("input_data").value);

    if (isNaN(indexToRemove)) {
        document.getElementById("para3").textContent = "Please enter a valid index.";
        return;
    }

    if (indexToRemove < 0 || indexToRemove >= originalString.length) {
        document.getElementById("para3").textContent = "Index out of range.";
        return;
    }

    // Remove the character at the specified index
    var modifiedString = originalString.slice(0, indexToRemove) + originalString.slice(indexToRemove + 1);

    // Display the modified string
    document.getElementById("para3").textContent = "Modified String: " + modifiedString;
    
}


//change position of character
function changData(){
    var str1 = document.getElementById("input_position").value;
    if(str1 <= 1)
        {
            document.getElementById("para4").innerHTML = "character must be greater than 1";
        }
       
            mid_char = str1.substring(1, str1.length - 1);
          data = (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
          document.getElementById("para4").textContent = data;
        }

//adding a character to fron and back of the string
        function addData(){
            var input33 = document.getElementById("input_add").value;
            if(input33 <=1)
                {
                    document.getElementById("para5").textContent = "string must be greate than 1 ";
                }

                let text = document.getElementById("input_add").value;
                let letter = text.charAt(0);
                

                document.getElementById("para5").innerHTML = letter + text + letter;
                document.getElementById('input_add').value = "";
        }

        //check the given number is devisibale of 3 and 7
        function positiveData()
        {
            var num33 = parseInt(document.getElementById("input_positive").value);
            if(num33 > 0)
                {
                    if(num33 % 3==0 && num33 % 7==0)
                        {
                            // var num44 = parseInt(document.getElementById("input_positive")).value;
                            document.getElementById("para6").textContent = num33 + "the number is diviseble by 3 and 7" ;
                        }else{
                            document.getElementById("para6").textContent = num33 + "the number is not divisobale by 3 and 7";
                        }
                        
                }
                else{
                    document.getElementById("para6").textContent =  "the given number is not positive";
                }   
        }

        //take last three character and add them at front and back
        function pushData()
        {
            var str44 = document.getElementById("input_push").value;
            if(str44.length >= 3)
                {
                    let getString = document.getElementById("input_push").value;
                    var lastThree = getString.substr(getString.length -3);
                    document.getElementById('para7').textContent = lastThree + str44 + lastThree;

                }else{
                    document.getElementById('para7').textContent = "the string must be of 3 or greater than 3 character";
                }
        }

        //this function is convert the numbers into array simply and display
        // function maxData() {
        //     // Step 1: Get all the values from input fields named 'name[]'
        //     let inputs = parseFloat(document.getElementsByName('name[]'));
        //     let temp = '' + inputs
        //     let intArr = [...temp].reduce((acc, n) => acc.concat(+n), []);
            
        //     // numberArray.sort(function(a, b){return b - a});
        //     document.getElementById("para8").innerHTML = intArr;
            
        // }
        


        // //find largest
        function maxData() {
            let inputs = parseFloat(document.getElementsByName('input_largest').value);
            let large = 
            for()


        }