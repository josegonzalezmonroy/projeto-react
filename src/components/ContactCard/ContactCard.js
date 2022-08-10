


export default function ContactCard() {
    
 const contact = [
        {
            "id": 1,
            "name": "user1",
            "age": 11
        },
        {
            "id": 2,
            "name": "user2",
            "age": 22
        },{
            "id": 3,
            "name": "user3",
            "age": 33
        },{
            "id": 4,
            "name": "user4",
            "age": 44
        }
    ]
    
    return (
        <div className="contact-card">
            <h2>Identificação:{contact.map(con=><p>{con.name}</p> )}</h2>
            <h3>Nome: </h3>
            <h3>Idade:</h3>
        </div>
    )
}
