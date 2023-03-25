<template>
    <div class="container">
      <div class="page-title">
        <h3>{{ message }}</h3>
      </div>
      <div class="row">
        <div
          class="col-md-4"
          v-for="product in products"
          :key="product.id"
          data-product="product"
        >
          <div class="m-portlet m-portlet--full-height">
            <div class="m-portlet__body">
              <div class="tab-content">
                <div class="tab-pane active" id="m_widget4_tab1_content">
                  <div class="m-widget4 m-widget4--progress">
                    <div class="m-widget4__item">
                      <div class="m-widget4__img m-widget4__img--pic">
                        <img
                          src="https://media.karousell.com/media/photos/products/2021/7/29/trabucco_avatar_400_telescopic_1627558466_c6751791_progressive"
                          alt=""
                        />
                      </div>
                      <div class="m-widget4__info">
                        <span class="m-widget4__title"> {{ product.name }} </span>
                        <br />
                        <span class="m-widget4__sub">
                          {{ product.price }}kr.
                        </span>
                        <span class="m-widget4__sub"><br/>
                          MOMS = {{ calculateWat(product.price) }}kr.
                        </span>
                      </div>
                      <div class="m-widget4__ext">
                        <button
                          @click="deleteProduct(product)"
                          class="btn btn-primary"
                          data-cy="taskDelete"
                          id="deleteForm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <form id="form" @submit.prevent="createProduct">
          <input id="new-product" v-model="newProduct" class="form-control" />
        </form>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: ["message"],
    data() {
      return {
        newProduct: "",
          products: [
            {
              id: 1,
              name: "Penn Squadron II",
              price: 599,
            },
            {
              id: 2,
              name: "Penn Squadron III",
              price: 799,
            },
          ],
      };
    },
    methods: {
      createProduct() {
        this.products.push({
          id: 3,
          name: this.newProduct,
          price: 199,
        });
        this.newProduct = "";
      },
  
      deleteProduct(product) {
        const newList = this.products.filter((p) => product.id !== p.id);
        this.products = newList;
      },
      calculateWat(price) {
        let wat = 0.25 * price;
        return wat;
      },
    },
  };
  </script>