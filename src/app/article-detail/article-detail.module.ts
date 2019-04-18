import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ArticleDetailPage } from './article-detail.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ArticleDetailPage }
];

@NgModule({
  declarations: [ArticleDetailPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ]
})
export class ArticleDetailPageModule { }
