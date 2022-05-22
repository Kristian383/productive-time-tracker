/* eslint-disable prettier/prettier */

// hardcoded data
let organization_ID = "20530";
// let person_ID = "271393";
let person_ID = "";

export default {
    async fetchOrganisationMemberships() {
        let url = `https://api.productive.io/api/v2/organization_memberships`;

        let response;
        try {
            response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "X-Auth-Token": "2a02e54d-3877-40a9-8919-093f0186eb7e",
                    "X-Organization-Id": organization_ID
                },
            });
        } catch {
            return "There was an error!";
        }

        if (!response.ok) {
            console.log(response.status);
            return false;
        }

        const responseData = await response.json();

        const data = responseData.data;

        for (let i = 0; i < data.length; i++) {
            const el = data[i];
            if (el.relationships.organization.data.id === organization_ID) {
                //commit mutation here to set up person_ID
                person_ID = el.relationships.person.data.id;
                break;
            }

        }
        if (person_ID) return true
    },
    async fetchTimeEntries(context) {
        let todayFormated = context.rootGetters["time/getTodaysDate"];
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1)
        let tomorrowFormated = tomorrow.toISOString().slice(0, 10);

        //filtered time entries for today and for person with id = person_ID
        let url = `https://api.productive.io/api/v2/time_entries?filter[person_id]=${person_ID}&filter[after]=${todayFormated}&filter[before]=${tomorrowFormated}`;

        let response;
        try {
            response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "X-Auth-Token": "2a02e54d-3877-40a9-8919-093f0186eb7e",
                    "X-Organization-Id": organization_ID
                },
            });
        } catch {
            return "There was an error!";
        }

        if (!response.ok) {
            console.log(response.status);
            return false;
        }

        const responseData = await response.json();

        const services = responseData.included.filter(el => {
            return el.type === "services"
        })

        context.commit("setServices", services);
        context.commit("setTimeEntries", responseData.data)
        // console.log("services", responseData.data)
    },
    async deleteTimeEntry(context, id) {

        let url = `https://api.productive.io/api/v2/time_entries/${id}`;
        let response;
        try {
            response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "X-Auth-Token": "2a02e54d-3877-40a9-8919-093f0186eb7e",
                    "X-Organization-Id": organization_ID
                },
            });
        } catch {
            return "There was an error!";
        }

        if (!response.ok) {
            console.log(response.status);
            return false;
        }

        if (response.status === 204) {
            context.commit("deleteTimeEntry", id)
            return true
        }
    },
    async postTimeEntry(context, payload) {

        let url = `https://api.productive.io/api/v2/time_entries`;
        const bod = JSON.stringify({ ...payload })
        console.log(bod)
        let response;
        try {
            response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "X-Auth-Token": "2a02e54d-3877-40a9-8919-093f0186eb7e",
                    "X-Organization-Id": organization_ID
                },
                body: JSON.stringify({ ...payload })
            });
        } catch {
            return "There was an error!";
        }

        if (!response.ok) {
            console.log(response.status);
            return false;
        }

        if (response.status === 201) {

            const responseData = await response.json();
            context.commit("setTimeEntries", [responseData.data])
            console.log(responseData.data)
            return true
        }
    },
    async editTimeEntry(context, payload) {

        const { id: entryId, data: data } = payload;

        let url = `https://api.productive.io/api/v2/time_entries/${entryId}`;
        let response;
        try {
            response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "X-Auth-Token": "2a02e54d-3877-40a9-8919-093f0186eb7e",
                    "X-Organization-Id": organization_ID,
                    "Accept": "text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5"

                },
                body: JSON.stringify({
                    data: data
                })
            });
        } catch {
            return "There was an error!";
        }

        if (!response.ok) {
            console.log(response.status);
            return false;
        }
        const responseData = await response.json();

        if (response.status === 200) {
            context.commit("editTimeEntry", responseData.data)
            return true
        }
    },


};
