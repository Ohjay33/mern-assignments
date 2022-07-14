import React, {useState} from "react";


const Form = ()=>{
    //create a state variable for each item in the form

    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [tagColor, setTagColor] = useState("");
    let [imgUrl, setImgUrl] = useState("");

    //adding  a property for pets related to checkbox feature
    let [hasRabiesShot, setHasRabiesShot] = useState(false);


    //array called listOfPets where we can store every pet that gets submitted
    let [listOfPets, setListOfPets] = useState([]);


    //function that runs when the form submits, to update our array called listOfPets
    const submitHandler = (e)=>{
        e.preventDefault(); //this will prevent the form submission from reloading the page
        console.log("form submitted!", name, age, tagColor, imgUrl);

        //put the pets information into an object (similar to dictionary in python)
        let petObj = {name, age, tagColor, imgUrl, hasRabiesShot};

        setListOfPets([...listOfPets,petObj]) //update the listOfPets array using its setter (setListOfPets) to be a copy of whatever is already in list of pet (...listOfPets) and add the recently submitted petObj to it (petObj)
    }


    //function to delete pet
    const deletePet = (e,idx)=>{ 
        //idx represents the index number of the pet we want to delete;
        console.log("deleting pet at this index: ", idx);

        //make a copy of our array of pets (industry best practice to not directly modify the state variable) & modify the copy (remove from the array the element at index number idx)
        let filteredCopy = listOfPets.filter((pet, i)=>{
            console.log("pet, i, and idx look like this", pet, i, idx);
            return i!=idx //return back the pets whose index number does not match the index number we want to delete
        })

        //update the state variable to be the new copy using the setter (setListOfPets)
        setListOfPets(filteredCopy);

    }



    //function to toggle rabies shot
    const toggleName = (e, idx)=>{
        // console.log("toggling the rabies. Logging e and idx ", e, idx);

        //make a copy of our state variable array containing all the pets (listOfPets)
        let copyOfPetList = [...listOfPets]
        //to the copy, modify the pet at index number idx so that pet's hasRabiesShot property toggles to true to false, or from false to true
        // console.log("copyOfPetList looks like this", copyOfPetList);

        copyOfPetList[idx].hasRabiesShot = e.target.checked;

        //update our state variable using the setter (setListOfPets)
        setListOfPets(copyOfPetList);
    }

    return(
        <>
            <h3>Fill in this form below</h3>
            <p>Show some love to our furry dojo companions.</p>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Name:</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input onChange={(e)=>setAge(e.target.value)} type="number" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Collar Tag Color</label>
                    <input onChange={(e)=>setTagColor(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input onChange={(e)=>setImgUrl(e.target.value)} type="text" className="form-control" />
                </div>
                <input type="submit" value="Add Pet" className="btn btn-success mt-3" />
            </form>
            <hr />
            <div className="pet-list">
                {
                    listOfPets.map((pet,idx)=>{
                        return(
                            <div key={idx} className="pet" style={{backgroundColor: pet.tagColor, fontFamily: pet.hasRabiesShot? "cursive": "monospace"}}>
                                <h3>{pet.name}</h3>
                                <h1>IDX is this {idx}</h1>
                                <p>Age: {pet.age}</p>
                                <p>Tag Color: {pet.tagColor}</p>
                                <label>Check to mark down Rabies Shot</label>

                                
                                <input type="checkbox" onClick={(e)=>toggleName(e,idx)}/>
                                <button onClick={(e)=>deletePet(e,idx)} className="btn btn-danger m-3">Delete Pet</button>
                                <img src={pet.imgUrl} height="200px" />
                            </div>
                        )
                    })
                }
            </div>
        </>

        
    )
}


/*
{% for pet in listOfPets %}
    <div>
        <h3>{{pet.name}}</h3>
    </div>
{% endfor %}
*/

export default Form;