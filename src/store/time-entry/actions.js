/* eslint-disable prettier/prettier */

// hardcoded data
let organization_ID = "20530";
// let person_ID = "271393";
let person_ID = "";

export default {
    async fetchOrganisationMemberships() {
        let url = `https://api.productive.io/api/v2/organization_memberships`;

        // hardcoded data
        // let organization_ID = "20530";
        // let person_ID = "271393";

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
        console.log(person_ID)
    },
    async fetchTimeEntries(context) {
        let today = new Date()
        let todayFormated = today.toISOString().slice(0, 10);
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1)
        let tomorrowFormated = tomorrow.toISOString().slice(0, 10);

        // console.log("tomorrowFormated", tomorrowFormated)
        // console.log("todayFormated", todayFormated)

        //filtered time entries for today and for person with id = person_ID
        let url = `https://api.productive.io/api/v2/time_entries?filter[person_id]=${person_ID}&filter[after]=${todayFormated}&filter[before]=${tomorrowFormated}`;
        // url = `https://api.productive.io/api/v2/time_entries?filter[person_id]=${person_ID}`;

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
        // console.log(responseData.data)


        const services = responseData.included.filter(el => {
            return el.type === "services"
        })

        context.commit("setServices", services);
        context.commit("setTimeEntries", responseData.data)

        // console.log("services", services)

    },
    async postTimeEntries() {

        let url = `https://api.productive.io/api/v2/time_entries`;

        let response;
        try {
            response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "X-Auth-Token": "2a02e54d-3877-40a9-8919-093f0186eb7e",
                    "X-Organization-Id": organization_ID
                },
                body: {

                }
            });
        } catch {
            return "There was an error!";
        }

        if (!response.ok) {
            console.log(response.status);
            return false;
        }

        const responseData = await response.json();


        console.log(responseData.data)
    },
};
