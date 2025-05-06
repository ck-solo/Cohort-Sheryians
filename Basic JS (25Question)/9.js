// Q9. Traffic Light System – Ask the user for a traffic light color (red,
//     yellow, green). Print appropriate messages:
    
//     Red: "Stop!"
    
//     Yellow: "Get Ready!"
    
//     Green: "Go!"
    
//     Answer 9
    let traffic = prompt("Which traffic light  you seeing").toLowerCase(); 
    
    function Light(traffic ) {
      switch (traffic) {
        case "red":
          return  "Stop!";
        case "yellow":
          return  "Get Ready!";
        case "green":
          return "Go!";
        default:
          return "Invalid Input";
      }
    }
    
    let result = Light(traffic);
    console.log(`result: ${result}`);
    alert(`result: ${result}`);