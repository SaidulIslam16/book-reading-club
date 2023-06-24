const addToDb = (min) => {
    localStorage.setItem('breakTime', min)
}

const getBreakTime = () => {
    const storedBreakTime = localStorage.getItem('breakTime');

    return storedBreakTime;
}

export { addToDb, getBreakTime };