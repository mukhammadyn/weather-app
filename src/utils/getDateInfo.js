import getDayName from "./getDayName"

const getDateInfo = (date) => {
  
  const newDate = date ? new Date(date) : new Date()
  const hours = newDate.getHours()
  const minutes = newDate.getMinutes()
  const day = newDate.getDate()
  const month = new Date(newDate.getFullYear(), newDate.getMonth(), day).toLocaleString('default', { month: 'long' })
  const year = newDate.getFullYear()
  const yearSlice = year.toString().substring(2,4)
  const weekName = getDayName(`${month}/${day}/${year}`)

  return {
    hours,
    minutes,
    day,
    month,
    year,
    yearSlice,
    weekName,
  }
}

export default getDateInfo
