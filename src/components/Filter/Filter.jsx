import React from "react";
import "../Filter/filter.css";
const Filter = () => {
  return (
    <div>
      <main class="page">
        <div class="grid-c1-6">
          <div class="filter-box">
            <div class="filter">
              <h1 class="font-l">Filters</h1>
              <p class="clearall">Clear</p>
            </div>
            <h2>Price</h2>
            <div class="input-range center">
              <input
                type="range"
                min="10"
                max="1000"
                value="500"
              />
            </div>
            <h2 class="padding-5">Brands</h2>

            <div class="brand-box">
              <div class="brand-checkbox">
                <input type="checkbox" name="Apple" id="brandapple" />
                <label class="font-s padding-5" for="brandapple">
                  Apple
                </label>
              </div>
              <div class="brand-checkbox">
                <input type="checkbox" name="Samsung" id="brandsamsung" />
                <label class="font-s padding-5" for="brandsamsung">
                  Samsung
                </label>
              </div>
              <div class="brand-checkbox">
                <input type="checkbox" name="Redmi" id="brandredmi" />
                <label class="font-s padding-5" for="brandredmi">
                  Redmi
                </label>
              </div>
              <div class="brand-checkbox">
                <input type="checkbox" name="Realme" id="brandrealme" />
                <label class="font-s padding-5" for="brandrealme">
                  Realme
                </label>
              </div>
              <div class="brand-checkbox">
                <input type="checkbox" name="oneplus" id="brandoneplus" />
                <label class="font-s padding-5" for="brandoneplus">
                  Oneplus
                </label>
              </div>
              <div class="brand-checkbox">
                <input type="checkbox" name="oppo" id="brandoppo" />
                <label class="font-s padding-5" for="brandoppo">
                  Oppo
                </label>
              </div>
            </div>

            <h2 class="padding-5">Rating</h2>
            <div class="rating-box">
              <div class="brand-checkbox">
                <input type="radio" name="" id="" />
                <label class="font-s padding-5" for="">
                  4 Stars & above
                </label>
              </div>
              <div class="brand-checkbox">
                <input type="radio" name="" id="" />
                <label class="font-s padding-5" for="">
                  3 Stars & above
                </label>
              </div>
              <div class="brand-checkbox">
                <input type="radio" name="" id="" />
                <label class="font-s padding-5" for="">
                  2 Stars & above
                </label>
              </div>
              <div class="brand-checkbox">
                <input type="radio" name="" id="" />
                <label class="font-s padding-5" for="">
                  1 Stars & above
                </label>
              </div>
            </div>

            <h2 class="padding-5">Sort by</h2>
            <div class="sortby-box">
              <div class="brand-checkbox">
                <input type="radio" name="" id="" />
                <label class="font-s padding-5" for="">
                  Price - Low to High
                </label>
              </div>
              <div class="brand-checkbox">
                <input type="radio" name="" id="" />
                <label class="font-s padding-5" for="">
                  Price - High to Low
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Filter;
