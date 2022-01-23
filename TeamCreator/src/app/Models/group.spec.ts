import { Group } from './group';
import { LastGroupConfig } from './group-configuration';

describe('Group', () => {
  it('should create an instance', () => {
    expect(new Group(5,4)).toBeTruthy();
  });
});
