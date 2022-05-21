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
    async fetchTimeEntries() {
        let today = new Date().toISOString().slice(0, 10);

        console.log(today)
        let url = `https://api.productive.io/api/v2/time_entries?filter[person_id]=${person_ID}`;

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
        console.log(responseData.data)
    },
};
