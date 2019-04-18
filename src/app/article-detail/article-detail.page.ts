import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface QiitaItem {
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: string;
  id: string;
  likes_count: number;
  page_views_count: number;
  private: boolean;
  reactions_count: number;
  rendered_body: string;
  tags: string[];
  title: string;
  updated_at: string;
  url: string;
  user: string[];
}

const apiPath = 'https://qiita.com/api/v2/items/';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {

  qiitaItem: QiitaItem;
  isLoading = true;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const id = params['id'];
      this.http.get<QiitaItem>(`${apiPath}${id}`).subscribe( res => {
        this.qiitaItem = res;
        this.isLoading = false;
      }, error => {
        console.log(error);
        if (error.status === 404) {
          this.notFound = true;
        }
        this.isLoading = false;
      });
    });
  }
}
