async function loadJsonData(){
    const response=await fetch("./photographers.json");
    const myJsonData=response.json();
    return myJsonData;
}
