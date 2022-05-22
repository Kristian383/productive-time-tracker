/* eslint-disable prettier/prettier */
export default {
    getTimeEntries(state) {
        return state.timeEntries
    },
    getServices(state) {
        return state.services
    },
    getTodaysDate() {
        return new Date().toISOString().slice(0, 10);
    }
}