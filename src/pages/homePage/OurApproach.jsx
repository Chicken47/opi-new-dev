import React from "react";
import "./ourApproach.css";

const OurApproach = () => {
  return (
    <section class="hero-section">
      <div class="card-grid">
        <a class="card" href="#">
          <div
            class="card__background"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></div>
          <div class="card__content">
            <p class="card__category">Category</p>
            <h3 class="card__heading">Example Card Heading</h3>
          </div>
        </a>
        <a class="card" href="#">
          <div
            class="card__background"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></div>
          <div class="card__content">
            <p class="card__category">Category</p>
            <h3 class="card__heading">Example Card Heading</h3>
          </div>
        </a>
        <a class="card" href="#">
          <div
            class="card__background"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></div>
          <div class="card__content">
            <p class="card__category">Category</p>
            <h3 class="card__heading">Example Card Heading</h3>
          </div>
        </a>
        <a class="card" href="#">
          <div
            class="card__background"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></div>
          <div class="card__content">
            <p class="card__category">Category</p>
            <h3 class="card__heading">Example Card Heading</h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default OurApproach;