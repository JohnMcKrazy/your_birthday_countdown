const countdown = (yourDay, yourMonth) => {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), yourMonth - 1, yourDay); // Resta 1 a yourMonth para que sea el valor correcto (enero = 0, febrero = 1, etc.)

    if (birthday < today) {
        // Si la fecha de cumpleaños ya pasó este año, establece la fecha de cumpleaños para el próximo año.
        birthday.setFullYear(today.getFullYear() + 1);
    }

    const timeDifference = birthday - today;

    // Calcula la diferencia en milisegundos, años, meses y días
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Considera el año bisiesto
    const millisecondsInMonth = millisecondsInYear / 12;

    const years = Math.floor(timeDifference / millisecondsInYear);
    const months = Math.floor((timeDifference % millisecondsInYear) / millisecondsInMonth);
    const days = Math.floor((timeDifference % millisecondsInMonth) / (1000 * 60 * 60 * 24));

    // Actualiza tus elementos HTML con los valores de years, months y days.
};

countdown(27, 8);
