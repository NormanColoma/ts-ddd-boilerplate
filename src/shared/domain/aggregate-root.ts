import DomainEntity from './domain-entity';
import DomainEvent from './domain-event';

class AggregateRoot extends DomainEntity {
  private _events: DomainEvent[];
  protected constructor() {
    super();
    this._events = [];
  }

  public pullEvents(): DomainEvent[] {
    const events = this._events;
    this._events = [];
    return events;
  }

  public addEvent(event: DomainEvent): void {
    this._events.push(event);
  }

  toPrimitives(): object {
    return {
      id: this.id,
      createdAt: this.createdAt,
    };
  }
}

export default AggregateRoot;
