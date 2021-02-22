import {useQuery, useMutation, queryCache} from 'react-query'
import {client} from 'utils/api-client'

function useListItem(user, bookId) {
  const {data: listItems} = useQuery({
    queryKey: 'list-items',
    queryFn: () =>
      client(`list-items`, {token: user.token}).then(data => data.listItems),
  })
  const listItem = listItems?.find(li => li.bookId === bookId) ?? null
  return listItem
}

function useListItems(user) {
  const {data: listItems} = useQuery({
    queryKey: 'list-items',
    queryFn: () =>
      client(`list-items`, {token: user.token}).then(data => data.listItems),
  })
  return listItems
}

function useUpdateListItem(user) {
  return useMutation(
    updates =>
      client(`list-items/${updates.id}`, {
        method: 'PUT',
        data: updates,
        token: user.token,
      }),
    {onSettled: () => queryCache.invalidateQueries('list-items')},
  )
}

function useRemoveListItem(user) {}

function useCreateListItem(user) {}

export {
  useListItem,
  useListItems,
  useUpdateListItem,
  useRemoveListItem,
  useCreateListItem,
}
