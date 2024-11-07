import React from 'react'
import './apparel.css'

const mapheadertext = [
    {test: "HOME"}
]

const lilist = [
  {img: "src/assets/mail.png", title: "email adress", content: "a@example.com"},
  {img: "src/assets/telephone.png", title: "phone number", content: "010 1111 2222"},
  {img: "src/assets/circle.png", title: "location", content: "서울특별시 광진구"},
  {img: "src/assets/clock.png", title: "working hour", content: "9am ~ 6pm"}
]

const maplilist = lilist.map(lilist => (
  <li>
      <div>
        <img src={lilist.img} alt="" />
        <div>{lilist.title}</div>
      </div>
      <div>{lilist.content}</div>
    </li>
));

export default function Apparel() {
  return (
    <>
    <header class="header">
      <nav>
        <h1>
          <a href=""> apparel shop </a>
        </h1>
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">PRODUCTS</a></li>
        </ul>
      </nav>
      <img src="src/assets/apparel.png" alt="" />
    </header>
    <div class="container">
      <main>
        <section class="about">
          <img src="src/assets/apparel2.jpg" alt="" />
          <div>
            <h2 class="section-title">About Our Company</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam aliquam in iure odit, accusantium officia incidunt
              quaerat, sit quis voluptas provident, similique rem quisquam ipsa
              repellendus sint ex quos quibusdam.
            </p>
          </div>
        </section>

        <section class="contact">
          <h2 class="section-title">contact us</h2>
          <div>
            <form class="contact-form">
              <label for="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                name="username"
              />

              <label for="email">Email</label>
              <input type="email" placeholder="Email" id="email" name="email" />

              <input type="submit" value="send" />
            </form>
            <img src="src/assets/apparel3.jpg" alt="" />
          </div>
        </section>

        <section class="more">
          <h2 class="section-title">more</h2>
          <ul class="more-info">
            {maplilist}
          </ul>
        </section>
      </main>
      <hr />
      <footer>all rights reserved</footer>
    </div>
    </>
  )
}
