import React from "react";
import "../Filter/filter.css";
import { useProduct } from "../../context/ProductContext";
const Filter = () => {
  const { productState, productDispatch } = useProduct();
  const { sortBy, categories, rating } = productState;
  const { Apple, Samsung, Redmi, Realme, Oneplus, Oppo } = categories;

  const { price } = productState;
  return (
    <div>
      <main class="page">
        <div class="grid-c1-6">
          <div class="filter-box">
            <div class="filter">
              <h1 class="font-l">Filters</h1>
              <p
                class="clearall"
                onClick={() => productDispatch({ type: "CLEAR" })}
              >
                Clear
              </p>
            </div>
            <h2>Price</h2>
            <h3>Price :  ₹{price}</h3>
            <div class="input-range center">
              <input
                type="range"
                min={8999}
                max={200000}
                step={1000}
                value={price}
                className="slider"
                onChange={(e) =>
                  productDispatch({
                    type: "PRICE_SLIDER",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <h2 class="padding-5">Brands</h2>

            <div class="brand-box">
              <div class="brand-checkbox">
                <input
                  type="checkbox"
                  name="Apple"
                  id="brandapple"
                  checked={Apple}
                  onChange={() => productDispatch({ type: "APPLE" })}
                />
                <label class="font-s padding-5" for="brandapple">
                  Apple
                </label>
              </div>
              <div class="brand-checkbox">
                <input
                  type="checkbox"
                  name="Samsung"
                  id="brandsamsung"
                  checked={Samsung}
                  onChange={() => productDispatch({ type: "SAMSUNG" })}
                />
                <label class="font-s padding-5" for="brandsamsung">
                  Samsung
                </label>
              </div>
              <div class="brand-checkbox">
                <input
                  type="checkbox"
                  name="Redmi"
                  id="brandredmi"
                  checked={Redmi}
                  onChange={() => productDispatch({ type: "REDMI" })}
                />
                <label class="font-s padding-5" for="brandredmi">
                  Redmi
                </label>
              </div>
              <div class="brand-checkbox">
                <input
                  type="checkbox"
                  name="Realme"
                  id="brandrealme"
                  checked={Realme}
                  onChange={() => productDispatch({ type: "REALME" })}
                />
                <label class="font-s padding-5" for="brandrealme">
                  Realme
                </label>
              </div>
              <div class="brand-checkbox">
                <input
                  type="checkbox"
                  name="oneplus"
                  id="brandoneplus"
                  checked={Oneplus}
                  onChange={() => productDispatch({ type: "ONEPLUS" })}
                />
                <label class="font-s padding-5" for="brandoneplus">
                  Oneplus
                </label>
              </div>
              <div class="brand-checkbox">
                <input
                  type="checkbox"
                  name="oppo"
                  id="brandoppo"
                  checked={Oppo}
                  onChange={() => productDispatch({ type: "OPPO" })}
                />
                <label class="font-s padding-5" for="brandoppo">
                  Oppo
                </label>
              </div>
            </div>

            <h2 class="padding-5">Rating</h2>
            <div class="rating-box">
              <div class="brand-checkbox">
                <input
                  type="radio"
                  name="rating"
                  checked={rating === 4}
                  onChange={() =>
                    productDispatch({ type: "4_AND_ABOVE", payload: 4 })
                  }
                />
                <label class="font-s padding-5" for="">
                  4 Stars & above
                </label>
              </div>
              <div class="brand-checkbox">
                <input
                  type="radio"
                  name="rating"
                  checked={rating === 3}
                  onChange={() =>
                    productDispatch({ type: "3_AND_ABOVE", payload: 3 })
                  }
                />
                <label class="font-s padding-5" for="">
                  3 Stars & above
                </label>
              </div>
              <div class="brand-checkbox">
                <input
                  type="radio"
                  name="rating"
                  checked={rating === 2}
                  onChange={() =>
                    productDispatch({ type: "2_AND_ABOVE", payload: 2 })
                  }
                />
                <label class="font-s padding-5" for="">
                  2 Stars & above
                </label>
              </div>
              <div class="brand-checkbox">
                <input
                  type="radio"
                  name="rating"
                  checked={rating === 1}
                  onChange={() =>
                    productDispatch({ type: "1_AND_ABOVE", payload: 1 })
                  }
                />
                <label class="font-s padding-5" for="">
                  1 Stars & above
                </label>
              </div>
            </div>

            <h2 class="padding-5">Sort by</h2>
            <div class="sortby-box">
              <div class="brand-checkbox">
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === "LOW_TO_HIGH"}
                  onChange={() => productDispatch({ type: "LOW_TO_HIGH" })}
                />
                <label class="font-s padding-5" for="">
                  Price - Low to High
                </label>
              </div>
              <div class="brand-checkbox">
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === "HIGH_TO_LOW"}
                  onChange={() => productDispatch({ type: "HIGH_TO_LOW" })}
                />
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
