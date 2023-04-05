let token ='48400953024c1ba642f6b411aa98ba6bcd0ea0ece192dc55'

// if you want to use brandon's site... remove token, use https://plankton-app-46k8b.ondigitalocean.app/api/contacts

export const server_calls = {
    get:async () => {
        const response = await fetch('https://api.lyrics.ovh/v1/artist/title',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('No lyrics Found')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch('https://gabby-cooked-flute.glitch.me/api/contacts',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,   
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://gabby-cooked-flute.glitch.me/api/contacts/${id}`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://gabby-cooked-flute.glitch.me/api/contacts/${id}`,
        {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete data on the server')
        }

        return;
    }
}