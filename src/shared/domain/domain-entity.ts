import { v4 as uuidv4 } from 'uuid';
abstract class DomainEntity {
  private _id: string;
  private _createdAt: Date;

  protected constructor(id: string = uuidv4(), createdAt = new Date()) {
    this.id = id;
    this.createdAt = createdAt;
  }

  get id(): string {
    return this._id;
  }

  protected set id(id: string) {
    this._id = id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  protected set createdAt(date: Date) {
    this._createdAt = date;
  }

  abstract toPrimitives(): object;
}

export default DomainEntity;
