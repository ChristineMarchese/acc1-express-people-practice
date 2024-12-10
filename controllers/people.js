const express = require('express');
const people = express.Router();
//const peopleArr = require("../data/people");
//const { on } = require('../app');

const { 
    getAllPeople,
    getOnePerson,
    createOnePerson,
    updatePerson,
    deletePerson
 } = require("../queries/people");

    people.get("/", async (req, res) => {
         try {
          const allPeople = await getAllPeople()
          res.status(200).json({ payload: allPeople });
          } catch(error) {
          res.status(404).json({ payload: "Server Error" });
        }
    });

    people.get("/:id", async (req, res) => {
      try {
        const id  = Number(req.params.id);
        const person = await getOnePerson(id);
        res.status(200).json({ payload: person })
      } catch (error) {
        res.status(404).json({ message: "Server Error"});
      }
});

    people.post("/", async (req, res) => {
       try {
       const body = req.body;
       const newPerson = await createOnePerson(body);
       res.status(201).json({ payload: newPerson });
       } catch (error) {
         res.status(404).json({ payload: "Unable to create new person" });
       }
  }); 

   people.put("/:id", async (req, res) => {
        try {
         const id = Number(req.params.id);
         const body  = req.body;
         const updatedPerson = await updatePerson(id, body);
         res.status(201).json({ payload: updatedPerson });
         } catch (error) {
         res.status(404).json({ payload: "Unable to update the person" });
       }
   });

   people.delete("/:id", async (req, res) => {
        try {
         const id = Number(req.params.id);
         const deletedPerson = await deletePerson(id);
         res.status(200).json({payload: deletedPerson})
        } catch (error) {
          res.status(404).json({ payload: "Cannot delete person"})
        }
   });

/*
people.get("/", (req, res) => {
    res.status(200).json(peopleArr);
 });

people.get("/:id", (req, res) => {
    try {
     const { id } = req.params; 
     const onePerson = peopleArr.find(person => person.id === Number(id));
     if(onePerson){
        res.status(200).json(onePerson);
     
     } else {
        throw "Cannot find person";
     }

    } catch(error){
        res.status(404).json({message: "error"});
   }
    
});

people.post("/", (req, res) => {
    try {
    const newPerson = req.body;
     newPerson.id = peopleArr.length + 1;
    if(newPerson){
      peopleArr.push(newPerson);
        res.status(200).json(newPerson);
    
    } else {
       throw "Unable to show person";
    }

    } catch(error) {
       res.status(404).json({ message: "error" });
  }
});

people.delete("/:id", (req, res) => {
    try {
     const{ id } = req.params;
     const index = peopleArr.findIndex(person => person.id === Number(id));
     if(index !== -1){
       peopleArr.splice(index, 1)
       res.status(200).json(peopleArr);

     } else {
         throw "Unable to delete person";
     }

    } catch(error){
       res.status(404).json({ message: "error" });

     }
});

people.put("/:id", (req, res) => {
     try {
     const { id } = req.params;
     const person = req.body;
     const index = peopleArr.find(person => person.id === Number(id));
     if(index !== -1){
        peopleArr.splice(index, 1, person);
        res.status(200).json(peopleArr);
     } else {
         throw "Cannot update person";
     }
     } catch(error){
       res.status(404).json({ message: "error" });
     }
});
*/


module.exports = people;