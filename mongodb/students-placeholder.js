student = {
    "firstName": "Retha",
    "lastName": "Killeen",
    "email": "rkilleen0@mysql.com",
    "gender": "F",
    "country": "Philippines",
    "isStudentActive": false,
    "favouriteSubjects": [
        "maths",
        "english",
        "it"
    ],
    "totalSpentInBooks": 0.00
}

/*
> db.student.insert(student)
> db.student.find().pretty()
{
    "_id" : ObjectId("62b4ed0f7e2d01434ecd5341"),
    "firstName" : "Retha",
    "lastName" : "Killeen",
    "email" : "rkilleen0@mysql.com",
    "gender" : "F",
    "country" : "Philippines",
    "isStudentActive" : false,
    "favouriteSubjects" : [
        "maths",
        "english",
        "it"
    ],
    "totalSpentInBooks" : 0
}
*/

students = [
    {
        "firstName": "Retha",
        "lastName": "Killeen",
        "email": "rkilleen0@mysql.com",
        "gender": "F",
        "country": "Philippines",
        "isStudentActive": false,
        "favouriteSubjects": [
            "maths",
            "english",
            "it"
        ],
        "totalSpentInBooks": 100.00
    },
    {
        "firstName": "Coraline",
        "lastName": "Langham",
        "email": "clangham1@globo.com",
        "gender": "F",
        "country": "Philippines",
        "isStudentActive": true,
        "favouriteSubjects": [],
        "totalSpentInBooks": 5.00
    },
    {
        "firstName": "Ario",
        "lastName": "Frye",
        "email": "afrye2@blogs.com",
        "gender": "M",
        "country": "Argentina",
        "isStudentActive": true,
        "favouriteSubjects": [
            "science",
            "history"
        ],
        "totalSpentInBooks": 0.00
    },
    {
        "firstName": "Sandye",
        "lastName": "Iddens",
        "email": "siddens3@spiegel.de",
        "gender": "F",
        "country": "France",
        "isStudentActive": true,
        "favouriteSubjects": [
            "it"
        ],
        "totalSpentInBooks": 0.00
    },
    {
        "firstName": "Lynn",
        "lastName": "Antonsson",
        "email": "lantonsson4@yelp.com",
        "gender": "F",
        "country": "Indonesia",
        "isStudentActive": true,
        "favouriteSubjects": [
            "computer science",
            "it",
            "maths"
        ],
        "totalSpentInBooks": 0.00
    },
    {
        "firstName": "Fabe",
        "lastName": "Chartman",
        "email": "fchartman5@reuters.com",
        "gender": "M",
        "country": "Angola",
        "isStudentActive": false,
        "favouriteSubjects": [
            "history"
        ],
        "totalSpentInBooks": 66.00
    },
    {
        "firstName": "Nealon",
        "lastName": "Tabord",
        "email": "ntabord6@devhub.com",
        "gender": "M",
        "country": "Greece",
        "isStudentActive": false,
        "favouriteSubjects": [
            "maths"
        ],
        "totalSpentInBooks": 0.00
    },
    {
        "firstName": "Jule",
        "lastName": "Brough",
        "email": "jbrough7@wix.com",
        "gender": "M",
        "country": "Russia",
        "isStudentActive": true,
        "favouriteSubjects": [
            "english",
            "science"
        ],
        "totalSpentInBooks": 100.00
    },
    {
        "firstName": "Mufinella",
        "lastName": "Sansun",
        "email": "msansun8@google.com",
        "gender": "F",
        "country": "China",
        "isStudentActive": false,
        "favouriteSubjects": [
            "science"
        ],
        "totalSpentInBooks": 0.00
    },
    {
        "firstName": "Cally",
        "lastName": "Walkden",
        "email": "cwalkden9@craigslist.org",
        "gender": "F",
        "country": "Niger",
        "isStudentActive": true,
        "favouriteSubjects": [
            "it"
        ],
        "totalSpentInBooks": 165.00
    }
]

/* 51
> db.student.insertMany(students)
{
    "acknowledged" : true,
    "insertedIds" : [
        ObjectId("62b4f1697e2d01434ecd5342"),
        ObjectId("62b4f1697e2d01434ecd5343"),
        ObjectId("62b4f1697e2d01434ecd5344"),
        ObjectId("62b4f1697e2d01434ecd5345"),
        ObjectId("62b4f1697e2d01434ecd5346"),
        ObjectId("62b4f1697e2d01434ecd5347"),
        ObjectId("62b4f1697e2d01434ecd5348"),
        ObjectId("62b4f1697e2d01434ecd5349"),
        ObjectId("62b4f1697e2d01434ecd534a"),
        ObjectId("62b4f1697e2d01434ecd534b")
    ]
}
> db.student.count()
11

# Using find:
    > db.student.find({firstName: 'Cally'}).pretty()
    {
            "_id" : ObjectId("62b4f1697e2d01434ecd534b"),
            "firstName" : "Cally",
            "lastName" : "Walkden",
            "email" : "cwalkden9@craigslist.org",
            "gender" : "F",
            "country" : "Niger",
            "isStudentActive" : true,
            "favouriteSubjects" : [
                    "it"
            ],
            "totalSpentInBooks" : 165
    }

    > db.student.find({firstName: 'Cally'}, {firstName: 1}).pretty()
    { "_id" : ObjectId("62b4f1697e2d01434ecd534b"), "firstName" : "Cally" }

    > db.student.find({firstName: 'Cally'}, {firstName: 1, lastName: 1}).pretty()
    {
            "_id" : ObjectId("62b4f1697e2d01434ecd534b"),
            "firstName" : "Cally",
            "lastName" : "Walkden"
    }

    > db.student.find({firstName: 'Cally'}, {firstName: 0, lastName: 0}).pretty()
    {
            "_id" : ObjectId("62b4f1697e2d01434ecd534b"),
            "email" : "cwalkden9@craigslist.org",
            "gender" : "F",
            "country" : "Niger",
            "isStudentActive" : true,
            "favouriteSubjects" : [
                    "it"
            ],
            "totalSpentInBooks" : 165
    }

# Update:
    > db.student.update({_id: ObjectId("62b4f1697e2d01434ecd534b")}, {$set: {firstName: 'Cally 2'}})
    WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
    > db.student.find({firstName: 'Cally 2'}).pretty()
    {
            "_id" : ObjectId("62b4f1697e2d01434ecd534b"),
            "firstName" : "Cally 2",
            "lastName" : "Walkden",
            "email" : "cwalkden9@craigslist.org",
            "gender" : "F",
            "country" : "Niger",
            "isStudentActive" : true,
            "favouriteSubjects" : [
                    "it"
            ],
            "totalSpentInBooks" : 165
    }

# Delete:
    > db.student.deleteOne({_id: ObjectId("62b4f1697e2d01434ecd534b")})
    { "acknowledged" : true, "deletedCount" : 1 }
    > db.student.count()
    10

*/

