import { useFirestoreCollection, useFirestore, useUser } from 'reactfire'

export default function useChildren() {
  const user = useUser()
  const parentRef = useFirestore().doc(`users/${user && user.uid}`)
  const childrenRef = useFirestore()
    .collection('children')
    .where('parent', '==', parentRef)
  const children = useFirestoreCollection(childrenRef).docs.map(d => ({
    id: d.id,
    ...d.data(),
  }))

  return children
}
