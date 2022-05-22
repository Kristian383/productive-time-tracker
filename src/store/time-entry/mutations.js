/* eslint-disable prettier/prettier */
export default {
    setTimeEntries(state, payload) {

        for (let i = 0; i < payload.length; i++) {
            const element = payload[i];
            // console.log(element)
            const service = state.services.find(serv => {
                return serv.id == element.relationships.service.data.id
            });
            element.attributes.service_name = service.attributes.name;
            state.timeEntries.push(element)
        }

        // console.log(state.timeEntries)
    },
    setServices(state, payload) {
        state.services = payload
        // console.log(state.services)
    },
}