import DomainEvent from '../../domain-event';

interface EventBus {
  publish(events: DomainEvent[]): Promise<void>;
}

export default EventBus;
