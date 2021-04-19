    var num_01, num_02, perse, output, check;

    console.log('start');

    function percentage_01() {


        // taking the values from inputs 

        num_01 = parseInt(document.getElementById('marks').value);
        num_02 = parseInt(document.getElementById('totalMarks').value);


        // code for percentage calculation 

        perse = 100 * num_01 / num_02 + '%';
        document.getElementById('result').value=perse;

        // Code for grade applying 

        check = parseInt(perse);
        
        if(check>=75) {
            output = "A Grade"
            document.getElementById('grade').value=output;
        }
        else if(check < 75 && check >= 60) {
            output = "B Grade"
            document.getElementById('grade').value=output;
        }
        else if(check < 60 && check >= 45) {
            output = "C Grade"
            document.getElementById('grade').value=output;
        }
        else if(check < 45 && check >= 35) {
            output = "D Grade"
            document.getElementById('grade').value=output;
        }
        else if(check < 35) {
            output = "Fail"
            document.getElementById('grade').value=output;
        }
        

        return false;
    }

    console.log('End');