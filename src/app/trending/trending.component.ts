import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
  standalone: false
})
export class TrendingComponent implements OnInit, AfterViewInit {

  httpClient = inject(HttpClient);
  trendingMovies: any[] = []; 

  @ViewChild('moviesContainer', { static: false }) moviesContainer!: ElementRef;

  selectedMovie: any = null;
  showDetails: boolean = false;

  ngOnInit(): void {
    this.fetchData(); 
  }

  ngAfterViewInit(): void {
    if (!this.moviesContainer) {
      console.error("Movies container not found!");
    }
  }

  fetchData(): void {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=6c4ec239103118e95aad12327df3c00d&language=en-US`;

    this.httpClient.get(url).subscribe(
      (data: any) => {
        this.trendingMovies = data.results;
      },
      (error: any) => {
        console.error('Error fetching trending movies:', error); 
      }
    );
  }

  scrollRight(): void {
    if (this.moviesContainer?.nativeElement) {
      this.moviesContainer.nativeElement.scrollBy({ left: 800, behavior: 'smooth' });
    }
  }

  scrollLeft(): void {
    if (this.moviesContainer?.nativeElement) {
      this.moviesContainer.nativeElement.scrollBy({ left: -800, behavior: 'smooth' });
    }
  }

  openDetails(movie: any) {
    this.selectedMovie = movie;
    this.showDetails = true;
  }

  closeDetails(event: Event) {
    if (event.target === event.currentTarget) {
      this.showDetails = false;
    }
  }
}
