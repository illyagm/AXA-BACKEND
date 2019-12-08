import * as bodyParser from 'body-parser';
import * as controllers from './controllers';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import * as mongoose from 'mongoose';

class Startup extends Server {
    
    private readonly SERVER_STARTED = 'Example server started on port: ';
    
    constructor() {
        super(true);
        mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.setupControllers();
    }

    private setupControllers(): void {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const controller = (controllers as any)[name];
                ctlrInstances.push(new controller());
            }
        }
        super.addControllers(ctlrInstances);
    }

    public start(port: number): void {
        this.app.get('*', (req, res) => {
            res.send(this.SERVER_STARTED + port);
        });
        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_STARTED + port);
        });
    }
    /* 
    const getData = async () => {
    
    Clients.countDocuments({}, async function(err, count){
        if (!err && count === 0){
            const dataClients = await getDataClients();
            Clients.insertMany(dataClients);
        }
    })
    Policies.countDocuments({}, async function(err, count){
        if (!err && count === 0){
            const dataPolicies = await getDataPolicies();
            Policies.insertMany(dataPolicies);
        }
    })
    
}
    */
}

export default Startup;