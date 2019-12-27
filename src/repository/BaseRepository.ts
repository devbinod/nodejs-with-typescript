import {IRead, IWrite} from '../repository/interfaces/ICommon'

export abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
    
    
    findById(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }    findAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    save(t: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(t: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }


}