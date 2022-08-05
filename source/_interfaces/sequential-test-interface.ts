export interface wwSequentialTestInterfaceBase {
    clientId: string,
    testNo: Number
};
export interface wwSequentialTestInterface extends wwSequentialTestInterfaceBase {
    id: string
}

export class wwISequentialTest implements wwSequentialTestInterface, wwSequentialTestInterfaceBase {
    clientId: string;
    testNo: Number;
    id: string;
    constructor(clientId: string, testNo: Number, id: string) {
        this.id = id;
        this.testNo = testNo;
        this.clientId = clientId;
    }    
}