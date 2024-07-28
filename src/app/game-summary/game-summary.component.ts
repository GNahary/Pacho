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
    if (this.score === 50) { this.compliment = "!מושלם"; this.imageSrc = this.perfectScoreImgSrc; }
    else if (this.score > 40) { this.compliment = "!מדהים"; this.imageSrc = this.amazingScoreImgSrc; }
    else if (this.score > 30) { this.compliment = "!נהדר"; this.imageSrc = this.greatScoreImgSrc; }
    else if (this.score > 20) { this.compliment = "!לא רע"; this.imageSrc = this.goodScoreImgSrc; }
    else if (this.score > 10) { this.compliment = "!ניסיון יפה"; this.imageSrc = this.niceTryScoreImgSrc; }
    else if (this.score > 5) { this.compliment = "!צריך להתאמן עוד"; this.imageSrc = this.practiceMoreScoreImgSrc; }
    else { this.compliment = "!אוי ואבוי"; this.imageSrc = this.shitScoreImgSrc; }
    this.message = (`ענית נכון על ${this.numOfCorrectAnswers} מתוך ${this.numOfQuestionsAsked} והשגת ציון של ${this.score}`);
  }



  onClose() {
    this.close.emit();
  }

}