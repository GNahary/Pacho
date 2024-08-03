import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-game-summary',
  standalone: true,
  imports: [],
  templateUrl: './game-summary.component.html',
  styleUrl: './game-summary.component.css'
})
export class GameSummaryComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  @Input() score: number = 0;
  @Input() numOfCorrectAnswers: number = 0;
  @Input() numOfQuestionsAsked: number = 0;
  imageSrc: string = "";
  message: string = "";
  compliment: string = "";
  resultScored: Score = Score.AMAZING;


  perfectScoreImgSrc: string = "https://cdn1.iconfinder.com/data/icons/sport-fitness-vol-2/512/z5-champion-award-cup-winner-1024.png";
  amazingScoreImgSrc: string = "http://icons.iconarchive.com/icons/google/noto-emoji-activities/1024/52726-sports-medal-icon.png";
  greatScoreImgSrc: string = "https://cdn3.iconfinder.com/data/icons/design-and-development-1-6/136/8-512.png";
  goodScoreImgSrc: string = "https://cdn.shopify.com/s/files/1/1061/1924/products/Clapping_Hands_Emoji_ios10_d7ab242e-7230-47bf-b1e2-d46a4bc51b5b_grande.png";
  niceTryScoreImgSrc: string = "https://cdn-icons-png.flaticon.com/512/6009/6009582.png";
  practiceMoreScoreImgSrc: string = "https://clipart-library.com/images_k/stack-of-books-transparent-background/stack-of-books-transparent-background-3.png";
  shitScoreImgSrc: string = "https://www.pngarts.com/files/9/Brown-Poop-Emoji-Transparent-Image.png";

  ngOnInit() {
    this.summarizeGame();
  }


  summarizeGame() {
    if (this.score === 50) { this.compliment = "!מושלם"; this.imageSrc = this.perfectScoreImgSrc; this.playSound(Score.BEST); }
    else if (this.score > 40) { this.compliment = "!מדהים"; this.imageSrc = this.amazingScoreImgSrc; this.playSound(Score.AMAZING); }
    else if (this.score > 30) { this.compliment = "!נהדר"; this.imageSrc = this.greatScoreImgSrc; this.playSound(Score.GREAT); }
    else if (this.score > 20) { this.compliment = "!לא רע"; this.imageSrc = this.goodScoreImgSrc; this.playSound(Score.NOT_BAD); }
    else if (this.score > 10) { this.compliment = "!ניסיון יפה"; this.imageSrc = this.niceTryScoreImgSrc; this.playSound(Score.NICE_TRY); }
    else if (this.score > 5) { this.compliment = "!צריך להתאמן עוד"; this.imageSrc = this.practiceMoreScoreImgSrc; this.playSound(Score.NEED_PRACTICE); }
    else { this.compliment = "!אוי ואבוי"; this.imageSrc = this.shitScoreImgSrc; this.playSound(Score.OH_BOY); }
    this.message = (`ענית נכון על ${this.numOfCorrectAnswers} מתוך ${this.numOfQuestionsAsked} והשגת ציון של ${this.score}`);
  }



  onClose() {
    this.close.emit();
  }

  playSound(howWell: Score) {
    let audio = new Audio();

    switch (howWell) {
      case Score.BEST: { audio.src = "assets/crowd-cheer.mp3"; break; }
      case Score.AMAZING: { audio.src = "assets/winning.mp3"; break; }
      case Score.GREAT: { audio.src = "assets/goodresult.mp3"; break; }
      case Score.NOT_BAD: { audio.src = "assets/solo-clap.mp3"; break; }
      case Score.NICE_TRY: { audio.src = "assets/horrible-female-cough.mp3"; break; }
      case Score.NEED_PRACTICE: { audio.src = "assets/failure-drum.mp3"; break; }
      case Score.OH_BOY: { audio.src = "assets/fart.mp3"; break; }
    }

    audio.load();
    audio.play();
  }
}

enum Score { BEST, AMAZING, GREAT, NOT_BAD, NICE_TRY, NEED_PRACTICE, OH_BOY };