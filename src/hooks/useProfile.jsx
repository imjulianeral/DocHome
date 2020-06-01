import { useFirestoreDocData, useFirestore, useUser } from 'reactfire'

export default function useProfile() {
  const user = useUser()

  const usersRef = useFirestore().doc(`users/${user && user.uid}`)
  const profile = useFirestoreDocData(usersRef)

  return profile
}
