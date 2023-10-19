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
    const myMonth = yourMonth;
    const myDay = yourDay;
    const today = new Date();
    const thisMonth = today.getMonth() + 1;
    const thisDay = today.getDate();
    const thisHours = today.getHours();
    const thisMinutes = today.getMinutes();

    //! FORMAT TIME FUNCTION
    const formatTime = (time) => {
        if (time < 10) {
            return `0${time}`;
        } else return time;
    };
    const setMonth = () => {
        if (myMonth === thisMonth) {
            console.log("es el mismo mes de cumpleaños");
            howMany = 11;
            return howMany;
        } else {
            if (thisMonth > myMonth) {
                console.log("es mes mas que el de cumpleaños y se tiene que restar 1 por los dias");
                howMany = 12 - (thisMonth - myMonth);
                console.log(howMany);
                return howMany - 1;
            } else {
                console.log("es mes menos que el de cumpleaños y se tiene que restar 1 por los dias");
                howMany = myMonth - thisMonth;
                console.log(howMany);
                return howMany - 1;
            }
        }
    };
    const setDay = () => {
        if (thisDay > myDay) {
            console.log("es dia mas que el de cumpleaños y se tiene que restar 1 por los dias");
            return thisDay - myDay - 1;
        } else {
            console.log("es dia mas que el de cumpleaños y se tiene que restar 1 por los dias");
            return myDay - thisDay - 1;
        }
    };

    myDayText.textContent = formatTime(myDay);
    myMonthsText.textContent = formatTime(myMonth);
    day.textContent = formatTime(setDay());
    months.textContent = formatTime(setMonth());
    hour.textContent = formatTime(23 - thisHours);
    minute.textContent = formatTime(59 - thisMinutes);
    console.log(yourDay, yourMonth);
    console.log(thisDay, thisMonth);
};
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
        countdown(yourBithdayDay, yourBithdayMonth);
    }
});
closeBtn.addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
    const modalDimentions = modal.getBoundingClientRect();
    if (e.clientX < modalDimentions.left || e.clientX > modalDimentions.right || e.clientY < modalDimentions.top || e.clientY > modalDimentions.bottom) {
        modal.close();
    }
});
