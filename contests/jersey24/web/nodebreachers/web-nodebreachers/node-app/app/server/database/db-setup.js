db = db.getSiblingDB("jctf4-web1") // Changeme

db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",   
            properties: {
                Email: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                Username: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                Password: {
                    bsonType: "string",
                    description: "must be a string and is required"
                }
            }
        }
    }
})

db.createCollection("files", {
    validator: {
        $jsonSchema: {
            bsonType: "object",   
            properties: {
                FileName: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                Owner: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                UploadDate: {
                    bsonType: "string",
                    description: "must be a string and is required"
                }
            }
        }
    }
})

db.users.createIndex( { "Username": 1}, { unique: true } )
db.users.createIndex( { "Email":1 }, { unique: true } )

db.createUser(
    {
      user: "REDACTED",
      pwd:  "REDACTED",   // or cleartext password
      roles: [ { role: "readWrite", db: "jctf4-web1" } ]
    }
  )

db.files.insertMany([{
    "FileName": "inmate-7250",
    "Owner": "admin",
    "UploadDate": "01/29/2079",
    "FileID": "1"
  },
  {
    "FileName": "inmate-8791",
    "Owner": "admin",
    "UploadDate": "02/15/2079",
    "FileID": "2"
  },
  {
    "FileName": "inmate-1234",
    "Owner": "admin",
    "UploadDate": "03/05/2079",
    "FileID": "3"
  },
  {
    "FileName": "inmate-5678",
    "Owner": "admin",
    "UploadDate": "04/11/2079",
    "FileID": "4"
  },
  {
    "FileName": "inmate-9876",
    "Owner": "admin",
    "UploadDate": "05/23/2079",
    "FileID": "5"
  },
  {
    "FileName": "inmate-3456",
    "Owner": "admin",
    "UploadDate": "06/08/2079",
    "FileID": "6"
  },
  {
    "FileName": "inmate-6543",
    "Owner": "admin",
    "UploadDate": "07/17/2079",
    "FileID": "7"
  },
  {
    "FileName": "inmate-2468",
    "Owner": "admin",
    "UploadDate": "08/04/2079",
    "FileID": "8"
  },
  {
    "FileName": "inmate-1357",
    "Owner": "admin",
    "UploadDate": "09/29/2079",
    "FileID": "9"
  }]
  )
