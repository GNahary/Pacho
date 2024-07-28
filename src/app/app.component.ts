import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Operation } from './Operation'; // Adjust the path as necessary


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  leftHandVar: number = 0;
  rightHandVar: number = 0;
  enteredResult: string = "";
  numOfQuestionsAsked: number = 0;
  numOfCorrectAnswers: number = 0;
  possibleScore: number = 10;
  accumulatedScore: number = 0;
  timeLeft: number = 30;
  interval: any;
  operation: Operation = Operation.UNKNOWN;

  newAdditionGame() {
    this.resetGame();
    this.operation = Operation.ADDITION;
    this.startGame();
  }

  newMultiGame() {
    this.resetGame();
    this.operation = Operation.MULTIPLICATION;
    this.startGame();
  }

  startGame() {
    this.newQuestion();
  }

  private newQuestion() {
    this.leftHandVar = this.randomIntFromInterval();
    this.rightHandVar = this.randomIntFromInterval();
    this.startTimer();
  }

  private resetGame() {
    this.numOfCorrectAnswers = 0;
    this.numOfQuestionsAsked = 0;
    this.accumulatedScore = 0;
    this.leftHandVar = 0;
    this.rightHandVar = 0;
    this.enteredResult = "";
    this.operation = Operation.UNKNOWN;
    this.resetInterval();
  }

  submitAnswer() {
    if (this.operation === Operation.UNKNOWN) {
      return;
    }

    if (this.checkResult()) {
      this.numOfCorrectAnswers++;
      this.accumulatedScore += this.possibleScore;
    }
    this.numOfQuestionsAsked++;
    this.possibleScore = 10;
    this.enteredResult = "";

    this.resetInterval();

    if (this.numOfQuestionsAsked === 5) {
      this.summarizeGame();
    } else {
      this.newQuestion();
    }
  }

  checkResult() {
    if (this.operation === Operation.ADDITION) {
      return this.leftHandVar + this.rightHandVar == parseInt(this.enteredResult);
    } else {
      return this.leftHandVar * this.rightHandVar == parseInt(this.enteredResult);
    }
  }

  summarizeGame() {
    let compliment: string = "";
    if (this.accumulatedScore === 50) { compliment = "מושלם!" }
    else if (this.accumulatedScore > 40) { compliment = "מדהים!" }
    else if (this.accumulatedScore > 30) { compliment = "נהדר!" }
    else if (this.accumulatedScore > 20) { compliment = "לא רע" }
    else if (this.accumulatedScore > 10) { compliment = "ניסיון יפה!" }
    else if (this.accumulatedScore > 5) { compliment = "צריך להתאמן עוד!" }
    else { compliment = "אוי ואבוי!" }
    alert(`ענית נכון על ${this.numOfCorrectAnswers} מתוך ${this.numOfQuestionsAsked} והשגת ציון של ${this.accumulatedScore} \n ${compliment}`);
    this.resetGame();
  }


  private randomIntFromInterval() {
    return Math.floor(Math.random() * 10) + 1;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        console.log(this.timeLeft);
        this.possibleScore = Math.floor(this.timeLeft / 3) + 1;
      } else {
        this.resetInterval();
        this.submitAnswer();
      }
    }, 1000);
  }

  private resetInterval() {
    if (this.interval) {
      clearInterval(this.interval);
      this.timeLeft = 30;
    }

  }


  enterResultDigit(digit: string) {
    this.enteredResult += digit;
  }

  deleteDigit() {
    if (this.enteredResult) {
      this.enteredResult = this.enteredResult.slice(0, -1);
    }
  }


}
