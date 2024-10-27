


function Map(){

    const planets = [
        {name:'mars', isGasPlanet:false},
        {name:'earth', isGasPlanet:false},
        {name:'Jupital', isGasPlanet:true},
        {name:'Venus', isGasPlanet:false},
        {name:'Neptune', isGasPlanet:true},
        {name:'Uranus', isGasPlanet:true},

    ];


    return(
        <div>
            {planets.map((planet,index)=>!planet.isGasPlanet && <h1 key = {index}>{planet.name}</h1>
            )}
        </div>
    )

}
export default Map