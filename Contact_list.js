var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    } ,
    steve: {
        firstName: "Steve",
        lastName: "jobs",
        number: "(1111) 555-5555",
        address: ['Apple','Computer','SF','11111']
    }  
};

var list = function (friends) {
    for (var key in friends) {
        console.log(key);
    }
};

var search = function (name) {
     for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);    
            return friends[key];
        }
    }
};
