import Playlist from '../playlist';
import DomainEvent from '../../../shared/domain/domain-event';

class PlaylistCreatedEvent extends DomainEvent {
  public static eventName = 'PlaylistCreated';

  constructor(public readonly playlist: Playlist) {
    super(playlist, PlaylistCreatedEvent.eventName);
  }
}

export default PlaylistCreatedEvent;
