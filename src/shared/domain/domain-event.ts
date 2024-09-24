import DomainEntity from './domain-entity';

class DomainEvent {
  private readonly id: string;
  private readonly occurredAt: Date;
  private readonly name: string;
  private readonly entity: DomainEntity;
  private readonly entityName: string;
  private readonly entityId: string;

  protected constructor(entity: DomainEntity, name: string) {
    this.id = entity.id;
    this.occurredAt = entity.createdAt;
    this.name = name;
    this.entity = entity;
    this.entityName = entity.constructor.name;
    this.entityId = entity.id;
  }

  public static create(entity: DomainEntity): DomainEvent {
    return new DomainEvent(entity, entity.constructor.name);
  }

  public toPrimitives(): object {
    return {
      id: this.id,
      occurredAt: this.occurredAt,
      name: this.name,
      entity: this.entity.toPrimitives(),
      entityName: this.entityName,
      entityId: this.entityId,
    };
  }
}

export default DomainEvent;
