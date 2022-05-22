/* eslint-disable prettier/prettier */
export default {
    setTimeEntries(state, payload) {

        for (let i = 0; i < payload.length; i++) {
            const element = payload[i];
            const service = state.services.find(serv => {
                return serv.id == element.relationships.service.data.id
            });
            element.attributes.service_name = service.attributes.name;
            state.timeEntries.push(element)
        }
    },
    setServices(state, payload) {
        state.services = payload
    },
    deleteTimeEntry(state, id) {
        let index = state.timeEntries.findIndex(entry => entry.id === id)
        if (index != -1) {
            state.timeEntries.splice(index, 1)
        }
    },
    editTimeEntry(state, payload) {
        let index = state.timeEntries.findIndex(entry => entry.id === payload.id)
        state.timeEntries[index] = payload;
    },
    unshiftTimeEntry(state, payload) {
        state.timeEntries.unshift(payload)
    }
}