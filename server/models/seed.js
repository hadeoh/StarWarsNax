import db from './db';

const comment1 = [
    1, 'I love coding', '10.12.0.153'
]

const comment2 = [
    2, 'I love javascript', '10.12.0.154'
]

const comment3 = [
    3, 'I love nodejs', '10.12.0.154'
]

const comment4 = [
    4, 'I love react', '10.12.0.155'
]

const comment5 = [
    5, 'I love angular', '10.12.0.156'
]

const comment6 = [
    6, 'I love vuejs', '10.12.0.157'
]

const comment7 = [
    7, 'I love nuxtjs', '10.12.0.158'
]

const comment8 = [
    3, 'I love springboot', '10.12.0.159'
]

const createComments = async () => {
  const query = `INSERT INTO comments(episodeId,body,ipAddress) 
  VALUES ($1,$2,$3) RETURNING *`;
  await db.query(query, comment1);
  await db.query(query, comment2);
  await db.query(query, comment3);
  await db.query(query, comment4);
  await db.query(query, comment5);
  await db.query(query, comment6);
  await db.query(query, comment7);
  await db.query(query, comment8)
    .then(() => {
      console.log('comments created successfully');
    })
    .catch((err) => {
      console.log('users seeding failed.', err);
    });
};

createComments();