module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    return await db.creationCollection('users', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['usertype','name','email', 'password','mobile', 'username','address','created_by','status' ],
          properties: {
            name: {
              bsonType: 'string',
            },
            email: {
              bsonType: 'string',
              pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',
            },
            password: {
              bsonType: 'string',
            },
            username: {
              bsonType: 'string',
            },
            mobile: {
              bsonType: 'string',
            },
            address:{
              bsonType: 'string',
            },
            profileImg:{
              bsonType: 'string',
            },
            status:{
              type: String, 
              enum : ['PENDING', 'ACTIVE','INACTIVE','DELETED'],
              default: 'PENDING' 
            },
            createdBy:{
              bsonType: 'string',
            },
            createdDate:{
              bsonType: 'timestamp',
            },
            userType: {
              bsonType: 'string',
            },
          },
        },
      },
      validationLevel: 'strict',
      validationAction: 'error',
    })
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    return await db.collection('users').drop()

  }
};
