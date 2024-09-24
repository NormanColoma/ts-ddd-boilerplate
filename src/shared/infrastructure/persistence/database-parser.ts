import DomainEntity from '../../domain/domain-entity';

interface DatabaseParser {
  to_database_object(data: DomainEntity): object;
  to_domain_object(data: object): DomainEntity;
}

export default DatabaseParser;
