const PersonService=require('../service/person');

class PersonController {
    async createPerson(req,res){
        try{
            const id=await PersonService.createPerson(res.body);
            res.status(201).json(id);
        }
        catch(err){
            console.error(err);
        }

    }

}

module.exports=new PersonController();