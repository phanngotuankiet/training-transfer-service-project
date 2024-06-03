import { format, parseISO, addHours } from 'date-fns'
function ConvertVietnamTimeToUTC(dateString) {
  const localDate = new Date(dateString)
  const utcDate = addHours(localDate, -7) // Trừ đi 7 giờ để chuyển sang giờ UTC

  // Định dạng lại thời gian theo ISO 8601 nhưng chỉ giữ lại phần YYYY-MM-DDTHH:mm
  const formattedDate = format(utcDate, "yyyy-MM-dd'T'HH:mm")
  return formattedDate
}

export default ConvertVietnamTimeToUTC
