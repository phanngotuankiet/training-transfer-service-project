import { parseISO, addMinutes, isAfter } from 'date-fns';

// Hàm so sánh nếu timeTwo lớn hơn hoặc bằng timeOne cộng thêm 15 phút
export const isGreaterThanOrEquals15Minutes = (timeOne, timeTwo) => {
  // Chuyển đổi chuỗi ISO sang đối tượng Date
  const dateOfTimeOne = parseISO(timeOne);
  const dateOfTimeTwo = parseISO(timeTwo);

  // Thêm 15 phút vào thời gian thứ nhất
  const dateOfTimeOnePlus15Minutes = addMinutes(dateOfTimeOne, 15);

  // Kiểm tra xem thời gian thứ hai có lớn hơn hoặc bằng thời gian thứ nhất cộng thêm 15 phút
  const isGreaterThanOrEqual15Minutes = isAfter(dateOfTimeTwo, dateOfTimeOnePlus15Minutes) || dateOfTimeTwo.getTime() === dateOfTimeOnePlus15Minutes.getTime();

  return isGreaterThanOrEqual15Minutes;
}

