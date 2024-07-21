import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenuComponent'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: [],
      currentSlide: 0
    };
  }

  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
    this.showSlides(this.state.currentSlide);
    this.interval = setInterval(() => {
      this.plusSlides(1);
    }, 5000);
  }

  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }

  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }

  showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {
      n = 0;
    }
    if (n < 0) {
      n = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[n]) slides[n].style.display = "block";
    if (dots[n]) dots[n].className += " active";
    this.setState({ currentSlide: n });
  }

  plusSlides(n) {
    this.showSlides(this.state.currentSlide + n);
  }

  currentSlide(n) {
    this.showSlides(n);
  }

  render() {
    const newprods = this.state.newprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
            <Link to={'/product/' + item._id}>
              <img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" />
            </Link>
            <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
          </figure>
        </div>
      );
    });

    const hotprods = this.state.hotprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
            <Link to={'/product/' + item._id}>
              <img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" />
            </Link>
            <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
          </figure>
        </div>
      );
    });

    return (
      <div>
        <div className="align-center">
          {/* slideshow */}
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img src="/diorsavage.jpg" width="100%" alt="Slide 1"/>
            </div>

            <div className="mySlides fade">
              <img src="/DiorSummer.jpg" width="100%" alt="Slide 2"/>
            </div>

            <div className="mySlides fade">
              <img src="/versace.png" width="100%" alt="Slide 3"/>
            </div>
            <div className="mySlides fade">
              <img src="/hugo.jpg" width="100%" alt="Slide 3"/>
            </div>
            <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
          </div>
          <br/>
          <div style={{ textAlign: 'center' }}>
            <span className="dot" onClick={() => this.currentSlide(0)}></span>
            <span className="dot" onClick={() => this.currentSlide(1)}></span>
            <span className="dot" onClick={() => this.currentSlide(2)}></span>
            <span className="dot" onClick={() => this.currentSlide(3)}></span>
          </div>
          <h2 className="text-center">NEW PRODUCTS</h2>
          {newprods}
        </div>
        {this.state.hotprods.length > 0 ?
        <div className="align-center">
            <h2 className="text-center">HOT PRODUCTS</h2>
            {hotprods}
          </div>
          : <div />
        }

        <div className="footer">
            <div class="footer-item">
                <p>Address 1: <b>69/68 Dang Thuy Tram</b> str, District <b>Binh Thanh</b>, <b>Ho Chi Minh</b> city</p>
                <p>Address 2: <b>Nguyen Khac Nhu</b> str, District <b>1</b>, <b>Ho Chi Minh</b> city</p>
                <p>Email: Example@gmail.com</p>
                <p>Phone: +0123 4567 8910</p>
                <p>Payment Accepted</p>
                <img src="/mastercard.png"/>
                <img src="/paypal.png"/>
                <img src="/applepay.png"/>
            </div>
        </div>
         
      </div>
    );
  }
}

export default Home;
