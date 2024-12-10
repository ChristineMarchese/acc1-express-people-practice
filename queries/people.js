const db = require("../db/dbConfig");

const getAllPeople = async () => {
    try {
      const allPeople = await db.any("SELECT * FROM people")
      return allPeople;
    } catch(error){
      return error;
    }
};

const getOnePerson = async (id) => {
     try {
       const onePerson = await db.one("SELECT * FROM people WHERE id=$1", id);
       return onePerson;
     } catch(error) {
        return error;
     }
};

const createOnePerson = async (person) => {
      try {
        const newPerson = await db.one("INSERT INTO people (name, age, gender, city, is_active) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
        [
         person.name, 
         person.age, 
         person.gender, 
         person.city, 
         person.is_active,
        ]
        );
        return newPerson;
      } catch (error) {
        return error;
      }
};

const updatePerson = async (id, person) => {
     try {
      const updatedPerson = await db.one("UPDATE people SET name=$1, age=$2, gender=$3, city=$4, is_active=$5 WHERE id=$6 RETURNING *", 
        [
        person.name,
        person.age, 
        person.gender, 
        person.city, 
        person.is_active,
        id,
       ]
       );
      return updatedPerson;
     } catch (error) {
       return error;
     }
};

const deletePerson = async (id) => {
   try {
     const deletedPerson = await db.one("DELETE FROM people WHERE id=$1 RETURNING *", id)
     return deletedPerson
   } catch (error) {
     return error
  }
}



module.exports = { 
  getAllPeople, 
  getOnePerson,
  createOnePerson,
  updatePerson,
  deletePerson
  };