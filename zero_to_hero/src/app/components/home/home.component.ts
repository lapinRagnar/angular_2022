import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url = "http://localhost:4200/assets/data/trending-movies.json"
  trendingMovies: any
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingMovies()
  }

  getTrendingMovies() {
    this.http.get(this.url).subscribe((movies) => {
      this.trendingMovies = movies
      console.log(this.trendingMovies)
    })
  }

}
