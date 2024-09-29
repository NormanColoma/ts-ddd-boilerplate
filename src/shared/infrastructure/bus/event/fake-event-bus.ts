import DomainEvent from '../../../domain/domain-event';
import EventBus from '../../../domain/bus/event/event-bus';

// This is a fake implementation of an event bus real one could
// be using a message broker like RabbitMQ, Kafka, PubSub, etc.
class FakeEventBus implements EventBus {
  async publish(events: DomainEvent[]): Promise<void> {
    events.forEach((event) => {
      console.log('Event published:', event);
    });
  }
}

export default FakeEventBus;
