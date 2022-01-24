import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new User()).toBeTruthy();
  });

  // Test GetUser with exist user
  it('should return a user', () => {
    expect(User.getUser(1)).toEqual({ id: 1, name: 'marion', groupId: -1 });
  });

  // Test GetUser with unexist user
  it('should return a undefined', () => {
    expect(User.getUser(9)).toBeUndefined();
  });
});
