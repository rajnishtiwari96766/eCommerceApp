import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { customHook1 } from "../../context/prod_context";
import PageNavigation from "./PageNavigation";
import Img_arr from "./Img_arr";
import Currency from "../../helper/Currency";
import Star_review from "./star_review";
import Add_to_cart from "./add_to_cart";
const Single_prod = () => {
  const api = "https://api.pujakaitem.com/api/products";

  const { getSingleProducts, isSingleLoading, singleProduct } = customHook1();

  const {
    id: alias,
    name,
    image,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
  } = singleProduct;

  // this is a the hoook used to access the parameters for dynamic routing
  const { id } = useParams();

  // console.log(id)

  useEffect(() => {
    getSingleProducts(`${api}?id=${id}`);
  }, []);

  //it is for th loading section untill the real item appears
  if (isSingleLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <div className="h-12 p-4 text-lg bg-slate-300 ">
        <PageNavigation title={name} />
      </div>

      <div className="flex">
        <div className="images px-16 py-20 h-1/4 ">
          <Img_arr imgs={image} />
        </div>

        <div className="details py-10 ">
          <div className="flex">
            <div className="text-3xl my-3">{name}</div>
            <div className="text-lg"></div>
            <p>{stock > 0 ? "In-stock" : "Out of stock"}</p>
          </div>
          {/* <div>{company}</div> */}

          <Star_review stars={stars} reviews={reviews} />

          <div className="my-3 text-lg">
            <span className="">
              MRP:
              <del className="px-0.5">
                <Currency price={price * 15} />
              </del>
            </span>

            <span className="px-3">
              <Currency price={price * 10} />
            </span>
          </div>

          <div className="text-lg my-5">
            <p>{description}</p>
          </div>

          <div className="space-x-1 m-2">
            <button className="p-3 rounded-md">
            <i class="fa-solid fa-truck fa-xl"></i>
            <p>Free Delivery</p>
            </button>

            <button className="p-3  rounded-md">
            <i class="fa-solid fa-rotate fa-xl"></i>
            <p>30-Days Replacement</p>
            </button>

            <button className="p-3  rounded-md">
            <i class="fa-solid fa-shield fa-xl"></i>
            <p>1-Year Warranty</p>
            </button>

                      </div>

          <div>
            <hr />
            {stock > 0 && <Add_to_cart product={singleProduct} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_prod;
