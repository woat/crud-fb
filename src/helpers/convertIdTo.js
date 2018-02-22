import firebase from 'firebase'

async function username(id) {
  let user = ''

  await firebase
    .database()
    .ref(`users/${id}`)
    .once('value', (snap) => {
      user = snap.val().username
    })

  return user
}

export default {
  username
}
