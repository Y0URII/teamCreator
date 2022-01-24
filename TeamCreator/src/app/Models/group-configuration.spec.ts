import { GroupConfiguration, LastGroupConfig } from './group-configuration';

describe('GroupConfiguration', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new GroupConfiguration(4,5,LastGroupConfig.None)).toBeTruthy();
  });


});
