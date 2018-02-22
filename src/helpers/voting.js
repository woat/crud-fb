import firebase from 'firebase'

function updateDb(db, payload) {
  firebase.database().ref(`${db}`).update(payload)
}

function voteUp(vm, target, db) {
  const payload = {
    score: target.score,
    votes: target.votes || {}
  }

  // Case for if ALREADY VOTED
  if (payload.votes.hasOwnProperty(vm.user.uid)) {
    const isADownvote = payload.votes[vm.user.uid] === false

    if (isADownvote) {
      payload.score = target.score + 2
      payload.votes[vm.user.uid] = true
    } else {
      payload.score = target.score - 1
      payload.votes[vm.user.uid] = null
    }

    updateDb(db, payload)
    return
  }

  // Base case - NEW VOTE
  payload.score += 1
  payload.votes[vm.user.uid] = true
  updateDb(db, payload)
}


function voteDown(vm, target, db) {
  const payload = {
    score: target.score,
    votes: target.votes || {}
  }

  // Case for if ALREADY VOTED
  if (payload.votes.hasOwnProperty(vm.user.uid)) {
    const isAnUpvote = payload.votes[vm.user.uid] === true

    if (isAnUpvote) {
      payload.score = target.score - 2
      payload.votes[vm.user.uid] = false
    } else {
      payload.score = target.score + 1
      payload.votes[vm.user.uid] = null
    }

    updateDb(db, payload)
    return
  }

  // Base case - NEW VOTE
  payload.score -= 1
  payload.votes[vm.user.uid] = false
  updateDb(db, payload)
}



export default {
  voteUp,
  voteDown
}
