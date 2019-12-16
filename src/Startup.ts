import * as bodyParser from 'body-parser';
import * as controllers from './controllers';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import * as mongoose from 'mongoose';
import ClientSchema from './models/ClientSchema';
import PolicySchema from './models/PolicySchema';
import Seed from './seedMethods/Seed';
import UserSchema from './models/UserSchema';
import * as bcrypt from 'bcryptjs';

class Startup extends Server {

    private readonly SERVER_STARTED = 'Example server started on port: ';

    constructor() {
        super(true);
        mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
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
    //crear BD mongo
    public async getData() {
        const seedService = new Seed();
        ClientSchema.countDocuments({}, async function (err, count) {
            if (!err && count === 0) {
                const dataClients = await seedService.getDataClients();
                ClientSchema.insertMany(dataClients);
            } else {
                console.log('COLLECTION CLIENT ALREADY INSERTED. ' + count + ' Clients Found')
            }
        })
        PolicySchema.countDocuments({}, async function (err, count) {
            if (!err && count === 0) {
                const dataPolicies = await seedService.getDataPolicies();
                ClientSchema.insertMany(dataPolicies);
            } else {
                console.log('COLLECTION POLICY ALREADY INSERTED. ' + count + ' Policiess Found')
            }
        })
        UserSchema.countDocuments({}, async function (err, count) {
            //hardcoded users
            if (!err && count === 0) {
                const password1 = "12345fbbb";
                const password2 = "444432bb5";
                const hashedPwd1 = await bcrypt.hash(password1, 10);
                const hashedPwd2 = await bcrypt.hash(password2, 10);
                const data = await UserSchema.insertMany([{ username: "John43", password: hashedPwd1, role: "Admin" }, { username: "Becky55", password: hashedPwd2, role: "User" }])
            } else {
                console.log('COLLECTION USERS ALREADY INSERTED. ' + count + ' Users Found')
            }

        })
    }


}

export default Startup;