function Cal(){
    let w = document.getElementById("W").value;
    let h = document.getElementById("H").value;
    let bmi = w/(h/100)**2;

    if (bmi < 18.5 && bmi > 0) {
        document.getElementById("result").innerHTML = "น้ำหนักต่ำกว่าเกณฑ์";
        document.getElementById("SUM").innerHTML = bmi.toFixed(2);
    } 
    else if(bmi >= 18.5 && bmi < 23)
    {
        document.getElementById("result").innerHTML = "สมส่วน"; 
        document.getElementById("SUM").innerHTML = bmi.toFixed(2);
    }
    else if(bmi >= 23.0 && bmi < 25)
    {
        document.getElementById("result").innerHTML = "น้ำหนักเกิน"; 
        document.getElementById("SUM").innerHTML = bmi.toFixed(2);
    }
    else if(bmi >= 25 && bmi < 30)
    {
        document.getElementById("result").innerHTML = "โรคอ้วน"; 
        document.getElementById("SUM").innerHTML = bmi.toFixed(2);
    }
    else if(bmi > 30)
    {
        document.getElementById("result").innerHTML = "โรคอ้วนอันตราย";
        document.getElementById("SUM").innerHTML = bmi.toFixed(2); 
    }
   

}   