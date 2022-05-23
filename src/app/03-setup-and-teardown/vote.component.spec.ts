import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    // set up
    component = new VoteComponent();  
  });

  afterEach(() => {
    // tear down
  });

  beforeAll(() => {});
  afterAll(() => {});

  it('should increment totalVotes when upvoted', () => {
    // Arrange
    // let component = new VoteComponent();

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });
  it('should decrement totalVotes when downvoted', () => {
    // let component = new VoteComponent();  // Separate AAA lines

    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});