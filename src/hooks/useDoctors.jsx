import { useFirestore, useFirestoreCollection } from 'reactfire'

export default function useDoctors(user, order) {
  const docsRef = useFirestore()
    .collection('users')
    .where('type', '==', 'Doctor')
    .orderBy(order, 'desc')

  const getAdminDocs = useFirestoreCollection(docsRef).docs.map(d => ({
    id: d.id,
    ...d.data(),
  }))
  const getDocs = useFirestoreCollection(
    docsRef.where('status', '==', 'ACTIVADO')
  ).docs.map(d => ({
    id: d.id,
    ...d.data(),
  }))

  if (user.type === 'Admin') {
    return getAdminDocs
  } else {
    return getDocs
  }
}
