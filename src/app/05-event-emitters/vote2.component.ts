import { EventEmitter } from '@angular/core'; 

export class Vote2Component {
  totalVotes = 0; 
  voteChanged = new EventEmitter();

  upVote() { 
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}
