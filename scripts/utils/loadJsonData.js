async function loadJsonData(){
    const response=await fetch("../data/photographers.json");
    const myJsonData=response.json();
    return myJsonData;
}
