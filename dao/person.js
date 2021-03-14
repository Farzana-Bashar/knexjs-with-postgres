const db= require('../db/db');

class PersonDAO{
    async createPerson(firstName,lastName,email){
        const[id]=await db('person').insert(
            {
                email=email,
                firstName=first_name,
                lastName=last_name

            }
        ).returning('id');

        return id;
        
        
    }
}

module.exports=new PersonDAO();