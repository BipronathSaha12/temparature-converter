// AOS initialization
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
});


//function to find the convertion 
let send = () =>{
    const numberTemp = document.getElementById("temp_input").value;
    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    let show = document.getElementById("show_temp");

    //functin to convert celcious to fahrenheit
    let celToFah = (cel) =>{
        let fahrenheitValue = ((cel*9)/5)+32;
        return fahrenheitValue;
    }

    //function to convert fahrenheit to celcious 
    let fahToCel = (fah) =>{
        let celciousValue = ((fah-32)*5)/9;
        return celciousValue;
    }

    let result;

   
    if(valueTemp == 'celcious'){
        result = celToFah(numberTemp);
        show.innerHTML =` = ${result} &#176;Fahrenheit`;
        return show;
    }
    else{
        result = fahToCel(numberTemp);
        show.innerHTML = ` = ${result} &#176;Celcious`;
        return show;
    }
}

//function to clean the previous field
let clean = () =>{
    document.getElementById("temp_input").value = "";
    document.getElementById("show_temp").innerHTML = "";
}