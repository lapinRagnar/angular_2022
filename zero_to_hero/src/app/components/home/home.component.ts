import { Router } from '@angular/router';
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
  urlPopularMovies = "http://localhost:4200/assets/data/popular-movies.json"
  
  trendingMovies: any  
  theatreMovies: any
  popularMovies: any

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTrendingMovies()
    this.getTheatreMovies()
    this.getPopularMovies()
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
  getPopularMovies() {
    this.http.get(this.urlPopularMovies).subscribe((movies) => {
      this.popularMovies = movies
    })
  }

  goToTheMoviePage(type: string, id: number) {
    this.router.navigate(['movie', type, id])
  }  

}
