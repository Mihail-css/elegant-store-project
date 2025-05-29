function timer() {

    //  const endDate = new Date();
    // endDate.setDate(endDate.getDate() + 3);//например три дня
    const endDate = new Date('September 1, 2025, 23:59:59');

    const daysElement = document.querySelector('#days');
    const minutesElement = document.querySelector('#minutes');
    const hoursElement = document.querySelector('#hours');
    const secondsElement = document.querySelector('#seconds');

    function updateTimer() {

        const now = new Date();
        const timeDifference = endDate - now;

        if (timeDifference <= 0) {

            daysElement.innerText = '0';
            hoursElement.innerText = '0';
            minutesElement.innerText = '0';
            secondsElement.innerText = '0';

            return;

        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysElement.innerText = days;
         hoursElement.innerText = hours < 10 ? '0' + hours : hours;//двойные цыфры
        minutesElement.innerText = minutes;
        secondsElement.innerText = seconds;

    }

    updateTimer();//Запускаем счетчик при загрузке
    setInterval(updateTimer, 1000)//Обновляем таймер каждую секунду
}

export default timer