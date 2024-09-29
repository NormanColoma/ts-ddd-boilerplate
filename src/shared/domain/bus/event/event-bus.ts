import DomainEvent from '../../domain-event';

interface EventBus {
  publish(events: DomainEvent[]): void;
}

export default EventBus;
