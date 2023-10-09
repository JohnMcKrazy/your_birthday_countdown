//! SELECTORS
const inputDate = document.querySelector(".input_date");
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close_btn");
const myMonthsText = document.querySelector(".myMonth");
const myDayText = document.querySelector(".myDay");
const months = document.querySelector(".months");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const countdown = (yourDay, yourMonth) => {
    //! GENERAL CONSTANTS
    const myMonth = yourDay;
    const myDay = yourMonth;
    const fullYear = new Date().getFullYear();
    const today = new Date();
    const thisMonth = today.getMonth() + 1;
    const thisDay = today.getDate();
    const thisHours = today.getHours();
    const thisMinutes = today.getMinutes();
    let viceResponse;
    if (fullYear % 4 === 0) {
        viceResponse = true;
    } else {
        viceResponse = false;
    }
    /* console.log(viceResponse); */
    const monthDaysRelation = [
        { month: "enero", monthNumber: 1, monthDays: 31 },
        {
            month: "febrero",
            monthNumber: 2,
            monthDays: {
                normal: 28,
                viciesto: 29,
            },
        },
        { month: "marzo", monthNumber: 3, monthDays: 31 },
        { month: "abril", monthNumber: 4, monthDays: 30 },
        { month: "mayo", monthNumber: 5, monthDays: 31 },
        { month: "junio", monthNumber: 6, monthDays: 30 },
        { month: "julio", monthNumber: 7, monthDays: 31 },
        { month: "agosto", monthNumber: 8, monthDays: 31 },
        { month: "septiembre", monthNumber: 9, monthDays: 30 },
        { month: "octubre", monthNumber: 10, monthDays: 31 },
        { month: "noviembre", monthNumber: 11, monthDays: 30 },
        { month: "diciembre", monthNumber: 12, monthDays: 31 },
    ];
    //! FORMAT TIME FUNCTION
    const formatTime = (time) => {
        if (time < 10) {
            return `0${time}`;
        } else return time;
    };

    const getMonth = (status) => {
        console.log(status);
        if (myMonth === thisMonth) {
            console.log("es el mismo mes de cumpleaños");
            howMany = 11;
            return howMany;
        } else {
            switch (status) {
                case true:
                    if (thisMonth > myMonth) {
                        console.log("es mas que el mes de cumpleaños y se tiene que restar 1 por los dias");
                        howMany = 12 - (thisMonth - myMonth);
                        console.log(howMany);
                        return howMany - 1;
                    } else {
                        console.log("es menos que el mes de cumpleaños y se tiene que restar 1 por los dias");
                        howMany = myMonth - thisMonth;
                        console.log(howMany);
                        return howMany - 1;
                    }
                case false:
                    if (thisMonth > myMonth) {
                        howMany = 12 - (thisMonth - myMonth);
                        return howMany;
                    } else {
                        howMany = myMonth - thisMonth;
                        return howMany;
                    }
            }
        }
    };
    const getDays = (month, day) => {
        /* console.log(month); */
        /* console.log(day); */
        const index = month - 1;
        const setCorrectDays = (currentMonth, state) => {
            if (currentMonth === 2) {
                console.log("es febrero");
                switch (state) {
                    case true:
                        console.log("es viciesto");
                        return monthDaysRelation[index].monthDays.viciesto;

                    case false:
                        console.log("no es viciesto");
                        return monthDaysRelation[index].monthDays.normal;
                }
            } else {
                /* console.log("no es febrero"); */
                return monthDaysRelation[index].monthDays;
            }
        };
        if (month === 2 && viceResponse === true) {
            /* console.log("Visiesto - febrero"); */
            return setCorrectDays(month, true);
        } else if (month === 2 && viceResponse === false) {
            /* console.log("No viciesto - febrero"); */
            if (day < myDay) {
                return setCorrectDays(month, false);
            } else {
                return setCorrectDays(month, false);
            }
        } else {
            /* console.log("es otro mes"); */
            return setCorrectDays(month, false);
        }
    };

    let monthsRest;
    const daysRest = (day) => {
        if (day < myDay) {
            console.log("dia actual menor que dia de cumpleaños");
            monthsRest = false;
            return myDay - day - 1;
        } else if (day === myDay) {
            console.log("dia actual igual que dia de cumpleaños");
            monthsRest = true;
            return getDays(thisMonth, day) - 1;
        } else {
            console.log("dia actual mayor que dia de cumpleaños");
            monthsRest = true;
            return getDays(thisMonth, day) - myDay + day - 1;
        }
    };

    myDayText.textContent = formatTime(myDay);
    myMonthsText.textContent = formatTime(myMonth);
    day.textContent = formatTime(daysRest(thisDay));
    months.textContent = formatTime(getMonth(monthsRest));
    hour.textContent = formatTime(23 - thisHours);
    minute.textContent = formatTime(59 - thisMinutes);
};
/*  */

btn.addEventListener("click", () => {
    const currentValue = inputDate.value;
    console.log(currentValue);
    if (currentValue === "" || currentValue === null) {
        modal.showModal();
    } else {
        const birthDayArr = currentValue.split("-");
        console.log(birthDayArr);

        const yourBithdayMonth = parseInt(birthDayArr[1]);
        const yourBithdayDay = parseInt(birthDayArr[2]);
        console.log(yourBithdayDay, yourBithdayMonth);
        countdown(yourBithdayMonth, yourBithdayDay);
    }
});
closeBtn.addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
    const modalDimentions = modal.getBoundingClientRect();
    if (e.clientX < modalDimentions.left || e.clientX > modalDimentions.right || e.clientY < modalDimentions.top || e.clientY > modalDimentions.bottom) {
        modal.close();
    }
});
