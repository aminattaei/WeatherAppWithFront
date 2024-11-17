let Status= document.getElementById('status').value;
switch(Status){
    case "Cloudy":
        document.body.style.backgroundImage = "url('./images/cloudy.jpg')";
        console.log('1');
        break;
    case "Rainy":
        document.body.style.backgroundImage = "url('./images/rainy.jpg')";
        console.log('2');
        break;
        case "Snowy":
            document.body.style.backgroundImage == "url('./images/snowy.jpg')";
            break;
        default:
            document.body.style.backgroundImage == "url('./images/images/sunny.jpg')";
            break;
  


}
// if(Status == "cloudy"){
//     document.body.style.backgroundImage = "url('images/cloudy.jpg')";
//     console.log('1')
// }
//  if(Status == "rainy"){
//     document.body.style.backgroundImage = "url('images/rainy.jpg')";
//     console.log('2')
// }
//  if(Status == "snowy"){
//     document.body.style.backgroundImage = "url('images/snowy.jpg')";
//     console.log('3')
// }
// if(Status == "sunny"){
//     document.body.style.backgroundImage == "url('images/sunny.jpg')";
//    console.log('4')
// }