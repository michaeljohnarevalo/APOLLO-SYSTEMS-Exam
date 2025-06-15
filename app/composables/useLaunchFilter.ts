export function useLaunchFilter(launches: any[]) {
  const year = ref('')
  
  const years = computed(() => {
    return [...new Set(launches.map(l => 
      new Date(l.launch_date_local).getFullYear().toString()
    ))].sort((a, b) => b.localeCompare(a))
  })

  const filtered = computed(() => {
    if (!year.value) return launches
    return launches.filter((l) =>
      new Date(l.launch_date_local).getFullYear().toString() === year.value
    )
  })

  return { year, filtered, years }
}