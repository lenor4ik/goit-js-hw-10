import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

<script>
  flatpickr("#datetime-picker", {
    dateFormat: "d.m.Y", // Формат дати
    locale: "ru", // Якщо ви хочете використовувати російську мову, замість "ru" вкажіть код потрібної мови
  });
</script>
