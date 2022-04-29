import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urlTrendingMovies = "http://localhost:4200/assets/data/trending-movies.json"
  urlTheatreMovies = "http://localhost:4200/assets/data/theatre-movies.json"
  
  trendingMovies: any
  
  theatreMovies: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingMovies()
    this.getTheatreMovies()
  }

  getTrendingMovies() {
    this.http.get(this.urlTrendingMovies).subscribe((movies) => {
      this.trendingMovies = movies
      console.log(this.trendingMovies)
    })
  }

  getTheatreMovies() {
    this.http.get(this.urlTheatreMovies).subscribe((movies) => {
      this.theatreMovies = movies
    })
  }

}
