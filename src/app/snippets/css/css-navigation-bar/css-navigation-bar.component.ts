import { Component } from '@angular/core';



@Component({
  selector: 'app-css-navigation-bar',
  templateUrl: './css-navigation-bar.component.html',
  styleUrl: './css-navigation-bar.component.css'
})
export class CssNavigationBarComponent {
  html_code = `<header class="header">
  <a href="#" class="logo">Learning Library</a>
  <nav class="navbar">
    <a routerLink="/home">Home</a>
    <a routerLink="/java">Java</a>
    <a routerLink="/angular">Angular</a>
    <a routerLink="/css">CSS</a>
  </nav>
</header>`;

  css_code=`.header{
  /*position:fixed;*/
  top:0;
  left:0;
  width: 100%;
  padding: 20px 100px;
  background: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.logo{
  font-size: 32px;
  color: black;
  text-decoration: none;
  font-weight: 700;
}

.navbar a{
  position: relative;
  font-size: 18px;
  color: black;
  font-weight: 500;
  text-decoration: none;
  margin-left: 40px;
}

.navbar a::before{
  content:'';
  position: absolute;
  top:100%;
  left:0;
  width: 0;
  height: 2px;
  background: black;
  transition: .3s
}
.navbar a:hover::before{
  width: 100%;
}
`;

}
