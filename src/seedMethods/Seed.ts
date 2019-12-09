import axios from 'axios';

export default class Seed {

    public async getDataClients (){
        try {
            const clients = await axios.get('http://www.mocky.io/v2/5808862710000087232b75ac');
            return clients.data.clients;
        } catch (error) {
            console.log(error)
        }
    }
    public async getDataPolicies(){
        try {
            const policies = await axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5');
            return policies.data.policies;
        } catch (error) {
            console.log(error)
        }
    }
}
    

