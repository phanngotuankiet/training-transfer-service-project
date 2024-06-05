export function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);

  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Tháng tính từ 0
  const day = String(date.getUTCDate()).padStart(2, '0');

  return `${hours}:${minutes}  |  ${year}-${month}-${day}`;
}
