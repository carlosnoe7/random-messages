

const messages=[
    "Noe","Ana","Carolina","Pedro","Jessica","Juan","Laura"
];

const randomMsg=()=>{
    const message=messages[Math.floor(Math.random()* messages.length)]
    console.log(message);
}

module.exports={
    randomMsg
};