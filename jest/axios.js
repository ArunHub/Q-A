const response = {
  data: {
    data: [
      {
        _id: "61714ed57aeb7d32a436d3e1",
        store_url: "sos-staging.myshopify.com",
        label: "raj addon",
        products: [
          {
            _id: "6172cbd6fc022621c67a5c64",
            product_id: 6797239845071,
            variant_id: 40469626323151,
            image_src:
              "https://cdn.shopify.com/s/files/1/0592/9094/3695/products/DSC02772-01.jpg?v=1628698420",
            handle: "agape-vase",
            title: "AGAPE",
            price: 1199,
            variant_title: "Default Title",
            addon_product: {
              _id: "61265f3ec185fbee30e2df67",
              id: 6797239845071,
              store_url: "sos-staging.myshopify.com",
              created_at: "2021-08-11T16:13:40.000Z",
              handle: "agape-vase",
              image: {
                src: "https://cdn.shopify.com/s/files/1/0592/9094/3695/products/DSC02772-01.jpg?v=1628698420",
              },
              published_at: "2021-10-09T12:11:51.000Z",
              status: "active",
              tags: [
                "Add On",
                "All Products",
                "city_bangalore",
                "city_mumbai",
                "Flower Vases",
              ],
              cities: ["bangalore", "mumbai"],
              title: "AGAPE",
              updated_at: "2021-10-25T09:39:14.000Z",
              variants: [
                {
                  _id: "61767b4afc022621c67a5cb3",
                  id: 40469626323151,
                  product_id: 6797239845071,
                  title: "Default Title",
                  price: 1199,
                  sku: "",
                  compare_at_price: null,
                  inventory_management: null,
                },
              ],
              addon_id: null,
              addon_title: "",
            },
          },
        ],
        created_at: "2021-10-21T11:28:21.194Z",
        updated_at: "2021-10-22T14:33:58.321Z",
        __v: 5,
        associated_products: [
          {
            id: 6797323043023,
            handle: "hand-tied-red-delight",
            image: {
              src: "https://cdn.shopify.com/s/files/1/0592/9094/3695/products/TTF7212-1-01-01.jpg?v=1628700797",
            },
            tags: [
              "All Products",
              "Anniversary",
              "Hand-tied Bouquets",
              "Holi",
              "occasion",
              "Same Day",
              "Teacher's day",
              "valentine",
            ],
            title: "Hand-Tied Red Delight",
            variants: [
              {
                _id: "61504510024c6d43191a7dc7",
                product_id: 6797323043023,
                id: 40469782036687,
                title: "Regular",
                price: 1399,
                sku: "",
                compare_at_price: 1899,
                inventory_management: "shopify",
              },
              {
                _id: "61504510024c6d43191a7dc8",
                product_id: 6797323043023,
                id: 40469782069455,
                title: "Deluxe (50% xtra delight)",
                price: 1999,
                sku: "",
                compare_at_price: 2499,
                inventory_management: "shopify",
              },
            ],
            __v: 1,
            addon_id: "61714ed57aeb7d32a436d3e1",
            deleted: false,
            cities: [],
            addon_title: "raj addon",
          },
        ],
      },
    ],
    emptyData: [],
    message: "Addon groups fetched successfully.",
  },
};

export default {
  create: jest.fn().mockImplementation(() => {
    return {
      get: () => Promise.resolve(response),
      post: () => Promise.resolve(response),
    };
  }),
};
