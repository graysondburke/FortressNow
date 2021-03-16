import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { ItemsComponent } from './items/items.component';
import { ExitsComponent } from './exits/exits.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    ItemsComponent,
    ExitsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
