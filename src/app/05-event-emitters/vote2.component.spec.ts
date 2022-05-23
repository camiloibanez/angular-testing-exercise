import { Vote2Component } from './vote2.component'; 

describe('Vote2Component', () => {
  var component: Vote2Component; 

  beforeEach(() => {
    component = new Vote2Component();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes = 0;
    component.voteChanged.subscribe(tv => totalVotes = tv);

    component.upVote();

    expect(totalVotes).toBe(1);
  });
});
