const personArr = [
    {
        "id": 1,
        "name": "John",
        "age": 30
    },
    {
        "id": 2,
        "name": "Alice",
        "age": 25
    },
    {
        "id": 3,
        "name": "Bob",
        "age": 35
    },
    {
        "id": 4,
        "name": "Emma",
        "age": 28
    },
    {
        "id": 5,
        "name": "David",
        "age": 40
    },
    {
        "id": 6,
        "name": "Sophia",
        "age": 22
    },
    {
        "id": 7,
        "name": "Michael",
        "age": 33
    },
    {
        "id": 8,
        "name": "Isabella",
        "age": 27
    },
    {
        "id": 9,
        "name": "William",
        "age": 45
    },
    {
        "id": 10,
        "name": "Olivia",
        "age": 29
    },
    {
        "id": 11,
        "name": "James",
        "age": 38
    },
    {
        "id": 12,
        "name": "Charlotte",
        "age": 24
    },
    {
        "id": 13,
        "name": "Henry",
        "age": 32
    },
    {
        "id": 14,
        "name": "Amelia",
        "age": 26
    },
    {
        "id": 15,
        "name": "Daniel",
        "age": 37
    },
    {
        "id": 16,
        "name": "Mia",
        "age": 23
    },
    {
        "id": 17,
        "name": "Christopher",
        "age": 41
    },
    {
        "id": 18,
        "name": "Grace",
        "age": 31
    },
    {
        "id": 19,
        "name": "Benjamin",
        "age": 36
    },
    {
        "id": 20,
        "name": "Ava",
        "age": 21
    }
]

const getDataByID=(id)=>{
    return personArr.find((personArr)=>personArr.id==id)
}

module.exports={
    personArr,
    getDataByID
}
