export function useLaunchSort(allLaunches:any) {
  const sortOldestFirst = ref(true)

  const sortedLaunches = computed(() => {
    const list = [...allLaunches.value]

    list.sort((a, b) => {
      const dateA = new Date(a.launch_date_local)
      const dateB = new Date(b.launch_date_local)

      if (sortOldestFirst.value) {
        return dateA.getTime() - dateB.getTime()
      } else {
        return dateB.getTime() - dateA.getTime()
      }
    })

    return list
  })

  return {
    sortOldestFirst,
    sortedLaunches
  }
}